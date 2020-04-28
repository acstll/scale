/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { StyleSheet, } from "jss";
export namespace Components {
    interface ScaleAlert {
        /**
          * (optional) Alert class
         */
        "customClass"?: string;
        /**
          * (optional) Alert title
         */
        "headline": string;
        /**
          * (optional) Alert icon
         */
        "icon"?: string;
        /**
          * Alert method: open()
         */
        "open": () => Promise<void>;
        /**
          * (optional) Alert opened
         */
        "opened": boolean;
        /**
          * (optional) Alert size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Alert timeout
         */
        "timeout"?: boolean | number;
        /**
          * (optional) Alert variant
         */
        "variant"?: string;
    }
    interface ScaleBreadcrumb {
        "separator"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleButton {
        "ariaLabel"?: string;
        /**
          * (optional) Button class
         */
        "customClass"?: string;
        /**
          * Button method: disable()
         */
        "disable": () => Promise<void>;
        /**
          * (optional) Disabled button
         */
        "disabled"?: boolean;
        /**
          * Button method: enable()
         */
        "enable": () => Promise<void>;
        "focusable"?: boolean;
        /**
          * (optional) Link button
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon after
         */
        "iconAfter"?: string;
        /**
          * (optional) Icon before
         */
        "iconBefore"?: string;
        /**
          * (optional) Icon only
         */
        "iconSize"?: number;
        "role"?: string;
        /**
          * (optional) Button size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link target button
         */
        "target"?: string;
        /**
          * (optional) Button variant
         */
        "variant"?: string;
    }
    interface ScaleCard {
        /**
          * (optional) Card class
         */
        "customClass"?: string;
        /**
          * (optional) Link disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Link card
         */
        "href"?: string;
        /**
          * (optional) Link interactive
         */
        "interactive"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link card target
         */
        "target"?: string;
    }
    interface ScaleCarousel {
        /**
          * (optional) Carousel class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) carousel display direction
         */
        "vertical"?: boolean;
    }
    interface ScaleDivider {
        /**
          * (optional) Divider class
         */
        "customClass"?: string;
        /**
          * (optional) Divider size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Divider vertical
         */
        "vertical"?: boolean;
    }
    interface ScaleIcon {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        "focusable"?: boolean;
        "height"?: number;
        /**
          * (optional) Tag theme
         */
        "name"?: string;
        "path": string;
        "size"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        "viewBox"?: string;
        "width"?: number;
    }
    interface ScaleInput {
        /**
          * (optional) Input counter
         */
        "counter"?: boolean;
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Input disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Input helper text
         */
        "helperText"?: string;
        /**
          * (optional) Input label
         */
        "label"?: string;
        /**
          * (optional) Input max length
         */
        "maxLength"?: number;
        /**
          * (optional) Input min length
         */
        "minLength"?: number;
        /**
          * (optional) Input name
         */
        "name"?: string;
        /**
          * (optional) Input placeHolder
         */
        "placeholder"?: string;
        /**
          * (optional) Input required
         */
        "required"?: boolean;
        /**
          * (optional) Input size
         */
        "size"?: string;
        /**
          * (optional) Input status
         */
        "status"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Input type
         */
        "type"?: "email" | "hidden" | "number" | "password" | "tel" | "text" | "url";
        /**
          * (optional) Input value
         */
        "value"?: string;
        /**
          * (optional) Input label variant
         */
        "variant"?: "animated" | "static";
    }
    interface ScaleLink {
        /**
          * (optional) Block link
         */
        "block"?: boolean;
        /**
          * (optional) Link class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled link
         */
        "disabled"?: boolean;
        /**
          * (optional) Link href
         */
        "href": string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon size
         */
        "iconSize"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link open a new tag
         */
        "target"?: string;
        /**
          * (optional) Link underline
         */
        "underline"?: boolean;
        /**
          * (optional) Link variant
         */
        "variant"?: string;
    }
    interface ScaleModal {
        /**
          * Modal method: onCloseModal()
         */
        "close": () => Promise<void>;
        /**
          * (optional) Modal class
         */
        "customClass"?: string;
        /**
          * Modal method: open()
         */
        "open": () => Promise<void>;
        /**
          * (required) Modal opened
         */
        "opened"?: boolean;
        /**
          * (optional) Modal size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Modal variant
         */
        "variant"?: string;
    }
    interface ScaleProgressBar {
        /**
          * (optional) Progress bar class
         */
        "customClass"?: string;
        /**
          * (required) Progress bar percentage
         */
        "percentage": number;
        /**
          * (optional) Progress bar percentage text
         */
        "showText"?: boolean;
        /**
          * (optional) Progress bar stroke width
         */
        "strokeWidth"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Progress text display inside bar
         */
        "textInside"?: boolean;
        /**
          * (optional) Progress bar variant
         */
        "variant"?: string;
    }
    interface ScaleSidebarNav {
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSidebarNavCollapsible {
        "label": string;
        "level": number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSidebarNavItem {
        "border"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSlider {
        /**
          * (optional) Slider class
         */
        "customClass"?: string;
        /**
          * (optional) Slider display value
         */
        "label": boolean;
        /**
          * (optional) Slider range max value
         */
        "max"?: number;
        /**
          * (optional) Slider range start value
         */
        "min"?: number;
        /**
          * (optional) Slider step
         */
        "step": number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Slider binding value
         */
        "value": number;
    }
    interface ScaleSwitch {
        /**
          * (optional) Active switch
         */
        "active"?: boolean;
        /**
          * (optional) Switch class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled switch
         */
        "disabled"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleTag {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Tag disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Tag dismissable
         */
        "dismissable"?: boolean;
        /**
          * (optional) Tag href
         */
        "href"?: string;
        /**
          * (optional) Tag size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Tag target
         */
        "target"?: string;
        /**
          * (optional) Tag variant
         */
        "variant"?: string;
    }
    interface ScaleText {
        /**
          * (optional) Text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Text tag
         */
        "tag"?: string;
        /**
          * (optional) Text variant
         */
        "variant"?: string;
    }
    interface ScaleToast {
        /**
          * (optional) Animated toast
         */
        "animated"?: boolean;
        /**
          * (optional) Toast autohide time
         */
        "autoHide"?: boolean | number;
        /**
          * (optional) Toast class
         */
        "customClass"?: string;
        /**
          * (optional) Toast fade duration
         */
        "fadeDuration"?: number;
        /**
          * Toast method: open()
         */
        "open": () => Promise<void>;
        /**
          * (optional) Toast opened
         */
        "opened"?: boolean;
        /**
          * (optional) Toast position right
         */
        "positionRight"?: number;
        /**
          * (optional) Toast position at the top
         */
        "positionTop"?: number;
        /**
          * (optional) Toast size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Toast time
         */
        "time"?: number;
        /**
          * (optional) Toast variant
         */
        "variant"?: string;
    }
}
declare global {
    interface HTMLScaleAlertElement extends Components.ScaleAlert, HTMLStencilElement {
    }
    var HTMLScaleAlertElement: {
        prototype: HTMLScaleAlertElement;
        new (): HTMLScaleAlertElement;
    };
    interface HTMLScaleBreadcrumbElement extends Components.ScaleBreadcrumb, HTMLStencilElement {
    }
    var HTMLScaleBreadcrumbElement: {
        prototype: HTMLScaleBreadcrumbElement;
        new (): HTMLScaleBreadcrumbElement;
    };
    interface HTMLScaleButtonElement extends Components.ScaleButton, HTMLStencilElement {
    }
    var HTMLScaleButtonElement: {
        prototype: HTMLScaleButtonElement;
        new (): HTMLScaleButtonElement;
    };
    interface HTMLScaleCardElement extends Components.ScaleCard, HTMLStencilElement {
    }
    var HTMLScaleCardElement: {
        prototype: HTMLScaleCardElement;
        new (): HTMLScaleCardElement;
    };
    interface HTMLScaleCarouselElement extends Components.ScaleCarousel, HTMLStencilElement {
    }
    var HTMLScaleCarouselElement: {
        prototype: HTMLScaleCarouselElement;
        new (): HTMLScaleCarouselElement;
    };
    interface HTMLScaleDividerElement extends Components.ScaleDivider, HTMLStencilElement {
    }
    var HTMLScaleDividerElement: {
        prototype: HTMLScaleDividerElement;
        new (): HTMLScaleDividerElement;
    };
    interface HTMLScaleIconElement extends Components.ScaleIcon, HTMLStencilElement {
    }
    var HTMLScaleIconElement: {
        prototype: HTMLScaleIconElement;
        new (): HTMLScaleIconElement;
    };
    interface HTMLScaleInputElement extends Components.ScaleInput, HTMLStencilElement {
    }
    var HTMLScaleInputElement: {
        prototype: HTMLScaleInputElement;
        new (): HTMLScaleInputElement;
    };
    interface HTMLScaleLinkElement extends Components.ScaleLink, HTMLStencilElement {
    }
    var HTMLScaleLinkElement: {
        prototype: HTMLScaleLinkElement;
        new (): HTMLScaleLinkElement;
    };
    interface HTMLScaleModalElement extends Components.ScaleModal, HTMLStencilElement {
    }
    var HTMLScaleModalElement: {
        prototype: HTMLScaleModalElement;
        new (): HTMLScaleModalElement;
    };
    interface HTMLScaleProgressBarElement extends Components.ScaleProgressBar, HTMLStencilElement {
    }
    var HTMLScaleProgressBarElement: {
        prototype: HTMLScaleProgressBarElement;
        new (): HTMLScaleProgressBarElement;
    };
    interface HTMLScaleSidebarNavElement extends Components.ScaleSidebarNav, HTMLStencilElement {
    }
    var HTMLScaleSidebarNavElement: {
        prototype: HTMLScaleSidebarNavElement;
        new (): HTMLScaleSidebarNavElement;
    };
    interface HTMLScaleSidebarNavCollapsibleElement extends Components.ScaleSidebarNavCollapsible, HTMLStencilElement {
    }
    var HTMLScaleSidebarNavCollapsibleElement: {
        prototype: HTMLScaleSidebarNavCollapsibleElement;
        new (): HTMLScaleSidebarNavCollapsibleElement;
    };
    interface HTMLScaleSidebarNavItemElement extends Components.ScaleSidebarNavItem, HTMLStencilElement {
    }
    var HTMLScaleSidebarNavItemElement: {
        prototype: HTMLScaleSidebarNavItemElement;
        new (): HTMLScaleSidebarNavItemElement;
    };
    interface HTMLScaleSliderElement extends Components.ScaleSlider, HTMLStencilElement {
    }
    var HTMLScaleSliderElement: {
        prototype: HTMLScaleSliderElement;
        new (): HTMLScaleSliderElement;
    };
    interface HTMLScaleSwitchElement extends Components.ScaleSwitch, HTMLStencilElement {
    }
    var HTMLScaleSwitchElement: {
        prototype: HTMLScaleSwitchElement;
        new (): HTMLScaleSwitchElement;
    };
    interface HTMLScaleTagElement extends Components.ScaleTag, HTMLStencilElement {
    }
    var HTMLScaleTagElement: {
        prototype: HTMLScaleTagElement;
        new (): HTMLScaleTagElement;
    };
    interface HTMLScaleTextElement extends Components.ScaleText, HTMLStencilElement {
    }
    var HTMLScaleTextElement: {
        prototype: HTMLScaleTextElement;
        new (): HTMLScaleTextElement;
    };
    interface HTMLScaleToastElement extends Components.ScaleToast, HTMLStencilElement {
    }
    var HTMLScaleToastElement: {
        prototype: HTMLScaleToastElement;
        new (): HTMLScaleToastElement;
    };
    interface HTMLElementTagNameMap {
        "scale-alert": HTMLScaleAlertElement;
        "scale-breadcrumb": HTMLScaleBreadcrumbElement;
        "scale-button": HTMLScaleButtonElement;
        "scale-card": HTMLScaleCardElement;
        "scale-carousel": HTMLScaleCarouselElement;
        "scale-divider": HTMLScaleDividerElement;
        "scale-icon": HTMLScaleIconElement;
        "scale-input": HTMLScaleInputElement;
        "scale-link": HTMLScaleLinkElement;
        "scale-modal": HTMLScaleModalElement;
        "scale-progress-bar": HTMLScaleProgressBarElement;
        "scale-sidebar-nav": HTMLScaleSidebarNavElement;
        "scale-sidebar-nav-collapsible": HTMLScaleSidebarNavCollapsibleElement;
        "scale-sidebar-nav-item": HTMLScaleSidebarNavItemElement;
        "scale-slider": HTMLScaleSliderElement;
        "scale-switch": HTMLScaleSwitchElement;
        "scale-tag": HTMLScaleTagElement;
        "scale-text": HTMLScaleTextElement;
        "scale-toast": HTMLScaleToastElement;
    }
}
declare namespace LocalJSX {
    interface ScaleAlert {
        /**
          * (optional) Alert class
         */
        "customClass"?: string;
        /**
          * (optional) Alert title
         */
        "headline"?: string;
        /**
          * (optional) Alert icon
         */
        "icon"?: string;
        /**
          * (optional) Alert opened
         */
        "opened"?: boolean;
        /**
          * (optional) Alert size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Alert timeout
         */
        "timeout"?: boolean | number;
        /**
          * (optional) Alert variant
         */
        "variant"?: string;
    }
    interface ScaleBreadcrumb {
        "separator"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleButton {
        "ariaLabel"?: string;
        /**
          * (optional) Button class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled button
         */
        "disabled"?: boolean;
        "focusable"?: boolean;
        /**
          * (optional) Link button
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon after
         */
        "iconAfter"?: string;
        /**
          * (optional) Icon before
         */
        "iconBefore"?: string;
        /**
          * (optional) Icon only
         */
        "iconSize"?: number;
        "role"?: string;
        /**
          * (optional) Button size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link target button
         */
        "target"?: string;
        /**
          * (optional) Button variant
         */
        "variant"?: string;
    }
    interface ScaleCard {
        /**
          * (optional) Card class
         */
        "customClass"?: string;
        /**
          * (optional) Link disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Link card
         */
        "href"?: string;
        /**
          * (optional) Link interactive
         */
        "interactive"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link card target
         */
        "target"?: string;
    }
    interface ScaleCarousel {
        /**
          * (optional) Carousel class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) carousel display direction
         */
        "vertical"?: boolean;
    }
    interface ScaleDivider {
        /**
          * (optional) Divider class
         */
        "customClass"?: string;
        /**
          * (optional) Divider size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Divider vertical
         */
        "vertical"?: boolean;
    }
    interface ScaleIcon {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        "focusable"?: boolean;
        "height"?: number;
        /**
          * (optional) Tag theme
         */
        "name"?: string;
        "path"?: string;
        "size"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        "viewBox"?: string;
        "width"?: number;
    }
    interface ScaleInput {
        /**
          * (optional) Input counter
         */
        "counter"?: boolean;
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Input disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Input helper text
         */
        "helperText"?: string;
        /**
          * (optional) Input label
         */
        "label"?: string;
        /**
          * (optional) Input max length
         */
        "maxLength"?: number;
        /**
          * (optional) Input min length
         */
        "minLength"?: number;
        /**
          * (optional) Input name
         */
        "name"?: string;
        "onBlurEvent"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) Input text event changed
         */
        "onChangeEvent"?: (event: CustomEvent<any>) => void;
        "onFocusEvent"?: (event: CustomEvent<any>) => void;
        "onKeyDownEvent"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) Input placeHolder
         */
        "placeholder"?: string;
        /**
          * (optional) Input required
         */
        "required"?: boolean;
        /**
          * (optional) Input size
         */
        "size"?: string;
        /**
          * (optional) Input status
         */
        "status"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Input type
         */
        "type"?: "email" | "hidden" | "number" | "password" | "tel" | "text" | "url";
        /**
          * (optional) Input value
         */
        "value"?: string;
        /**
          * (optional) Input label variant
         */
        "variant"?: "animated" | "static";
    }
    interface ScaleLink {
        /**
          * (optional) Block link
         */
        "block"?: boolean;
        /**
          * (optional) Link class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled link
         */
        "disabled"?: boolean;
        /**
          * (optional) Link href
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon size
         */
        "iconSize"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link open a new tag
         */
        "target"?: string;
        /**
          * (optional) Link underline
         */
        "underline"?: boolean;
        /**
          * (optional) Link variant
         */
        "variant"?: string;
    }
    interface ScaleModal {
        /**
          * (optional) Modal class
         */
        "customClass"?: string;
        /**
          * (required) Modal opened
         */
        "opened"?: boolean;
        /**
          * (optional) Modal size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Modal variant
         */
        "variant"?: string;
    }
    interface ScaleProgressBar {
        /**
          * (optional) Progress bar class
         */
        "customClass"?: string;
        /**
          * (required) Progress bar percentage
         */
        "percentage"?: number;
        /**
          * (optional) Progress bar percentage text
         */
        "showText"?: boolean;
        /**
          * (optional) Progress bar stroke width
         */
        "strokeWidth"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Progress text display inside bar
         */
        "textInside"?: boolean;
        /**
          * (optional) Progress bar variant
         */
        "variant"?: string;
    }
    interface ScaleSidebarNav {
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSidebarNavCollapsible {
        "label"?: string;
        "level"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSidebarNavItem {
        "border"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleSlider {
        /**
          * (optional) Slider class
         */
        "customClass"?: string;
        /**
          * (optional) Slider display value
         */
        "label"?: boolean;
        /**
          * (optional) Slider range max value
         */
        "max"?: number;
        /**
          * (optional) Slider range start value
         */
        "min"?: number;
        /**
          * (optional) Slider step
         */
        "step"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Slider binding value
         */
        "value"?: number;
    }
    interface ScaleSwitch {
        /**
          * (optional) Active switch
         */
        "active"?: boolean;
        /**
          * (optional) Switch class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled switch
         */
        "disabled"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleTag {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Tag disabled
         */
        "disabled"?: boolean;
        /**
          * (optional) Tag dismissable
         */
        "dismissable"?: boolean;
        /**
          * (optional) Tag href
         */
        "href"?: string;
        "onClose"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) Tag size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Tag target
         */
        "target"?: string;
        /**
          * (optional) Tag variant
         */
        "variant"?: string;
    }
    interface ScaleText {
        /**
          * (optional) Text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Text tag
         */
        "tag"?: string;
        /**
          * (optional) Text variant
         */
        "variant"?: string;
    }
    interface ScaleToast {
        /**
          * (optional) Animated toast
         */
        "animated"?: boolean;
        /**
          * (optional) Toast autohide time
         */
        "autoHide"?: boolean | number;
        /**
          * (optional) Toast class
         */
        "customClass"?: string;
        /**
          * (optional) Toast fade duration
         */
        "fadeDuration"?: number;
        /**
          * (optional) Toast opened
         */
        "opened"?: boolean;
        /**
          * (optional) Toast position right
         */
        "positionRight"?: number;
        /**
          * (optional) Toast position at the top
         */
        "positionTop"?: number;
        /**
          * (optional) Toast size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Toast time
         */
        "time"?: number;
        /**
          * (optional) Toast variant
         */
        "variant"?: string;
    }
    interface IntrinsicElements {
        "scale-alert": ScaleAlert;
        "scale-breadcrumb": ScaleBreadcrumb;
        "scale-button": ScaleButton;
        "scale-card": ScaleCard;
        "scale-carousel": ScaleCarousel;
        "scale-divider": ScaleDivider;
        "scale-icon": ScaleIcon;
        "scale-input": ScaleInput;
        "scale-link": ScaleLink;
        "scale-modal": ScaleModal;
        "scale-progress-bar": ScaleProgressBar;
        "scale-sidebar-nav": ScaleSidebarNav;
        "scale-sidebar-nav-collapsible": ScaleSidebarNavCollapsible;
        "scale-sidebar-nav-item": ScaleSidebarNavItem;
        "scale-slider": ScaleSlider;
        "scale-switch": ScaleSwitch;
        "scale-tag": ScaleTag;
        "scale-text": ScaleText;
        "scale-toast": ScaleToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scale-alert": LocalJSX.ScaleAlert & JSXBase.HTMLAttributes<HTMLScaleAlertElement>;
            "scale-breadcrumb": LocalJSX.ScaleBreadcrumb & JSXBase.HTMLAttributes<HTMLScaleBreadcrumbElement>;
            "scale-button": LocalJSX.ScaleButton & JSXBase.HTMLAttributes<HTMLScaleButtonElement>;
            "scale-card": LocalJSX.ScaleCard & JSXBase.HTMLAttributes<HTMLScaleCardElement>;
            "scale-carousel": LocalJSX.ScaleCarousel & JSXBase.HTMLAttributes<HTMLScaleCarouselElement>;
            "scale-divider": LocalJSX.ScaleDivider & JSXBase.HTMLAttributes<HTMLScaleDividerElement>;
            "scale-icon": LocalJSX.ScaleIcon & JSXBase.HTMLAttributes<HTMLScaleIconElement>;
            "scale-input": LocalJSX.ScaleInput & JSXBase.HTMLAttributes<HTMLScaleInputElement>;
            "scale-link": LocalJSX.ScaleLink & JSXBase.HTMLAttributes<HTMLScaleLinkElement>;
            "scale-modal": LocalJSX.ScaleModal & JSXBase.HTMLAttributes<HTMLScaleModalElement>;
            "scale-progress-bar": LocalJSX.ScaleProgressBar & JSXBase.HTMLAttributes<HTMLScaleProgressBarElement>;
            "scale-sidebar-nav": LocalJSX.ScaleSidebarNav & JSXBase.HTMLAttributes<HTMLScaleSidebarNavElement>;
            "scale-sidebar-nav-collapsible": LocalJSX.ScaleSidebarNavCollapsible & JSXBase.HTMLAttributes<HTMLScaleSidebarNavCollapsibleElement>;
            "scale-sidebar-nav-item": LocalJSX.ScaleSidebarNavItem & JSXBase.HTMLAttributes<HTMLScaleSidebarNavItemElement>;
            "scale-slider": LocalJSX.ScaleSlider & JSXBase.HTMLAttributes<HTMLScaleSliderElement>;
            "scale-switch": LocalJSX.ScaleSwitch & JSXBase.HTMLAttributes<HTMLScaleSwitchElement>;
            "scale-tag": LocalJSX.ScaleTag & JSXBase.HTMLAttributes<HTMLScaleTagElement>;
            "scale-text": LocalJSX.ScaleText & JSXBase.HTMLAttributes<HTMLScaleTextElement>;
            "scale-toast": LocalJSX.ScaleToast & JSXBase.HTMLAttributes<HTMLScaleToastElement>;
        }
    }
}
