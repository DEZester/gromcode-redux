import React from 'react';
import store from './store';
import TodoList from './tasks/components/TodoList';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
