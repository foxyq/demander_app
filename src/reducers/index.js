import {combineReducers} from 'redux';
import tests from './testReducer';
import cats from './catReducer';
import hobbies from './hobbyReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  // short hand property names
  tests,
  cats,
  hobbies,
  session
})

export default rootReducer;
