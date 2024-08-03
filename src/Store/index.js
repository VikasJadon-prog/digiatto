// src/Store/index.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import apiReducer from './reducers/apiReducer'; 

const rootReducer = combineReducers({
  api: apiReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
