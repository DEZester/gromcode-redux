import { createStore } from 'redux';
import paginationReducer from './users/users.reducer';

const store = createStore(paginationReducer);

export default store;
