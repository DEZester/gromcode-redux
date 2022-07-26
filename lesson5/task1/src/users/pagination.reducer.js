import { GO_NEXT, GO_PREV } from './pagination.action';
import users from '../../users';

const initialState = {
  users: {
    usersList: users,
    currentPage: 0,
  },
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case GO_NEXT:
      return {
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        },
      };
    case GO_PREV:
      return {
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        },
      };
  }
};

export default paginationReducer;
