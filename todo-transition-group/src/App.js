import React, { Component } from 'react';
import styled from 'styled-components';

import TodoBox from './TodoBox';

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 4rem;
`;

const Header = styled.header`
  font-size: 8rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1;
  margin-bottom: 2rem;
  opacity: 0.2;
  text-align: center;
  color: #e74c3c;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>todos</Header>
        <TodoBox />
      </Container>
    );
  }
}

export default App;
