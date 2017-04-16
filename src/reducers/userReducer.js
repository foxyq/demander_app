import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;

    case types.UPDATE_USER_SUCCESS:
        return [
          ...state.filter(user => user.id !== action.user._id),
          Object.assign({}, action.user)
        ];

    default:
      return state;
  }

}
