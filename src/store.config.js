import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducers } from './reducers/index';

export const store = createStore(
  rootReducers,
  {},
  applyMiddleware(thunk, promiseMiddleware(), logger),
);
