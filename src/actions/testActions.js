import * as types from './actionTypes';
import testApi from '../api/TestApi';

export function loadTest() {
  return function(dispatch) {
    return testApi.getAllTest().then(tests => {
      dispatch(loadTestSuccess(tests));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTestSuccess(tests) {
  return {type: 'LOAD_TEST_SUCCESS', tests};
}
