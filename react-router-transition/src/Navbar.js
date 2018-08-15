import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  padding: 3rem 8rem;
  background-color: #1b1464;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  float: right;
`;

const ListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const NavLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: #ecf0f1;
    font-size: 1.4rem;
    padding-bottom: 1px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s ease-out;
  }

  &:hover,
  &:active {
    border-bottom: 1px solid #ecf0f1;
  }
`;

const Navbar = () => (
  <Nav>
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/products">Products</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/404">Non-existent URL</NavLink>
      </ListItem>
    </List>
  </Nav>
);

export default Navbar;
