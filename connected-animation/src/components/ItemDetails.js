import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageAnimation from './ImageAnimation';

const Wrapper = styled.div``;

const HeroSpace = styled.div`
  width: 100%;
  height: 400px;
`;

const Paper = styled.div`
  padding: 24px;
`;

const Name = styled.h4``;

const Description = styled.p``;

const getWindowWidth = () => {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return w.innerWidth || e.clientWidth || g.clientWidth;
};

const ItemDetails = ({ item, starting }) => {
  return (
    <Wrapper>
      <HeroSpace />
      <ImageAnimation
        image={require(`../img/${item.picture}`)}
        starting={{
          width: starting.width,
          height: starting.height,
          x: starting.x,
          y: starting.y
        }}
        ending={{ width: getWindowWidth(), height: 400, x: 0, y: 0 }}
      />
      <Paper>
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
      </Paper>
    </Wrapper>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  starting: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default ItemDetails;
