import { combineReducers } from 'redux';
import todos from './reducer1';
import reducer from './reducer2';
import counter from './reducer3';

//используем combineReducers для будущей функциональности, использующей несколько store, now use only one - todos
export default combineReducers({
  todos,
  counter,
  reducer,
});
