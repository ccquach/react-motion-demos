import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Container = styled.div`
  padding: 50px;
`;

const Button = styled.a`
  cursor: pointer;
  border-radius: 5px;
  padding: 12px 35px;
  font-size: 20px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;

  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #c0392b;

  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

const Wrapper = styled.div`
  margin-top: 50px;
  min-width: 150px;
  max-width: 500px;
  width: 60%;
  height: 50px;
  border-radius: 5px;
  background-color: #ecf0f1;
  position: relative;
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background-color: #e74c3c;
  position: absolute;
  top: 0;
  left: 0;
`;

class App extends Component {
  state = {
    start: 100,
    end: 0
  };

  handleToggle = () => {
    const { start, end } = this.state;
    const [newStart, newEnd] = [end, start];
    this.setState({ start: newStart, end: newEnd });
  };

  render() {
    const { start, end } = this.state;
    return (
      <Container>
        <Button onClick={this.handleToggle}>Toggle</Button>
        <Wrapper>
          <Motion defaultStyle={{ x: start }} style={{ x: spring(end) }}>
            {interpolated => {
              // debug
              console.log(`left: ${interpolated.x}%`);
              console.log(`translateX: -${interpolated.x}%`);

              return (
                <Box
                  style={{
                    left: `${interpolated.x}%`,
                    transform: `translateX(-${interpolated.x}%)`
                  }}
                />
              );
            }}
          </Motion>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
