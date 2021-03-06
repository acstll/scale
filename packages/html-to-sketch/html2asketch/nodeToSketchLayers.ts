import Rectangle from './model/rectangle';
import Bitmap from './model/bitmap';
import SVG from './model/svg';
import ShapeGroup from './model/shapeGroup';
import Group from './model/group';
import Style from './model/style';
import Text from './model/text';
import TextStyle from './model/textStyle';
import {parseBackgroundImage, getActualImageSize} from './helpers/background';
import {splitShadowString, shadowStringToObject} from './helpers/shadow';
import {getSVGString} from './helpers/svg';
import {getGroupBCR} from './helpers/bcr';
import {fixWhiteSpace} from './helpers/text';
import {isNodeVisible, isTextVisible} from './helpers/visibility';
import TextAttributedString from './model/textAttributedString';

const DEFAULT_VALUES = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none',
};

const ALIGNMENTS = {
  left: 0,
  right: 1,
  center: 2,
  justify: 3
};

function hasOnlyDefaultStyles(styles: object) {
  return Object.keys(DEFAULT_VALUES).every(key => {
    const defaultValue = DEFAULT_VALUES[key];
    const value = styles[key];

    return defaultValue === value;
  });
}

function fixBorderRadius(borderRadius: string, width: number, height: number) {
  const matches = borderRadius.match(/^([0-9.]+)(.+)$/);

  // Sketch uses 'px' units for border radius, so we need to convert % to px
  if (matches && matches[2] === '%') {
    const baseVal = Math.max(width, height);
    const percentageApplied = baseVal * (parseInt(matches[1], 10) / 100);

    return Math.round(percentageApplied);
  }
  return parseInt(borderRadius, 10);
}

function isSVGDescendant(node: HTMLElement) {
  return (node instanceof SVGElement) && node.matches('svg *');
}

export default function nodeToSketchLayers(node: HTMLElement, options: any) {
  const layers: any[] = [];
  const bcr = node.getBoundingClientRect();
  const {left, top} = bcr;
  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;

  const styles = getComputedStyle(node);
  const {
    backgroundColor,
    backgroundImage,
    backgroundPositionX,
    backgroundPositionY,
    backgroundSize,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    textAlign,
    fontFamily,
    fontSize,
    lineHeight,
    color,
    boxShadow,
    opacity,
    whiteSpace,
  }: any = styles;

  // skip SVG child nodes as they are already covered by `new SVG(…)`
  if (isSVGDescendant(node)) {
    return layers;
  }

  if (!isNodeVisible(node, bcr, styles)) {
    return layers;
  }

  const shapeGroup = new ShapeGroup({x: left, y: top, width, height});

  if (options && options.getRectangleName) {
    shapeGroup.setName(options.getRectangleName(node));
  } else {
    shapeGroup.setName('custom');
  }

  const isImage = node.nodeName === 'IMG' && (node as HTMLImageElement).currentSrc;
  const isSVG = node.nodeName === 'svg';

  // if layer has no background/shadow/border/etc. skip it
  if (isImage || !hasOnlyDefaultStyles(styles)) {
    const style = new Style();

    if (backgroundColor) {
      style.addColorFill(backgroundColor);
    }

    if (isImage) {
      const absoluteUrl = new URL((node as HTMLImageElement).currentSrc, location.href);

      style.addImageFill(absoluteUrl.href);
      shapeGroup.setFixedWidthAndHeight();
    }

    if (boxShadow !== DEFAULT_VALUES.boxShadow) {
      const shadowStrings = splitShadowString(boxShadow);

      shadowStrings.forEach((shadowString: string) => {
        const shadowObject: any = shadowStringToObject(shadowString);

        if (shadowObject.inset) {
          if (borderWidth.indexOf(' ') === -1) {
            shadowObject.spread += parseFloat(borderWidth);
          }
          style.addInnerShadow(shadowObject);
        } else {
          style.addShadow(shadowObject);
        }
      });
    }

    // support for one-side borders (using inner shadow because Sketch doesn't support that)
    if (borderWidth.indexOf(' ') === -1) {
      style.addBorder({color: borderColor, thickness: parseFloat(borderWidth)});
    } else {
      const borderTopWidthFloat = parseFloat(borderTopWidth);
      const borderRightWidthFloat = parseFloat(borderRightWidth);
      const borderBottomWidthFloat = parseFloat(borderBottomWidth);
      const borderLeftWidthFloat = parseFloat(borderLeftWidth);

      if (borderTopWidthFloat !== 0) {
        style.addInnerShadow({color: borderTopColor, offsetY: borderTopWidthFloat});
      }
      if (borderRightWidthFloat !== 0) {
        style.addInnerShadow({color: borderRightColor, offsetX: -borderRightWidthFloat});
      }
      if (borderBottomWidthFloat !== 0) {
        style.addInnerShadow({color: borderBottomColor, offsetY: -borderBottomWidthFloat});
      }
      if (borderLeftWidthFloat !== 0) {
        style.addInnerShadow({color: borderLeftColor, offsetX: borderLeftWidthFloat});
      }
    }

    if (!options || options.layerOpacity !== false) {
      style.addOpacity(opacity);
    }

    shapeGroup.setStyle(style);

    //TODO borderRadius can be expressed in different formats and use various units - for simplicity we assume "X%"
    const cornerRadius = {
      topLeft: fixBorderRadius(borderTopLeftRadius, width, height),
      topRight: fixBorderRadius(borderTopRightRadius, width, height),
      bottomLeft: fixBorderRadius(borderBottomLeftRadius, width, height),
      bottomRight: fixBorderRadius(borderBottomRightRadius, width, height),
    };

    const rectangle = new Rectangle({width, height, cornerRadius});

    shapeGroup.addLayer(rectangle);

    // This should return a array once multiple background-images are supported
    const backgroundImageResult = parseBackgroundImage(backgroundImage);

    let layer: any = shapeGroup;

    if (backgroundImageResult) {

      switch (backgroundImageResult.type) {
        case 'Image': {
          const img: any = new Image();

          img.src = backgroundImageResult.value;

          // TODO add support for % values
          const bitmapX = parseFloat(backgroundPositionX);
          const bitmapY = parseFloat(backgroundPositionY);

          const actualImgSize = getActualImageSize(
            backgroundSize,
            {width: img.width, height: img.height},
            {width, height}
          );

          if (
            bitmapX === 0 && bitmapY === 0 &&
            actualImgSize.width === img.width && actualImgSize.height === img.height
          ) {
            // background image fits entirely inside the node, so we can represent it with a (cheaper) image fill
            style.addImageFill(backgroundImageResult.value);
          } else {
            // use a Group(Shape + Bitmap) to correctly represent clipping of the background image
            const bm = new Bitmap({
              url: backgroundImageResult.value,
              x: bitmapX,
              y: bitmapY,
              width: actualImgSize.width,
              height: actualImgSize.height,
            });

            bm.setName('background-image');
            shapeGroup.setHasClippingMask(true);

            const group = new Group({x: left, y: top, width, height});

            // position is relative to the group
            shapeGroup.setPosition({x: 0, y: 0});
            group.addLayer(shapeGroup);
            group.addLayer(bm);

            layer = group;
          }

          break;
        }
        case 'LinearGradient':
          style.addGradientFill(backgroundImageResult.value);
          break;
        default:
          // Unsupported types:
          // - radial gradient
          // - multiple background-image
          break;
      }
    }

    layers.push(layer)
  }

  if (isSVG) {
    // sketch ignores padding and centerging as defined by viewBox and preserveAspectRatio when
    // importing SVG, so instead of using BCR of the SVG, we are using BCR of its children
    const childrenBCR = getGroupBCR(Array.from(node.children));
    const svgLayer = new SVG({
      x: childrenBCR.left,
      y: childrenBCR.top,
      width: childrenBCR.width,
      height: childrenBCR.height,
      rawSVGString: getSVGString(node),
    });

    layers.push(svgLayer);

    return layers;
  }

  if (!isTextVisible(styles)) {
    return layers;
  }

  const textStyle = new TextStyle({
    fontFamily,
    fontSize: parseInt(fontSize, 10),
    color,
    skipSystemFonts: options && options.skipSystemFonts,
  });

  const alignment = ALIGNMENTS[textAlign] || 0;

  const textAttributedString = (text: string) => new TextAttributedString({
    text,
    fontFamily,
    fontSize: parseInt(fontSize, 10),
    skipSystemFonts: options && options.skipSystemFonts,
    color,
    alignment
  })

  const rangeHelper = document.createRange();

  // Text
  Array.from(node.childNodes)
    .filter((child: HTMLElement) => child.nodeType === 3 && child.nodeValue && child.nodeValue.trim().length > 0)
    .forEach((textNode: HTMLElement) => {
      rangeHelper.selectNodeContents(textNode);
      const textRanges = Array.from(rangeHelper.getClientRects());
      const numberOfLines = textRanges.length;
      const textBCR = rangeHelper.getBoundingClientRect();
      const lineHeightInt = parseInt(lineHeight, 10);
      const textBCRHeight = textBCR.bottom - textBCR.top;
      let fixY = 0;

      // center text inside a box
      // TODO it's possible now in sketch - fix it!
      if (lineHeightInt && textBCRHeight !== lineHeightInt * numberOfLines) {
        fixY = (textBCRHeight - lineHeightInt * numberOfLines) / 2;
      }

      const textValue = fixWhiteSpace(textNode.nodeValue || '', whiteSpace);

      const text = new Text({
        x: textBCR.left,
        y: textBCR.top + fixY,
        width: textBCR.right - textBCR.left,
        height: textBCRHeight,
        text: textValue,
        style: textStyle,
        attributedString: textAttributedString(textValue),
        multiline: numberOfLines > 1,
      });

      if (options && options.onTextGenerate) {
        options.onTextGenerate({layer: text, node: textNode});
      }

      layers.push(text);
    });

  return layers;
}
