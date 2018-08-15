import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import NotFound from './404/NotFound';

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 4rem;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductList} />
              <Route path="/products/:id" component={Product} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
