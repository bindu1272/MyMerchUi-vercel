import _ from "lodash";

export const getCart = (state) => {
  const cart = state.cart ? state.cart.current.cart : null;
  return cart
}

export const getContactDetails = (state) => {
  const cart = state.cart ? state.cart.current.contactDetails : null;
  return cart
}

export const getBrandAssets = (state) => {
  const cart = state.cart ? state.cart.current.brandAssets : null;
  return cart
}