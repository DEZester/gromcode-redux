const initialState = {
  usersList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDUser':
      return {
        ...state,
        userList: state.usersList.concat(action.payload),
      };
    case 'DELETEUser':
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};
