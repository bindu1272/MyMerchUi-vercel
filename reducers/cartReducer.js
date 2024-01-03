import * as TYPES from "../constants/actionTypes";
import { combineReducers } from "redux";

const current = (
  state = {
    cart: {
      productsType: "",
      products: [],
    },
    contactDetails: {
      "clientType": "New Client",
      "warehousing": "No",
      "delivery": "One Address",
    },
    brandAssets: {
      uuid: "",
      filesList: [],
    }
  },
  action
) => {
  let updatedCart = {};
  switch (action.type) {
    case TYPES.SET_CART_ENQUIRY_PRODUCTS_TYPE:
      updatedCart = {
        ...state.cart,
        productsType: action.payload,
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case TYPES.ADD_ENQUIRY_PRODUCT:
      updatedCart = {
        ...state.cart,
        products: state.cart.products.concat(action.payload),
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case TYPES.REMOVE_ENQUIRY_PRODUCT:
      updatedCart = {
        ...state.cart,
        products: state.cart.products.filter(p => p.id != action.payload.id),
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case TYPES.UPDATE_ENQUIRY_PRODUCT:
      updatedCart = { ...state.cart };
      let productTobeUpdatedIndex = updatedCart.products.findIndex(p => p.id == action.payload.id);
      updatedCart.products[productTobeUpdatedIndex] = action.payload;
      return {
        ...state,
        cart: updatedCart,
      };
    case TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY:
      updatedCart = { ...state.cart };
      let quantityTobeUpdatedProductIndex = updatedCart.products.findIndex(p => p.id == action.payload.id);
      updatedCart.products[quantityTobeUpdatedProductIndex].quantity = action.payload.quantity;
      updatedCart.products[quantityTobeUpdatedProductIndex].unitPrice = action.payload.unitPrice;
      return {
        ...state,
        cart: updatedCart,
      };
    case TYPES.SET_ENQUIRY_PRODUCTS_CONTACT_DETAILS:
      return {
        ...state,
        contactDetails: action.payload,
      };
    case TYPES.ADD_ENQUIRY_PRODUCTS_BRAND_ASSETS:
      return {
        ...state,
        brandAssets: {
          uuid: action.payload.uuid,
          filesList: state.brandAssets.filesList.concat(action.payload.file),
        },
      };
    case TYPES.REMOVE_ENQUIRY_PRODUCTS_BRAND_ASSETS:
      return {
        ...state,
        brandAssets: {
          uuid: state.brandAssets.uuid,
          filesList: state.brandAssets.filesList.filter(f => f.uid != action.payload.uid),
        }
      };
    case TYPES.RESET_CART_ENQUIRY_PRODUCTS:
      updatedCart = {
        productsType: "",
        products: [],
      }
      return {
        ...state,
        cart: updatedCart,
        contactDetails: {
          "clientType": "New Client",
          "warehousing": "No",
          "delivery": "One Address",
        },
        brandAssets: {
          uuid: "",
          filesList: [],
        }
      };
    default:
      return state;
  }
};

export default combineReducers({
  current,
});
