const entitiesReducer = (state = {}, action) => {
  if (action.entities) {
    return {...state, ...action.entities};
  }

  return state;
};
export default entitiesReducer;
