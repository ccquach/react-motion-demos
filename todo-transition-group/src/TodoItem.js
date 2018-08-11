import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 6rem;
  position: relative;
  overflow: hidden;

  &:hover > button {
    opacity: 1;
    visibility: visible;
  }
`;

const Label = styled.label`
  vertical-align: middle;
  position: relative;

  &::before {
    content: '';
    text-align: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid currentColor;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -4.5rem;
    transform: translateY(-50%);
    cursor: pointer;
    color: #ecf0f1;
    transition: color 0.3s ease-out;
  }
`;

const Checkmark = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;

  &:checked + label {
    text-decoration: line-through;

    & > span {
      opacity: 0.3;
    }

    &::before {
      content: '\\2713';
      color: #2ecc71;
      border: 1px solid currentColor;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  font-size: 3rem;
  color: rgba(231, 76, 60, 0.5);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out;

  &:hover {
    color: rgb(231, 76, 60);
  }
`;

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.completed !== nextProps.completed;
  };

  render() {
    const { id, text, completed, onDelete, onUpdate } = this.props;
    return (
      <Wrapper>
        <Checkmark id={id} checked={completed} onChange={onUpdate} />
        <Label htmlFor={id}>
          <span>{text}</span>
        </Label>
        <DeleteButton onClick={onDelete}>&times;</DeleteButton>
      </Wrapper>
    );
  }
}

export default TodoItem;
