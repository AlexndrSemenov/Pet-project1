import { createStore } from 'redux';
// import reducer from "./reducer";
import combineReducers from "./index";

const store = createStore(combineReducers);
//const store = createStore(reducer);

export default store;
