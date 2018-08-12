import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  text-transform: uppercase;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 4rem 0 1rem;
`;

const Subtitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  font-style: italic;
`;

const Header = () => {
  return (
    <Heading>
      <Title>Staggered Motion Menu</Title>
      <Subtitle>Toggle the menu</Subtitle>
    </Heading>
  );
};

export default Header;
