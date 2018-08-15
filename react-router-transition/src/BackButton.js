import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Motion, spring } from 'react-motion';

const CONFIG = { stiffness: 100, damping: 40 };

const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: currentColor;
  font-size: 1.6rem;

  &:hover > span {
    margin-right: 2rem;
  }
`;

const Arrow = styled.span`
  font-size: 2rem;
  margin-right: 1.5rem;
  transition: all 0.2s ease-out;
`;

// animation logic

const getDefaultStyles = () => ({
  opacity: 0,
  x: 100
});

const getStyles = () => ({
  opacity: spring(1, CONFIG),
  x: spring(0, CONFIG)
});

const BackButton = ({ children, location }) => (
  <Motion defaultStyle={getDefaultStyles()} style={getStyles()}>
    {style => (
      <Button
        to={location}
        style={{
          opacity: style.opacity,
          transform: `translateX(${style.x}px)`
        }}
      >
        <Arrow>&#8592;</Arrow>
        {children}
      </Button>
    )}
  </Motion>
);

BackButton.propTypes = {
  children: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default BackButton;
