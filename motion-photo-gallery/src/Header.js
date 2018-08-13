import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  text-align: center;
  padding: 3rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

const Header = () => (
  <Heading>
    <Title>Motion Photo Gallery</Title>
  </Heading>
);

export default Header;
