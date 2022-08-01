import { getUserData } from './users.gateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_REVIEVED = 'USER_DATA_REVIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRevieved = userData => {
  return {
    type: USER_DATA_REVIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = userName => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      dispatch(userDataRevieved(userData));
    });
  };
};
