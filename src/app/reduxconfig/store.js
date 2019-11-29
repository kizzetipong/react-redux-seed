import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

let store = null;

export default (reducers, initialState = {}) => {
  const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
  if (!store) {
    store = createStore(reducers, initialState, enhancers);
  }
  return store;
};
