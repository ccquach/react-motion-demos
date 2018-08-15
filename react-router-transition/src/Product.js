import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import FadeInUp from './Animations/FadeInUp';
import BackButton from './BackButton';

const Description = styled.p`
  margin-top: 3rem;
  width: 80%
  font-size: 1.4rem;
`;

const Product = ({ location }) => {
  const product = location.state.product;
  return (
    <section>
      <BackButton location="/products">Products</BackButton>
      <div>
        <Header align="left">{product.name}</Header>
        <FadeInUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            expedita voluptas necessitatibus tenetur, cupiditate voluptates
            sequi rerum molestiae eius blanditiis quo reprehenderit dolorum!
            Provident nisi alias earum animi repudiandae! Earum! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Exercitationem natus
            velit magnam eveniet distinctio. Eveniet odio quasi, culpa
            repellendus illo eos amet, architecto ipsam velit rem doloribus
            veniam cumque impedit.
          </Description>
        </FadeInUp>
      </div>
    </section>
  );
};

Product.propTypes = {
  location: PropTypes.object.isRequired
};

export default Product;
