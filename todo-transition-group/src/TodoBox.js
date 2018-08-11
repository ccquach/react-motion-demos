import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import todos from './todos';

const Box = styled.main`
  min-width: 55rem;
  width: 50%;
  margin: 0 auto;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24),
    0 10px 0 -5px #f1f1f1, 0 10px 1px -4px rgba(0, 0, 0, 0.24),
    0 20px 0 -10px #f1f1f1, 0 20px 1px -9px rgba(0, 0, 0, 0.24);
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
    completed: false,
    filter: 'all',
    value: ''
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

  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  getFilteredTodos = () => {
    const { value, filter } = this.state;

    let todos = this.state.todos.filter(
      todo =>
        todo.text
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .indexOf(value.toLowerCase()) !== -1
    );

    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleValueChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <Box>
        <CompleteAllButton onClick={this.handleCompleteAll}>
          &rsaquo;
        </CompleteAllButton>
        <TodoForm
          onAdd={this.handleAdd}
          onFilter={this.handleFilter}
          value={this.state.value}
          onValueChange={this.handleValueChange}
        />
        <TodoList
          todos={this.getFilteredTodos()}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
        <Footer
          count={this.state.todos.filter(t => !t.completed).length}
          onClearCompleted={this.handleClearCompleted}
          filter={this.state.filter}
          onFilter={this.handleFilter}
        />
      </Box>
    );
  }
}

export default TodoBox;
