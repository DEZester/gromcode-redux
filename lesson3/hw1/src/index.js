import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUserData, removeUserData } from './user.actions';
console.log(store.getState());
store.dispatch(setLanguage('ru'));

store.dispatch(addProduct({ id: 1, name: 'apple' }));
console.log(store.getState());
store.dispatch(removeProduct(1));
console.log(store.getState());
store.dispatch(setUserData({ name: 'Alex' }));
console.log(store.getState());
store.dispatch(removeUserData());
console.log(store.getState());
