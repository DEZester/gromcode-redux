const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    default:
      return state;
    case 'LANGUAGE/SET':
      return action.payload;
  }
};
export default languageReducer;
