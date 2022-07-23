import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
console.log(store.getState());
store.dispatch(setLanguage('ru'));

store.dispatch(addProduct({ id: 1, name: 'apple' }));
console.log(store.getState());
store.dispatch(removeProduct(1));
console.log(store.getState());
store.dispatch(setUser({ name: 'Alex' }));
console.log(store.getState());
store.dispatch(removeUser());
console.log(store.getState());
