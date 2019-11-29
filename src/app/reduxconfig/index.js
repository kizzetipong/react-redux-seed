/* eslint-disable import/prefer-default-export */
import initialState from './initialState';
import reducers from './reducers';
import initStore from './store';

export const getStore = () => initStore(reducers, initialState);
