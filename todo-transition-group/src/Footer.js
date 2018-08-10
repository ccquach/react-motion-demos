import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #fff;
  border-top: 1px solid #ecf0f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  z-index: 100;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem 2rem;
`;

const Footer = ({ count }) => {
  return <Container>{count} items left</Container>;
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
