export const SET_USER_DATA = 'USERDATA/SET';
export const REMOVE_USER_DATA = 'USERDATA/REMOVE';

export const setUser = userData => {
  return {
    type: SET_USER_DATA,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER_DATA,
  };
};
