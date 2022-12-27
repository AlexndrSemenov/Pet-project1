import * as actions from "./actionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      //return state.concat([action.payload]) чтобы приплюсовать к предыдущему значению
      return state = ([action.payload])
    default:
      return state
  }
}
