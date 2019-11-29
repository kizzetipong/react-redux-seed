import * as todoappActions from './actions';
import todoappReducer from './reducer';
import mainContainer from './containers/Todo';
import state from './initialState';

export const actions = todoappActions;
export const reducer = todoappReducer;
export const initialState = state;
export default mainContainer;
