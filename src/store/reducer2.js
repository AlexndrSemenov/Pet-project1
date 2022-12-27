import * as actions from "./actionTypes";

export default function reducer (state=[], action=undefined){

  let lastId = 0;
  switch (action.type) {
    
    case actions.MOUSE_CLICK:
      const newState = [...state];
      newState.push(action.payload);
      return newState;

    case actions.CHANGE_INPUT:
      return [...state, {
        id: ++lastId,
        email: action.payload.email,
      }]
    
      case actions.TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);
    
      default:
      return state;
  }
}
