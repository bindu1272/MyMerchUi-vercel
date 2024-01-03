import * as TYPES from "../constants/actionTypes";
import { combineReducers } from "redux";
/**
 * reducer for session
 *
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
const auth = (
  state = {
    loading: false,
    error: null,
    id: null,
    ids: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        user: action.response.data.user,
        id: action.response.data.user.id,
      };
    case TYPES.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        id: null,
        user: null,
        error: action.error,
      };
    case TYPES.SOCIAL_LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case TYPES.SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        user: action.response.data.user,
        id: action.response.data.user.id,
      };
    case TYPES.SOCIAL_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        id: null,
        error: action.error,
      };
    case TYPES.LOGOUT_REQUEST:
      return {
        ...state,
        id: null,
        user: null,
      };
    case TYPES.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.response.data.user,
        id: action.response.data.user.id,
      };
    case TYPES.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        id: null,
        error: action.error,
      };
    case TYPES.REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TYPES.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.response.user,
        id: action.response.data.user.id,
      };
    case TYPES.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loading: true,
        error: null,
        id: null,
      };
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
        user: action.response.data.data,
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
  auth,
});
