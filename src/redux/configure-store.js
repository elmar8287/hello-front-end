import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import greetingReducer from './greeting';

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
