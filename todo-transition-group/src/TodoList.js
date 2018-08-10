import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style: none;
  border-top: 1px solid #ecf0f1;
  background-color: #fff;
`;

const TodoList = ({ todos, onDelete, onUpdate }) => {
  const todoItems = todos.map(t => (
    <TodoItem
      key={t.id}
      text={t.text}
      completed={t.completed}
      onDelete={onDelete.bind(this, t.id)}
      onUpdate={onUpdate.bind(this, t.id)}
    />
  ));
  return <List>{todoItems}</List>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default TodoList;
