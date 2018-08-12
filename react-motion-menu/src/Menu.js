import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';
import Icon from './Icon';
import icons from './icons';

const Container = styled.nav`
  max-width: 114rem;
  margin: 0 auto;
  width: 30rem;
  height: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  position: absolute;
`;

const Toggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class App extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  getDefaultStyles = () => {
    return icons.map(({ type, style: { x, y } }) => ({
      type,
      top: +y,
      left: +x,
      scale: 0
    }));
  };

  getStyles = prevStyles => {
    const val = this.state.open ? 1 : 0;
    const config = {
      open: { stiffness: 300, damping: 18 },
      close: { stiffness: 300, damping: 30 }
    };

    return prevStyles.map((styles, i) => {
      // counter-clockwise animation on close
      if (val === 0) {
        return i === 6
          ? { ...styles, scale: spring(val, config.close) }
          : {
              ...styles,
              scale: spring(prevStyles[i + 1].scale, config.close)
            };
      }
      // clockwise animation on open
      return i === 0
        ? { ...styles, scale: spring(val, config.open) }
        : {
            ...styles,
            scale: spring(prevStyles[i - 1].scale, config.open)
          };
    });
  };

  render() {
    return (
      <Container>
        <StaggeredMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles}
        >
          {interpolated => (
            <List>
              {interpolated.map(({ type, top, left, scale }, i) => (
                <Item
                  key={i}
                  style={{
                    top: `${top}rem`,
                    left: `${left}rem`,
                    transform: `translate(-50%, -50%) scale(${scale})`
                  }}
                >
                  <Icon type={type} />
                </Item>
              ))}
            </List>
          )}
        </StaggeredMotion>
        <Toggle onClick={this.handleToggle}>
          <Icon type={0} />
        </Toggle>
      </Container>
    );
  }
}

export default App;
