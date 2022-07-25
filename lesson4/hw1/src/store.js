import { createStore } from 'redux';
import paginationReducer from './users/pagination.reducer';

const store = createStore(paginationReducer);

export default store;
