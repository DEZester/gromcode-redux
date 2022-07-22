import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 1, name: 'Liza' }));
store.dispatch(addUser({ id: 2, name: 'Vlad' }));

store.subscribe(() => {
  const state = store.getState();
});

console.log(store.getState());
