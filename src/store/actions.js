import * as actions from "./actionTypes";

export function addTodo(evt){

  return {
    type: actions.ADD_TODO,
    payload: evt,
  };

};
