import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

const App = () => (
  <Container>
    <Header />
    <Slideshow />
    <Footer />
  </Container>
);

export default App;
