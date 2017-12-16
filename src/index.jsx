import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import App from './components/app';

const logger = createLogger();
const middleware = applyMiddleware(
  thunkMiddleware,
  logger,
);
const store = createStore(reducer, middleware);

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app'),
);
