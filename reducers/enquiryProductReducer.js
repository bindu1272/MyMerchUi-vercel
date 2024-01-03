import * as TYPES from "../constants/actionTypes";
import { combineReducers } from "redux";

const list = (
    state = {
        loading: false,
        products: [],
        productsType: "all-merch",
        productsQuantity: { type: "", value: 50 },
        searchString: "",
        error: null,
    },
    action
) => {
    switch (action.type) {
        case TYPES.FETCH_ENQUIRY_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case TYPES.FETCH_ENQUIRY_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            };
        case TYPES.FETCH_ENQUIRY_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case TYPES.SET_ENQUIRY_PRODUCTS_TYPE:
            return {
                ...state,
                productsType: action.payload,
                products: [],
            };
        case TYPES.SET_ENQUIRY_PRODUCTS_QUANTITY:
            return {
                ...state,
                productsQuantity: action.payload,
            };
        case TYPES.SET_ENQUIRY_PRODUCTS_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload,
                products: [],
            };
        case TYPES.RESET_ENQUIRY_PRODUCTS:
            return {
                ...state,
                products: [],
                productsType: "all-merch",
                productsQuantity: { type: "", value: 50 },
                searchString: "",
            };
        default:
            return state;
    }
};



export default combineReducers({
    list,
});
