const setLanguage = type => {
  return {
    type: 'LANGUAGE/SET',
    payload: type,
  };
};

export default setLanguage;
