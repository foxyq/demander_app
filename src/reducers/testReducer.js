import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function testReducer(state = initialState.tests, action) {
  switch(action.type) {
    case types.LOAD_TEST_SUCCESS:
      return action.tests;
    default:
      return state;
  }
}
