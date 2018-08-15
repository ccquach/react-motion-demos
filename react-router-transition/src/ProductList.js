import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';

import Header from './Header';
import BackButton from './BackButton';
import products from './seed';

const CONFIG = { stiffness: 200, damping: 18 };

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

  // animation logic

  getDefaultStyles = () => {
    return products.map(() => ({
      opacity: 0,
      y: 100
    }));
  };

  getStyles = prevStyles => {
    return prevStyles.map((_, i) => {
      return i === 0
        ? { opacity: spring(1, CONFIG), y: spring(0, CONFIG) }
        : {
            opacity: spring(prevStyles[i - 1].opacity, CONFIG),
            y: spring(prevStyles[i - 1].y, CONFIG)
          };
    });
  };

  render() {
    return (
      <div>
        <BackButton location="/">Home</BackButton>
        <section>
          <Header align="left">Products</Header>

          <StaggeredMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
          >
            {interpolated => (
              <Wrapper>
                {interpolated.map((styles, i) => (
                  <Product
                    key={products[i]._id}
                    style={{
                      opacity: styles.opacity,
                      transform: `translateY(${styles.y}px)`
                    }}
                    onClick={this.handleClick.bind(this, products[i])}
                  >
                    {products[i].name}
                  </Product>
                ))}
              </Wrapper>
            )}
          </StaggeredMotion>
        </section>
      </div>
    );
  }
}

Products.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Products);
