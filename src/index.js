import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import allReducers from './Reducers'
import {createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Route path='/' component={App} />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

