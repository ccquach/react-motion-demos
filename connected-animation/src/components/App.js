import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, push } from 'connected-react-router';
import { connect } from 'react-redux';
import items from '../items';
import ItemsGrid from './ItemsGrid';
import ItemPage from './ItemPage';
import { setHeroStartingStyle } from '../actions';

class App extends Component {
  onItemClick = (item, e) => {
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
    const x = e.target.offsetLeft;
    const y = e.target.offsetTop - window.scrollY;
    // console.log(item);
    this.props.setHeroStartingStyle({ width, height, x, y });
    // redirect to item page
    this.props.push({ pathname: '/item', state: { item } });
  };

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ItemsGrid
                {...props}
                items={items}
                onItemClick={this.onItemClick}
              />
            )}
          />
          <Route exact path="/item" render={props => <ItemPage {...props} />} />
          } />
        </Switch>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  push: PropTypes.func.isRequired,
  setHeroStartingStyle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  null,
  { push, setHeroStartingStyle }
)(App);
