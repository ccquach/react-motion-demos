import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

const CONFIG = { stiffness: 100, damping: 40 };

const getDefaultStyles = () => ({
  opacity: 0,
  x: -100
});

const getStyles = () => ({
  opacity: spring(1, CONFIG),
  x: spring(0, CONFIG)
});

const FadeInLeft = ({ children }) => (
  <Motion defaultStyle={getDefaultStyles()} style={getStyles()}>
    {style => (
      <div
        style={{
          opacity: style.opacity,
          transform: `translateX(${style.x}px)`
        }}
      >
        {children}
      </div>
    )}
  </Motion>
);

FadeInLeft.propTypes = {
  children: PropTypes.element.isRequired
};

export default FadeInLeft;
