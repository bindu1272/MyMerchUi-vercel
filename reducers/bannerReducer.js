import * as TYPES from "../constants/actionTypes";
import { combineReducers } from "redux";

const current = (
    state = {
        loading: false,
        error: null,
        headerBanners: null,
        footerBanners: null,
    },
    action
) => {
    switch (action.type) {
        case TYPES.FETCH_HEADER_BANNERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TYPES.FETCH_HEADER_BANNERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                headerBanners: action.payload,
            };
        case TYPES.FETCH_HEADER_BANNERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case TYPES.FETCH_FOOTER_BANNERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TYPES.FETCH_FOOTER_BANNERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                footerBanners: action.payload,
            };
        case TYPES.FETCH_FOOTER_BANNERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default combineReducers({
    current,
});
