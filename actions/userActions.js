import { call, put } from "redux-saga/effects";
import { normalize } from "normalizr";
import { api } from "../utilities/configureAxios";
import * as TYPES from "../constants/actionTypes";
import * as URLS from "../constants/apiUrls";
import * as SCHEMAS from "../constants/schemas";
import {
  computePaginationMeta,
  computePaginationURL,
} from "../utilities/helpers";

export const fetchUsersRequest = (params, onSuccess, onFailure) => ({
  type: TYPES.FETCH_USERS_REQUEST,
  params,
  onSuccess,
  onFailure,
});
export function* fetchUsers(action) {
  const { params, onSuccess, onFailure } = action;
  try {
    const url = computePaginationURL(URLS.FETCH_USERS_URL, params);
    const response = yield call(
      api.get,
      url,
    );
    onSuccess && onSuccess(response.data.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const updateUserProfileRequest = (
  values,
  userId,
  onSuccess,
  onFailure
) => ({
  type: TYPES.UPDATE_USER_PROFILE_REQUEST,
  values,
  userId,
  onSuccess,
  onFailure,
});
export function* updateUserProfile(action) {
  const { values, userId, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.put,
      URLS.UPDATE_USER_PROFILE_URL.replace(":userId", userId),
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const updateUserPasswordRequest = (
  values,
  onSuccess,
  onFailure
) => ({
  type: TYPES.UPDATE_USER_PASSWORD_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* updateUserPassword(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.put,
      URLS.UPDATE_USER_PASSWORD_URL,
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const updateUserAddressRequest = (
  values,
  userId,
  onSuccess,
  onFailure
) => ({
  type: TYPES.UPDATE_USER_ADDRESS_REQUEST,
  values,
  userId,
  onSuccess,
  onFailure,
});
export function* updateUserAddress(action) {
  const { values, addressId, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.put,
      URLS.UPDATE_USER_ADDRESS_URL.replace(":id", addressId),
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const fetchUserRequest = (userId, onSuccess, onFailure) => ({
  type: TYPES.FETCH_USER_REQUEST,
  userId,
  onSuccess,
  onFailure,
});
export function* fetchUser(action) {
  const { userId, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.get,
      URLS.FETCH_USER_URL.replace(":id", userId),
    );
    const { entities, result } = normalize(response.data, [SCHEMAS.user]);
    yield put({
      type: TYPES.FETCH_USER_SUCCESS,
      entities,
      result,
      response,
    });
    onSuccess && onSuccess(response.data);
  } catch (error) {
    yield put({
      type: TYPES.FETCH_USER_ERROR,
      error,
    });
    onFailure && onFailure(error);
  }
}

export const fetchUserCardsRequest = (onSuccess, onFailure) => ({
  type: TYPES.FETCH_USER_CARDS_REQUEST,
  onSuccess,
  onFailure,
});
export function* fetchUserCards(action) {
  const { onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.get,
      URLS.FETCH_USER_CARDS_URL
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const saveUserCardRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.SAVE_USER_CARD_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* saveUserCard(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.SAVE_USER_CARD_URL,
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const deleteUserCardRequest = (cardId, onSuccess, onFailure) => ({
  type: TYPES.DELETE_USER_CARD_REQUEST,
  cardId,
  onSuccess,
  onFailure,
});
export function* deleteUserCard(action) {
  const { cardId, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.delete,
      URLS.DELETE_USER_CARD_URL.replace(":id", cardId)
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const fetchUserAddressesRequest = (onSuccess, onFailure) => ({
  type: TYPES.FETCH_USER_ADDRESSES_REQUEST,
  onSuccess,
  onFailure,
});
export function* fetchUserAddresses(action) {
  const { onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.get,
      URLS.FETCH_USER_ADDRESSES_URL
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const saveUserAddressRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.SAVE_USER_ADDRESS_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* saveUserAddress(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.SAVE_USER_ADDRESS_URL,
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const deleteUserAddressRequest = (addressId, onSuccess, onFailure) => ({
  type: TYPES.DELETE_USER_ADDRESS_REQUEST,
  addressId,
  onSuccess,
  onFailure,
});
export function* deleteUserAddress(action) {
  const { addressId, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.delete,
      URLS.DELETE_USER_ADDRESS_URL.replace(":id", addressId)
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}

export const contactUsRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.CONTACT_US_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* contactUs(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.CONTACT_US_URL,
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}


export const bulkOrderRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.BULK_ORDER_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* bulkOrder(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.BULK_ORDER_URL,
      values,
    );
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onFailure && onFailure(error);
  }
}