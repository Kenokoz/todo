import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(t => (
        <li>
          <TodoListItem label={t.label} important={t.important} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
