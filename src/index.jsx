import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import App from './components/app';

const logger = createLogger();
const history = createHistory();
const router = routerMiddleware(history);
const middleware = applyMiddleware(
  thunkMiddleware,
  logger,
  router,
);

const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
