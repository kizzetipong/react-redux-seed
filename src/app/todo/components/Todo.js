import React from 'react';
import Input from '../containers/Input';
import TodoList from './TodoList';

function Todo({ todoList }) {
  return (
    <div>
      <Input />
      <TodoList list={todoList} />
    </div>
  );
}

export default Todo;
