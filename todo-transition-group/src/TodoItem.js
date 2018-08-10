import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  padding: 1rem 6rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #ecf0f1;
  }

  &:hover > button {
    opacity: 1;
    visibility: visible;
  }
`;

const Text = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? 0.3 : 1)};
`;

const Checkmark = styled.span`
  text-align: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid ${({ completed }) => (completed ? '#2ecc71' : '#ecf0f1')};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ completed }) => (completed ? '#2ecc71' : '#ecf0f1')};
  transition: color 0.3s ease-out;

  ${({ completed }) =>
    completed &&
    `
    &::before {
      content: '\\2713';
    }
  `};
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

const TodoItem = ({ text, completed, onDelete, onUpdate }) => {
  return (
    <Item>
      <Checkmark completed={completed} onClick={onUpdate} />
      <Text completed={completed}>{text}</Text>
      <DeleteButton onClick={onDelete}>&times;</DeleteButton>
    </Item>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default TodoItem;
