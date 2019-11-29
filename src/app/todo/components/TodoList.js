import React from 'react';
import TodoItem from '../containers/TodoItem';

export default function TodoList({ list = [] }) {
  return (
    <div>
      {
        list.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </div>
  );
}
