import { ADD_TODO, REMOVE_TODO } from './actions';

export default (state = { todoList: [] }, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        title: action.text,
        completed: false,
      };
      return { todoList: [...state.todoList, newTodo] };
    }
    case REMOVE_TODO: {
      return { todoList: state.todoList.filter((todo) => todo.id !== action.id) };
    }
    default: return state;
  }
};
