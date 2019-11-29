import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import { getStore } from './app/reduxconfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
