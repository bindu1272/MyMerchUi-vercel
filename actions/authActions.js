import _ from "lodash";
import { call, put } from "redux-saga/effects";
import { normalize } from "normalizr";
import { api } from "../utilities/configureAxios";
import { user } from "../constants/schemas";
import * as TYPES from "../constants/actionTypes";
import * as URLS from "../constants/apiUrls";
import * as SCHEMAS from "../constants/schemas";

export const loginRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.LOGIN_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* login(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.LOGIN_URL,
      values);
    if (response.data.user) {
      const { entities, result } = normalize(response.data, [
        SCHEMAS.auth,
      ]);
      yield put({
        type: TYPES.LOGIN_SUCCESS,
        entities,
        result,
        response,
      });
    }
    if (response.data.cart) {
      yield put({
        type: TYPES.FETCH_CART_SUCCESS,
        payload: response.data.cart,
        response,
      });
    }
    onSuccess(response.data);
  } catch (error) {
    yield put({
      type: TYPES.LOGIN_ERROR,
      error,
    });
    onFailure(error);
  }
}

export const socialLoginRequest = (token, onSuccess, onFailure) => ({
  type: TYPES.SOCIAL_LOGIN_REQUEST,
  token,
  onSuccess,
  onFailure,
});
export function* socialLogin(action) {
  const { token, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.SOCIAL_LOGIN_URL,
      token
    );
    if (response.data.user) {
      const { entities, result } = normalize(response.data, [
        SCHEMAS.auth,
      ]);
      yield put({
        type: TYPES.LOGIN_SUCCESS,
        entities,
        result,
        response,
      });
    }
    if (response.data.cart) {
      yield put({
        type: TYPES.FETCH_CART_SUCCESS,
        payload: response.data.cart,
        response,
      });
    }
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
    yield put({
      type: TYPES.SOCIAL_LOGIN_ERROR,
      error,
    });
  }
}

export const registerRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.SIGNUP_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* register(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.SIGNUP_URL,
      values);
    if (response.data.user) {
      const { entities, result } = normalize(response.data, [
        SCHEMAS.auth,
      ]);
      yield put({
        type: TYPES.LOGIN_SUCCESS,
        entities,
        result,
        response,
      });
    }
    if (response.data.cart) {
      yield put({
        type: TYPES.FETCH_CART_SUCCESS,
        payload: response.data.cart,
        response,
      });
    }
    onSuccess(response.data);
  } catch (error) {
    yield put({
      type: TYPES.SIGNUP_ERROR,
      error,
    });
    onFailure(error);
  }
}

const loginSuccess = (entities, result) => (dispatch) => {
  dispatch({
    type: TYPES.LOGIN_SUCCESS,
    entities,
    result,
  });
};

const loginError = (error) => (dispatch) => {
  dispatch({
    type: TYPES.LOGIN_ERROR,
    error,
  });
};

export const logoutRequest = () => ({
  type: TYPES.LOGOUT_REQUEST,
});

export function* logout(action) {
  localStorage.clear();
}

export const refreshTokenRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.REFRESH_TOKEN_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* refreshToken(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.REFRESH_TOKEN_URL,
      values,
    );
    onSuccess(response);
  } catch (error) {
    onFailure(error);
  }
}

export const forgotPasswordRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.FORGOT_PASSWORD_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* forgotPassword(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.FORGOT_PASSWORD_URL,
      values,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const validateForgotPasswordTokenRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.VALIDATE_FORGOT_PASSWORD_TOKEN_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* validateForgotPasswordToken(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.VALIDATE_FORGOT_PASSWORD_TOKEN_URL,
      values,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const resetPasswordRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.RESET_PASSWORD_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* resetPassword(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.RESET_PASSWORD_URL,
      values,
    );
    if (response.data.user) {
      const { entities, result } = normalize(response.data, [
        SCHEMAS.auth,
      ]);
      yield put({
        type: TYPES.LOGIN_SUCCESS,
        entities,
        result,
        response,
      });
    }
    if (response.data.cart) {
      yield put({
        type: TYPES.FETCH_CART_SUCCESS,
        payload: response.data.cart,
        response,
      });
    }
    onSuccess(response.data);
  } catch (error) {
    yield put({
      type: TYPES.LOGIN_ERROR,
      error,
    });
    onFailure(error);
  }
}
