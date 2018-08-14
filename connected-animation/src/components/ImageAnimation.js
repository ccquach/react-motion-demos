import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Image = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

class ImageAnimation extends Component {
  getDefaultStyles = starting => ({
    x: starting.x,
    y: starting.y,
    width: starting.width,
    height: starting.height
  });

  getStyles = ending => ({
    x: spring(ending.x),
    y: spring(ending.y),
    width: spring(ending.width),
    height: spring(ending.height)
  });

  render() {
    const { image, starting, ending } = this.props;
    return (
      <Motion
        defaultStyle={this.getDefaultStyles(starting)}
        style={this.getStyles(ending)}
      >
        {style => (
          <Image
            x={style.x}
            y={style.y}
            width={style.width}
            height={style.height}
            image={image}
          />
        )}
      </Motion>
    );
  }
}

ImageAnimation.propTypes = {
  image: PropTypes.string.isRequired,
  starting: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  ending: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default ImageAnimation;
