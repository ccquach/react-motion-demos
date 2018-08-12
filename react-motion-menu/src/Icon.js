import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const req = require.context('./assets', false, /.*\.svg$/);
req.keys().forEach(req);

const Vector = styled.svg`
  width: 4rem;
  height: 4rem;
  fill: #0c2461;
  border: 1px solid #0c2461;
  border-radius: 5px;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.07);
    fill: #b71540;
    border: 1px solid #b71540;
  }
`;

const Link = styled.a`
  cursor: pointer;
`;

const Icon = ({ type }) => {
  const map = {
    0: 'navigate',
    1: 'celebrate',
    2: 'dig',
    3: 'hammer',
    4: 'home',
    5: 'hurt',
    6: 'launch',
    7: 'saw'
  };

  return (
    <Link>
      <Vector>
        <use xlinkHref={`#${map[type]}`} />
      </Vector>
    </Link>
  );
};

Icon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.object
};

export default Icon;
