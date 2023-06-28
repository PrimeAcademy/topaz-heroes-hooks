import { createStore, combineReducers } from 'redux';
import { heroListReducer } from './hero-list-reducer.js';

const store = createStore(combineReducers({
  heroList: heroListReducer
}));

export default store;
