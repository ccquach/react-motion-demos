import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

const CONFIG = { stiffness: 100, damping: 40 };

const getDefaultStyles = () => ({
  opacity: 0,
  y: 100
});

const getStyles = () => ({
  opacity: spring(1, CONFIG),
  y: spring(0, CONFIG)
});

const FadeInUp = ({ children }) => (
  <Motion defaultStyle={getDefaultStyles()} style={getStyles()}>
    {style => (
      <div
        style={{
          opacity: style.opacity,
          transform: `translateY(${style.y}px)`
        }}
      >
        {children}
      </div>
    )}
  </Motion>
);

FadeInUp.propTypes = {
  children: PropTypes.element.isRequired
};

export default FadeInUp;
