import { SET_USER_DATA, REMOVE_USER_DATA } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_USER_DATA:
      return {
        ...state,
        state: action.payload.userData,
      };

    case REMOVE_USER_DATA:
      return null;
  }
};

export default userReducer;
