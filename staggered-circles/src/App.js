import React, { Component } from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring, presets } from 'react-motion';

const DIAMETER = 50;

// Staggered snake styles

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #ecf0f1;
`;

const Circle = styled.div`
  height: ${DIAMETER}px;
  width: ${DIAMETER}px;
  background-color: #2ecc71;
  box-shadow: 1px 3px 0 #27ae60;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Face = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #2c3e50;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    content: '';
    width: 3px;
    height: 3px;
    background-color: #2c3e50;
    border-radius: 50%;
    position: absolute;
    top: -9px;
  }

  &::before {
    left: -6px;
  }

  &::after {
    right: -6px;
  }
`;

// Range slider styles

const Slider = styled.div`
  z-index: 9999;
  min-width: 100px;
  width: 25%;
  position: absolute;
  top: 30px;
  right: 30px;
`;

const Range = styled.input`
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #95a5a6;
  box-shadow: 0 2px 0 #7f8c8d;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #34495e;
    box-shadow: 0 1px 0 #2c3e50;
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #34495e;
    box-shadow: 0 1px 0 #2c3e50;
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }
`;

const Label = styled.span`
  position: absolute;
  top: 2px;
  left: -20px;
`;

class App extends Component {
  state = {
    x: 250,
    y: 250,
    circles: 8
  };

  getDefaultStyles = () => {
    return Array(+this.state.circles + 1).fill({ x: 0, y: 0 });
  };

  handleMove = e => {
    if (e.touches) {
      this.setState({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      return;
    }
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  handleChange = e => {
    this.setState({ circles: e.target.value });
  };

  render() {
    const { x, y, circles } = this.state;
    return (
      <Container onMouseMove={this.handleMove} onTouchMove={this.handleMove}>
        <Slider>
          <Range
            type="range"
            onChange={this.handleChange}
            value={circles}
            min="1"
            max="8"
            step="1"
          />
          <Label>{circles}</Label>
        </Slider>
        <StaggeredMotion
          defaultStyles={this.getDefaultStyles()}
          styles={previousInterpolatedStyles =>
            previousInterpolatedStyles.map((_, i) => {
              return i === 0
                ? { x: spring(x, presets.gentle), y: spring(y, presets.gentle) }
                : {
                    x: spring(
                      previousInterpolatedStyles[i - 1].x,
                      presets.gentle
                    ),
                    y: spring(
                      previousInterpolatedStyles[i - 1].y,
                      presets.gentle
                    )
                  };
            })
          }
        >
          {interpolated => (
            <div>
              {interpolated.map((style, i) => (
                <Circle
                  key={i}
                  style={{
                    left: style.x,
                    top: style.y,
                    zIndex: circles - i
                  }}
                >
                  {i === 0 ? <Face /> : null}
                </Circle>
              ))}
            </div>
          )}
        </StaggeredMotion>
      </Container>
    );
  }
}

export default App;
