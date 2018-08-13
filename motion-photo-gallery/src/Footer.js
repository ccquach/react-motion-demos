import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  text-align: center;
`;

const Link = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.2rem;
    color: inherit;
    padding-bottom: 1px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s ease-out;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid currentColor;
  }
`;

const Footer = () => (
  <Container>
    <Link href="https://unsplash.com/">Unsplash</Link>
  </Container>
);

export default Footer;
