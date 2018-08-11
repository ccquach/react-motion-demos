import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
  color: #7f8c8d;
  background-color: #fff;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = styled.button`
  border: none;
  background-color: transparent;
  color: currentColor;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease-out;

  &:hover {
    border-bottom: 1px solid currentColor;
  }
`;

const FilterList = styled.form`
  list-style: none;
  display: flex;
  justify-content: space-between;

  & > li:not(:last-child) {
    margin-right: 1rem;
  }
`;

const FilterBox = styled.div`
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const FilterCheckbox = styled.input.attrs({
  type: 'radio',
  name: 'filterOption'
})`
  display: none;

  &:checked + label {
    border: 1px solid rgba(231, 76, 60, 0.2);
  }

  &:not(:checked) + label:hover {
    border: 1px solid rgba(231, 76, 60, 0.1);
  }
`;

const FilterLabel = styled.label`
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: border 0.3s ease-out;
`;

class Footer extends Component {
  handleChange = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    const { count, onClearCompleted, filter } = this.props;
    const filters = ['all', 'active', 'completed'];

    return (
      <Container>
        <p>{count} items left</p>

        <FilterList>
          {filters.map(f => (
            <FilterBox key={f}>
              <FilterCheckbox
                id={f}
                checked={filter === f}
                onChange={this.handleChange}
                value={f}
              />
              <FilterLabel htmlFor={f}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </FilterLabel>
            </FilterBox>
          ))}
        </FilterList>

        <ClearButton onClick={onClearCompleted}>Clear completed</ClearButton>
      </Container>
    );
  }
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired
};

export default Footer;
