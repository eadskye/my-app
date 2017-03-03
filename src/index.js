import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import components from './components';
import routes from './routes.js';
const createStoreWithMiddleware = applyMiddleware()(createStore);





ReactDOM.render(
  <Provider store={createStoreWithMiddleware(components)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
