/* eslint react/forbid-prop-types: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    caretMargin: PropTypes.string,
    children: PropTypes.node.isRequired,
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    show: PropTypes.bool.isRequired,
    side: PropTypes.string.isRequired,
    style: PropTypes.object,
    transition: PropTypes.string,
  }

  assembleClassName = () => {
    const { show, side, transition } = this.props;
    const visibility = show ? css.visible : css.hidden;
    const arrayOfClasses = [
              css.tooltip,
              css[side],
              visibility,
              css[`transition-${transition}`],
            ];
    return arrayOfClasses.join(' ');
  }

  render() {
    const { caretMargin, children, message, style } = this.props;
    const border = style.border ? style.border : style.backgroundColor;

    return (
      <div className={css.wrapper}>
        {children}
        <span
          className={this.assembleClassName()}
          style={{ ...style, border, '--caret-margin': caretMargin }}
        >{message}
        </span>
      </div>
    );
  }
}


Tooltip.defaultProps = {
  caretMargin: '0px 0px 0px 0px',
  style: {
    backgroundColor: 'rgb(56, 56, 56)',
    color: 'rgb(242, 241, 239)',
  },
  transition: 'quick',
};

