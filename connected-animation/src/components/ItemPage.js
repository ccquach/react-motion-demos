import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';

class ItemPage extends Component {
  render() {
    const { heroStartingStyle, location } = this.props;
    const { width, height, x, y } = heroStartingStyle;
    return (
      <ItemDetails
        item={location.state.item}
        starting={{ width, height, x, y }}
      />
    );
  }
}

ItemPage.propTypes = {
  heroStartingStyle: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  heroStartingStyle: state.style.startingHeroStyle
});

export default connect(
  mapStateToProps,
  null
)(ItemPage);
