import React from 'react';
import Weather from './weather/Weather';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
