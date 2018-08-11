import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f6f8f8;
  padding: 1.5rem 2rem 1.5rem 6rem;
  font-size: inherit;
  font-family: inherit;
  color: #272727;

  &::-webkit-input-placeholder {
    opacity: 0.5;
    font-style: italic;
  }
`;

class TodoForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.props.onValueChange(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.props.value);
    this.props.onValueChange('');
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.handleChange}
          value={this.props.value}
          placeholder="What needs to be done?"
          autoFocus
        />
      </Form>
    );
  }
}

export default TodoForm;
