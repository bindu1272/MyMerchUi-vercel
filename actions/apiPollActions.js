import { call, put, select } from 'redux-saga/effects';
import * as TYPES from '../constants/actionTypes';
import * as URLS from '../constants/apiUrls';
import { api } from '../utilities/configureAxios';
import { delay } from 'redux-saga/effects';

const API_POLL_TIMEOUT = 10000; // 10 seconds

/**
 * dispatches CREATE_API_POLL_REQUEST action
 */
export const accessApiPollRequest = (accessCode, success, error) => ({
  type: TYPES.CREATE_API_POLL_REQUEST,
  success,
  error
});

/**
 *
 * @param action action type
 */
export function* accessApiPoll(action) {
  const { accessCode, success, error } = action;
  try {
    const response = yield call(
      api.get,
      URLS.ACCESS_API_POLL_URL + `?accessCode=${accessCode}`
    );
    console.log('API Poll Response', response);
    if (success) {
      if (response.data.status === 'processing') {
        console.log('Before time out');
        yield delay(API_POLL_TIMEOUT);
        console.log('After time out');
        yield put({
          type: TYPES.CREATE_API_POLL_REQUEST,
          accessCode: accessCode,
          success: success,
          error: error
        });
      }
      if (response.data.status === 'completed') {
        success(response.data.apiResponse);
      }
      if (response.data.status === 'failure') {
        error(' Server error');
      }
    }
  } catch (err) {
    if (error) {
      error(err);
    }
  }
}
