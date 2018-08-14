import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Description = styled.p`
  font-size: 14px;
  line-height: 1.7;
`;

// animation logic

const getDefaultStyles = () => ({
  opacity: 0,
  y: 100
});

const getStyles = () => ({
  opacity: spring(1),
  y: spring(0)
});

const DescriptionAnimation = ({ description }) => (
  <Motion defaultStyle={getDefaultStyles()} style={getStyles()}>
    {style => (
      <Description
        style={{
          opacity: style.opacity,
          transform: `translateY(${style.y}px)`
        }}
      >
        {description}
      </Description>
    )}
  </Motion>
);

DescriptionAnimation.propTypes = {
  description: PropTypes.string.isRequired
};

export default DescriptionAnimation;
