import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionMotion, spring, presets } from 'react-motion';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style: none;
  border-top: 1px solid #ecf0f1;
  background-color: #fff;
`;

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  willEnter = () => {
    return { height: 0, opacity: 1 };
  };

  willLeave = () => {
    return {
      height: spring(0),
      opacity: spring(0)
    };
  };

  getDefaultStyles = () => {
    return this.props.todos.map(todo => ({
      key: `${todo.id}-transition`,
      style: {
        height: 0,
        opacity: 1
      },
      data: todo
    }));
  };

  getStyles = () => {
    return this.props.todos.map(todo => ({
      key: `${todo.id}-transition`,
      style: {
        height: spring(60, presets.wobbly),
        opacity: spring(1, presets.wobbly)
      },
      data: todo
    }));
  };

  render() {
    const { onDelete, onUpdate } = this.props;
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {interpolated => (
          <List>
            {interpolated.map(
              ({ key, style, data: { id, text, completed } }) => (
                <li key={key} style={style}>
                  <TodoItem
                    id={id}
                    text={text}
                    completed={completed}
                    onDelete={onDelete.bind(this, id)}
                    onUpdate={onUpdate.bind(this, id)}
                  />
                </li>
              )
            )}
          </List>
        )}
      </TransitionMotion>
    );
  }
}

export default TodoList;
