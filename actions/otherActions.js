import { call } from "redux-saga/effects";
import { api } from "../utilities/configureAxios";
import * as TYPES from "../constants/actionTypes";
import * as URLS from "../constants/apiUrls";

export const fetchInstagramFeedRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_INSTAGRAM_FEED_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchInstagramFeed(action) {
    const { onSuccess, onFailure } = action;
    try {
        const response = yield call(
            api.get,
            URLS.FETCH_INSTAGRAM_FEED_URL,
        );
        onSuccess && onSuccess(response.data);
    } catch (error) {
        onFailure && onFailure(error);
    }
}