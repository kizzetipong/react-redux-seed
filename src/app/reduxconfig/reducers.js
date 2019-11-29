import { combineReducers } from 'redux';
import { reducer as todo } from '../todo';

export default combineReducers({
  todo,
});
