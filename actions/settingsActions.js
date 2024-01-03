import { call, put } from "redux-saga/effects";
import { api } from "../utilities/configureAxios";
import * as TYPES from "../constants/actionTypes";
import * as URLS from "../constants/apiUrls";

export const fetchSettingsRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_SETTINGS_REQUEST,
    onSuccess,
    onFailure,
});
export function* fetchSettings(action) {
    const { onSuccess, onFailure } = action;
    try {
        const response = yield call(
            api.get,
            URLS.FETCH_SETTINGS_URL,
        );
        onSuccess(JSON.parse(response.data.data.settings));
    } catch (error) {
        onFailure(error);
    }
}

export const saveSettingsRequest = (
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.SAVE_SETTINGS_REQUEST,
    values,
    onSuccess,
    onFailure,
});
export function* saveSettings(action) {
    const { values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            api.post,
            URLS.SAVE_SETTINGS_URL,
            { settings: values },
        );
        onSuccess(JSON.parse(response.data.data.settings));
    } catch (error) {
        onFailure(error);
    }
}