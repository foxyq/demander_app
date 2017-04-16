import {combineReducers} from 'redux';
import tests from './testReducer';
import users from './userReducer';
import cats from './catReducer';
import hobbies from './hobbyReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  // short hand property names
  tests,
  users,
  cats,
  hobbies,
  session
})

export default rootReducer;
