import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
`;

const Item = styled.div`
  flex: 0 0 30%;
  margin: 1.66%;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Name = styled.h4`
  text-align: center;
  text-transform: capitalize;
  font-weight: 300;
`;

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
