import React from 'react';
import styled from 'styled-components';
import FadeInUp from './Animations/FadeInUp';
import Header from './Header';

const Text = styled.p`
  font-size: 1.4rem;
  width: 70%;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Home = () => (
  <div>
    <Header>Home</Header>
    <FadeInUp>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        dolorem aut asperiores sunt fugiat quod sapiente ipsum dignissimos vel
        blanditiis eligendi, illum doloremque accusamus beatae quae eaque
        voluptatibus nobis debitis.
      </Text>
    </FadeInUp>
  </div>
);

export default Home;
