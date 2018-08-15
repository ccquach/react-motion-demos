import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import FadeInUp from './FadeInUp';
import BackButton from './BackButton';
import products from './seed';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Product = styled.div`
  flex: 0 0 20%;
  margin: 2.5%;
  margin-left: 0;
  padding: 4rem;
  color: #ecf0f1;
  font-size: 1.4rem;
  border: 1px solid currentColor;
  background-color: transparent;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.03) translateY(-0.5rem);
  }
`;

class Products extends Component {
  handleClick = product => {
    this.props.history.push({
      pathname: `/products/${product._id}`,
      state: { product }
    });
  };

  render() {
    return (
      <div>
        <BackButton location="/">Home</BackButton>
        <FadeInUp>
          <section>
            <Header align="left">Products</Header>
            <Wrapper>
              {products.map(product => (
                <Product
                  key={product._id}
                  onClick={this.handleClick.bind(this, product)}
                >
                  {product.name}
                </Product>
              ))}
            </Wrapper>
          </section>
        </FadeInUp>
      </div>
    );
  }
}

Products.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Products);
