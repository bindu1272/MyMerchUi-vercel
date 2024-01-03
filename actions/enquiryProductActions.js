import { call, put } from "redux-saga/effects";
import { api } from "../utilities/configureAxios";
import * as TYPES from "../constants/actionTypes";
import * as URLS from "../constants/apiUrls";
import {
  computePaginationMeta,
  computePaginationURL,
} from "../utilities/helpers";

export const fetchEnquiryProductsRequest = (params, onSuccess, onFailure) => ({
  type: TYPES.FETCH_ENQUIRY_PRODUCTS_REQUEST,
  params,
  onSuccess,
  onFailure,
});
export function* fetchEnquiryProducts(action) {
  const { params, onSuccess, onFailure } = action;
  try {
    const url = computePaginationURL(URLS.FETCH_ENQUIRY_PRODUCTS_URL, params);
    const response = yield call(
      api.get,
      url,
    );
    yield put({
      type: TYPES.FETCH_ENQUIRY_PRODUCTS_SUCCESS,
      payload: response.data,
      response,
    });
    onSuccess(response.data);
  } catch (error) {
    yield put({
      type: TYPES.FETCH_ENQUIRY_PRODUCTS_ERROR,
      error,
    });
    onFailure(error);
  }
}

export const fetchEnquiryProductRequest = (params, onSuccess, onFailure) => ({
  type: TYPES.FETCH_ENQUIRY_PRODUCT_REQUEST,
  params,
  onSuccess,
  onFailure,
});
export function* fetchEnquiryProduct(action) {
  const { params, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.get,
      URLS.FETCH_ENQUIRY_PRODUCT_URL.replace(":slug", params.slug),
    );
    onSuccess(response.data.data);
  } catch (error) {
    onFailure(error);
  }
}

export const submitEnquiryProductsRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.SUBMIT_ENQUIRY_PRODUCTS_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* submitEnquiryProducts(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.SUBMIT_ENQUIRY_PRODUCTS_URL,
      values,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const uploadEnquiryProductBrandAssetRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.UPLOAD_ENQUIRY_PRODUCT_BRAND_ASSET_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* uploadEnquiryProductBrandAsset(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.UPLOAD_ENQUIRY_PRODUCT_BRAND_ASSET_URL,
      values,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const importEnquiryProductsRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.IMPORT_ENQUIRY_PRODUCTS_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* importEnquiryProducts(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.IMPORT_ENQUIRY_PRODUCTS_URL,
      values,
    );
    // yield put({
    //   type: TYPES.FETCH_ENQUIRY_PRODUCTS_SUCCESS,
    //   payload: response.data,
    //   response,
    // });
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const fetchEnquiryProductSizeGuidesRequest = (params, onSuccess, onFailure) => ({
  type: TYPES.FETCH_ENQUIRY_PRODUCT_SIZE_GUIDES_REQUEST,
  params,
  onSuccess,
  onFailure,
});
export function* fetchEnquiryProductSizeGuides(action) {
  const { params, onSuccess, onFailure } = action;
  try {
    const url = computePaginationURL(URLS.FETCH_ENQUIRY_PRODUCT_SIZE_GUIDES_URL, params);
    const response = yield call(
      api.get,
      url,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}

export const importEnquiryProductSizeGuidesRequest = (values, onSuccess, onFailure) => ({
  type: TYPES.IMPORT_ENQUIRY_PRODUCT_SIZE_GUIDES_REQUEST,
  values,
  onSuccess,
  onFailure,
});
export function* importEnquiryProductSizeGuides(action) {
  const { values, onSuccess, onFailure } = action;
  try {
    const response = yield call(
      api.post,
      URLS.IMPORT_ENQUIRY_PRODUCT_SIZE_GUIDES_URL,
      values,
    );
    onSuccess(response.data);
  } catch (error) {
    onFailure(error);
  }
}
