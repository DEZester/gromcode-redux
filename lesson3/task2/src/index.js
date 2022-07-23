import { increment, decrement, store } from './counter';
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());
