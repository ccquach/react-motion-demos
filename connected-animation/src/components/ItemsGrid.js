import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 30%;
  padding: 24px;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Name = styled.h4``;

const ItemGrid = ({ items, onItemClick }) => (
  <Wrapper>
    {items.map((item, idx) => (
      <Item key={idx}>
        <Image
          image={require(`../img/${item.picture}`)}
          onClick={e => onItemClick(item, e)}
        />
        <Name>{item.name}</Name>
      </Item>
    ))}
  </Wrapper>
);

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ItemGrid;
