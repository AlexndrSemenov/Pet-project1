// const initialState = {
//   name: 'Аноним'
// }

// export default function user(state = initialState) {
//   return state
// }

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}