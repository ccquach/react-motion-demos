import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Title = styled.h4`
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 300;
  margin-top: 10px;
`;

// animation logic

const getDefaultStyles = () => ({
  opacity: 0,
  x: -100
});

const getStyles = () => ({
  opacity: spring(1),
  x: spring(0)
});

const TitleAnimation = ({ title }) => (
  <Motion defaultStyle={getDefaultStyles()} style={getStyles()}>
    {style => (
      <Title
        style={{
          opacity: style.opacity,
          transform: `translateX(${style.x}px)`
        }}
      >
        {title}
      </Title>
    )}
  </Motion>
);

TitleAnimation.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleAnimation;
