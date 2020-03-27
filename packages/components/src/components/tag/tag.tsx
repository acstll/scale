import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import { styles } from './tag.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-tag',
  shadow: true,
})
export class Tag implements Base {
  /** (optional) Tag class */
  @Prop() customClass?: string = '';
  /** (optional) Tag variant */
  @Prop() variant?: string = '';
  /** (optional) Tag pill */
  @Prop() pill?: boolean = false;
  /** (optional) Tag on an <a> element */
  @Prop() href?: string = '';

  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;
  /** decorator Jss stylesheet */
  @CssInJs('Tag', styles) stylesheet: StyleSheet;

  componentWillLoad() {}
  componentWillUpdate() {}

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        {!!this.href ? (
          <a href={this.href} class={this.getCssClassMap()}>
            <slot />
          </a>
        ) : (
          <div class={this.getCssClassMap()}>
            <slot />
          </div>
        )}
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.tag,
      this.customClass && this.customClass,
      this.variant && classes[`tag--variant-${this.variant}`],
      this.pill && classes[`tag--pill`],
      !!this.href && classes[`tag--link`]
    );
  }
}
