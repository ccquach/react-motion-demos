import React from 'react';
import styled from 'styled-components';
import FadeInUp from './FadeInUp';
import Header from './Header';

const Text = styled.p`
  font-size: 1.6rem;
  width: 70%;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Home = () => (
  <FadeInUp>
    <div>
      <Header>Home</Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        dolorem aut asperiores sunt fugiat quod sapiente ipsum dignissimos vel
        blanditiis eligendi, illum doloremque accusamus beatae quae eaque
        voluptatibus nobis debitis.
      </Text>
    </div>
  </FadeInUp>
);

export default Home;
