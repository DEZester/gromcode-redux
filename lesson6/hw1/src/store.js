import { combineReducers, createStore } from 'redux';
import weatherReducer from './weather/weather.reducer';

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
