// src/actions/hobbyAction.js

import * as types from './actionTypes';
import UserApi from '../api/UserApi';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function updateUserSuccess(user){
  return {type: types.UPDATE_USER_SUCCESS, user};
}

export function loadUsers() {
  return function(dispatch) {
    return UserApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return UserApi.updateUser(user).then(responseUser => {
      dispatch(updateUserSuccess(responseUser));
    }).catch(error => {
      throw(error);
    });
  }
}
