import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

store.dispatch(addUser({ id: 1, name: 'Vlad' }));
store.dispatch(addUser({ id: 2, name: 'Liza' }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { name: 'Alex', age: 31 }));
