import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  height: 5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f6f8f8;
  padding: 1rem 2rem 1rem 6rem;
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
    onAdd: PropTypes.func.isRequired
  };

  state = { text: '' };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="What needs to be done?"
          autoFocus
        />
      </Form>
    );
  }
}

export default TodoForm;
