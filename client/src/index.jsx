import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';
import './assets/scss/app.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
