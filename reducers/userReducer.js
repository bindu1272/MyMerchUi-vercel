import * as TYPES from "../constants/actionTypes";
import { combineReducers } from "redux";

const list = (
  state = {
    loading: false,
    error: null,
    id: null,
    ids: null,
  },
  action
) => {
  switch (action.type) {
      case TYPES.FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case TYPES.FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          id: action.result[1],
        };
      case TYPES.FETCH_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
    default:
      return state;
  }
};

export default combineReducers({
  list
});
