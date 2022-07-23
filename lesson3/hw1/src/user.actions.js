export const SET_USER = 'USERDATA/SET';
export const REMOVE_USER = 'USERDATA/REMOVE';

export const setUser = userData => {
  return {
    type: SET_USER,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
