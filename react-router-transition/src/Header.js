import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  text-align: ${props => (props.align ? 'left' : 'center')};
  margin: 5rem 0 2rem;
`;

const Heading = styled.h1`
  color: #b53471;
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1;
`;

const Header = ({ children, align }) => (
  <Wrapper align={align ? align : null}>
    <Heading>{children}</Heading>
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.string.isRequired,
  align: PropTypes.string
};

export default Header;
