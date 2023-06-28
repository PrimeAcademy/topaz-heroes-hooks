export function heroListReducer(state = [], action) {
  if (action.type === 'CREATE_SUPERHERO') {
    return [...state, action.payload];
  }

  return state;
}
