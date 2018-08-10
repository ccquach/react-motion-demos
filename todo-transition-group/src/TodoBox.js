import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import todos from './todos';

const Box = styled.div`
  min-width: 55rem;
  width: 50%;
  margin: 0 auto;
  font-size: 2rem;
  position: relative;
  z-index: 1;

  &,
  &::before,
  &::after {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #fff;
  }

  &::before,
  &::after {
    content: '';
    height: 100%;
    position: absolute;
  }

  &::before {
    width: 98%;
    z-index: -1;
    bottom: -5px;
    left: 1%;
  }

  &::after {
    width: 96%;
    z-index: -2;
    bottom: -10px;
    left: 2%;
  }
`;

const CompleteAllButton = styled.button`
  cursor: pointer;
  font-size: 4rem;
  line-height: 1;
  border: none;
  background-color: transparent;
  color: rgb(189, 195, 199);
  opacity: 0.3;
  position: absolute;
  top: 7px;
  left: 2.8rem;
  transform: rotate(90deg);
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

class TodoBox extends Component {
  state = {
    todos,
    completed: false
  };

  handleAdd = text => {
    const newTodo = {
      id: `todo${Date.now()}`,
      text,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  handleUpdate = id => {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  handleCompleteAll = () => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        completed: !this.state.completed
      })),
      completed: !this.state.completed
    });
  };

  render() {
    return (
      <Box>
        <CompleteAllButton onClick={this.handleCompleteAll}>
          &rsaquo;
        </CompleteAllButton>
        <TodoForm onAdd={this.handleAdd} />
        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
        <Footer
          count={this.state.todos.filter(t => t.completed === false).length}
        />
      </Box>
    );
  }
}

export default TodoBox;
