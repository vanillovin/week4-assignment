import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import comments from './comments/index';

const rootReducer = combineReducers({ comments });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
