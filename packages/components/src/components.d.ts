/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Validator,
  ValidatorEntry,
} from './validators';

export namespace Components {
  interface TAlert {
    /**
    * (required) Alert close
    */
    'close'?: string;
    /**
    * (required) Alert class
    */
    'customClass'?: string;
    /**
    * (optional) Alert title
    */
    'headline': string;
    /**
    * (optional) Alert icon
    */
    'icon'?: string;
    'open': () => Promise<void>;
    /**
    * (required) Alert opened
    */
    'opened': boolean;
    /**
    * (optional) Alert size
    */
    'size'?: string;
    /**
    * (optional) Alert theme
    */
    'theme'?: string;
    /**
    * (optional) Alert timeout
    */
    'timeout'?: boolean | number;
    /**
    * (optional) Alert variant
    */
    'variant'?: string;
  }
  interface TBadge {
    'link'?: string;
    'pill'?: boolean;
    'size'?: string;
    'variant'?: string;
  }
  interface TButton {
    /**
    * (optional) Deselected button
    */
    'deselected'?: boolean;
    'disable': () => Promise<void>;
    /**
    * (optional) Disabled button
    */
    'disabled'?: boolean;
    'enable': () => Promise<void>;
    /**
    * (optional) Button size
    */
    'size'?: string;
    /**
    * (optional) Button theme
    */
    'theme'?: string;
    /**
    * (optional) Button variant
    */
    'variant'?: string;
  }
  interface TCard {
    'deselected'?: boolean;
    'disabled'?: boolean;
    'imageTop'?: string;
    'imageTopAlt'?: string;
    'size'?: string;
    'theme'?: string;
    'variant'?: string;
  }
  interface TInputText {
    'theme': string;
    'validator': Array<string | ValidatorEntry | Validator<string>>;
    'value': string;
  }
  interface TLink {
    /**
    * (optional) link disabled
    */
    'disabled'?: boolean;
    /**
    * (optional) link href
    */
    'href'?: string;
    /**
    * (optional) link open a new tag
    */
    'openNewTab'?: boolean;
    /**
    * (optional) link variant
    */
    'underline'?: boolean;
    /**
    * (optional) link variant
    */
    'variant'?: string;
  }
  interface TModal {
    /**
    * (optional) Modal close
    */
    'close'?: string;
    'onCloseModal': () => Promise<void>;
    'openModal': () => Promise<void>;
    /**
    * (optional) Modal opened
    */
    'opened'?: boolean;
    /**
    * (optional) Modal size
    */
    'size'?: string;
    /**
    * (optional) Modal theme
    */
    'theme'?: string;
    /**
    * (optional) Modal variant
    */
    'variant'?: string;
  }
  interface TProgressBar {
    /**
    * (required) progress percentage
    */
    'percentage': number;
    /**
    * (optional) show progress percentage text
    */
    'showText'?: boolean;
    /**
    * (optional) progress stroke width
    */
    'strokeWidth'?: number;
    /**
    * (optional) progress text display inside bar
    */
    'textInside'?: boolean;
    /**
    * (optional) show progress variant
    */
    'variant'?: string;
  }
  interface TRating {
    'disabled'?: boolean;
    'range': number[];
    'type'?: string;
  }
  interface TSwitch {
    /**
    * Switch props active optional
    */
    'active'?: boolean;
    /**
    * Switch props disabled optional
    */
    'disabled'?: boolean;
  }
  interface TTag {
    /**
    * (optional) Tag on an <a> element
    */
    'link'?: string;
    /**
    * (optional) Tag pill
    */
    'pill'?: boolean;
    /**
    * (optional) Tag variant
    */
    'variant'?: string;
  }
  interface TToast {
    'animated'?: boolean;
    'autoHide'?: boolean | number;
    /**
    * (required) Alert class
    */
    'customClass'?: string;
    'fadeDuration'?: number;
    'openToast': () => Promise<void>;
    'opened'?: boolean;
    'positionRight'?: number;
    'positionTop'?: number;
    'size'?: string;
    'theme'?: string;
    /**
    * (optional) Toast time
    */
    'time'?: number;
    'variant'?: string;
  }
}

declare global {


  interface HTMLTAlertElement extends Components.TAlert, HTMLStencilElement {}
  var HTMLTAlertElement: {
    prototype: HTMLTAlertElement;
    new (): HTMLTAlertElement;
  };

  interface HTMLTBadgeElement extends Components.TBadge, HTMLStencilElement {}
  var HTMLTBadgeElement: {
    prototype: HTMLTBadgeElement;
    new (): HTMLTBadgeElement;
  };

  interface HTMLTButtonElement extends Components.TButton, HTMLStencilElement {}
  var HTMLTButtonElement: {
    prototype: HTMLTButtonElement;
    new (): HTMLTButtonElement;
  };

  interface HTMLTCardElement extends Components.TCard, HTMLStencilElement {}
  var HTMLTCardElement: {
    prototype: HTMLTCardElement;
    new (): HTMLTCardElement;
  };

  interface HTMLTInputTextElement extends Components.TInputText, HTMLStencilElement {}
  var HTMLTInputTextElement: {
    prototype: HTMLTInputTextElement;
    new (): HTMLTInputTextElement;
  };

  interface HTMLTLinkElement extends Components.TLink, HTMLStencilElement {}
  var HTMLTLinkElement: {
    prototype: HTMLTLinkElement;
    new (): HTMLTLinkElement;
  };

  interface HTMLTModalElement extends Components.TModal, HTMLStencilElement {}
  var HTMLTModalElement: {
    prototype: HTMLTModalElement;
    new (): HTMLTModalElement;
  };

  interface HTMLTProgressBarElement extends Components.TProgressBar, HTMLStencilElement {}
  var HTMLTProgressBarElement: {
    prototype: HTMLTProgressBarElement;
    new (): HTMLTProgressBarElement;
  };

  interface HTMLTRatingElement extends Components.TRating, HTMLStencilElement {}
  var HTMLTRatingElement: {
    prototype: HTMLTRatingElement;
    new (): HTMLTRatingElement;
  };

  interface HTMLTSwitchElement extends Components.TSwitch, HTMLStencilElement {}
  var HTMLTSwitchElement: {
    prototype: HTMLTSwitchElement;
    new (): HTMLTSwitchElement;
  };

  interface HTMLTTagElement extends Components.TTag, HTMLStencilElement {}
  var HTMLTTagElement: {
    prototype: HTMLTTagElement;
    new (): HTMLTTagElement;
  };

  interface HTMLTToastElement extends Components.TToast, HTMLStencilElement {}
  var HTMLTToastElement: {
    prototype: HTMLTToastElement;
    new (): HTMLTToastElement;
  };
  interface HTMLElementTagNameMap {
    't-alert': HTMLTAlertElement;
    't-badge': HTMLTBadgeElement;
    't-button': HTMLTButtonElement;
    't-card': HTMLTCardElement;
    't-input-text': HTMLTInputTextElement;
    't-link': HTMLTLinkElement;
    't-modal': HTMLTModalElement;
    't-progress-bar': HTMLTProgressBarElement;
    't-rating': HTMLTRatingElement;
    't-switch': HTMLTSwitchElement;
    't-tag': HTMLTTagElement;
    't-toast': HTMLTToastElement;
  }
}

declare namespace LocalJSX {
  interface TAlert {
    /**
    * (required) Alert close
    */
    'close'?: string;
    /**
    * (required) Alert class
    */
    'customClass'?: string;
    /**
    * (optional) Alert title
    */
    'headline'?: string;
    /**
    * (optional) Alert icon
    */
    'icon'?: string;
    /**
    * (required) Alert opened
    */
    'opened'?: boolean;
    /**
    * (optional) Alert size
    */
    'size'?: string;
    /**
    * (optional) Alert theme
    */
    'theme'?: string;
    /**
    * (optional) Alert timeout
    */
    'timeout'?: boolean | number;
    /**
    * (optional) Alert variant
    */
    'variant'?: string;
  }
  interface TBadge {
    'link'?: string;
    'pill'?: boolean;
    'size'?: string;
    'variant'?: string;
  }
  interface TButton {
    /**
    * (optional) Deselected button
    */
    'deselected'?: boolean;
    /**
    * (optional) Disabled button
    */
    'disabled'?: boolean;
    /**
    * (optional) Button size
    */
    'size'?: string;
    /**
    * (optional) Button theme
    */
    'theme'?: string;
    /**
    * (optional) Button variant
    */
    'variant'?: string;
  }
  interface TCard {
    'deselected'?: boolean;
    'disabled'?: boolean;
    'imageTop'?: string;
    'imageTopAlt'?: string;
    'size'?: string;
    'theme'?: string;
    'variant'?: string;
  }
  interface TInputText {
    'onChanged'?: (event: CustomEvent<string>) => void;
    'theme'?: string;
    'validator'?: Array<string | ValidatorEntry | Validator<string>>;
    'value'?: string;
  }
  interface TLink {
    /**
    * (optional) link disabled
    */
    'disabled'?: boolean;
    /**
    * (optional) link href
    */
    'href'?: string;
    /**
    * (optional) link open a new tag
    */
    'openNewTab'?: boolean;
    /**
    * (optional) link variant
    */
    'underline'?: boolean;
    /**
    * (optional) link variant
    */
    'variant'?: string;
  }
  interface TModal {
    /**
    * (optional) Modal close
    */
    'close'?: string;
    /**
    * (optional) Modal opened
    */
    'opened'?: boolean;
    /**
    * (optional) Modal size
    */
    'size'?: string;
    /**
    * (optional) Modal theme
    */
    'theme'?: string;
    /**
    * (optional) Modal variant
    */
    'variant'?: string;
  }
  interface TProgressBar {
    /**
    * (required) progress percentage
    */
    'percentage'?: number;
    /**
    * (optional) show progress percentage text
    */
    'showText'?: boolean;
    /**
    * (optional) progress stroke width
    */
    'strokeWidth'?: number;
    /**
    * (optional) progress text display inside bar
    */
    'textInside'?: boolean;
    /**
    * (optional) show progress variant
    */
    'variant'?: string;
  }
  interface TRating {
    'disabled'?: boolean;
    'range'?: number[];
    'type'?: string;
  }
  interface TSwitch {
    /**
    * Switch props active optional
    */
    'active'?: boolean;
    /**
    * Switch props disabled optional
    */
    'disabled'?: boolean;
  }
  interface TTag {
    /**
    * (optional) Tag on an <a> element
    */
    'link'?: string;
    /**
    * (optional) Tag pill
    */
    'pill'?: boolean;
    /**
    * (optional) Tag variant
    */
    'variant'?: string;
  }
  interface TToast {
    'animated'?: boolean;
    'autoHide'?: boolean | number;
    /**
    * (required) Alert class
    */
    'customClass'?: string;
    'fadeDuration'?: number;
    'opened'?: boolean;
    'positionRight'?: number;
    'positionTop'?: number;
    'size'?: string;
    'theme'?: string;
    /**
    * (optional) Toast time
    */
    'time'?: number;
    'variant'?: string;
  }

  interface IntrinsicElements {
    't-alert': TAlert;
    't-badge': TBadge;
    't-button': TButton;
    't-card': TCard;
    't-input-text': TInputText;
    't-link': TLink;
    't-modal': TModal;
    't-progress-bar': TProgressBar;
    't-rating': TRating;
    't-switch': TSwitch;
    't-tag': TTag;
    't-toast': TToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      't-alert': LocalJSX.TAlert & JSXBase.HTMLAttributes<HTMLTAlertElement>;
      't-badge': LocalJSX.TBadge & JSXBase.HTMLAttributes<HTMLTBadgeElement>;
      't-button': LocalJSX.TButton & JSXBase.HTMLAttributes<HTMLTButtonElement>;
      't-card': LocalJSX.TCard & JSXBase.HTMLAttributes<HTMLTCardElement>;
      't-input-text': LocalJSX.TInputText & JSXBase.HTMLAttributes<HTMLTInputTextElement>;
      't-link': LocalJSX.TLink & JSXBase.HTMLAttributes<HTMLTLinkElement>;
      't-modal': LocalJSX.TModal & JSXBase.HTMLAttributes<HTMLTModalElement>;
      't-progress-bar': LocalJSX.TProgressBar & JSXBase.HTMLAttributes<HTMLTProgressBarElement>;
      't-rating': LocalJSX.TRating & JSXBase.HTMLAttributes<HTMLTRatingElement>;
      't-switch': LocalJSX.TSwitch & JSXBase.HTMLAttributes<HTMLTSwitchElement>;
      't-tag': LocalJSX.TTag & JSXBase.HTMLAttributes<HTMLTTagElement>;
      't-toast': LocalJSX.TToast & JSXBase.HTMLAttributes<HTMLTToastElement>;
    }
  }
}


