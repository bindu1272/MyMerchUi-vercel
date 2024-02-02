export const PER_PAGE = 10;

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const FETCH_CATEGORIES_URL = BASE_URL + "/product-categories";
export const REARRANGE_CATEGORIES_URL = BASE_URL + "/product-categories/rearrange";
export const FETCH_CATEGORY_URL = BASE_URL + "/product-category/:id";
export const UPDATE_CATEGORY_URL = BASE_URL + "/product-category/:id";
export const DELETE_CATEGORY_URL = BASE_URL + "/product-category/:id";
export const CREATE_CATEGORY_URL = BASE_URL + "/product-category";
export const FETCH_PRODUCTS_URL = BASE_URL + "/product";
export const FETCH_GROUPED_PRODUCTS_URL = BASE_URL + "/product-grouped";
export const FETCH_PRODUCT_URL = BASE_URL + "/product/:id";
export const FETCH_GROUPED_PRODUCT_URL = BASE_URL + "/product-grouped/:id";
export const FETCH_INSTAGRAM_FEED_URL = BASE_URL + "/instagram-feed";

export const FETCH_CART_URL = BASE_URL + "/cart";
export const CREATE_CART_URL = BASE_URL + "/cart";
export const UPDATE_CART_URL = BASE_URL + "/cart";
export const CHECKOUT_URL = BASE_URL + "/cart/checkout";
export const FETCH_GUEST_CART_URL = "guest/cart/:uuid";
export const UPDATE_GUEST_CART_URL = "guest/cart/:uuid"
export const CHECKOUT_GUEST_URL = BASE_URL + "/guest/cart/checkout";
export const OVERWRITE_CART_URL = "cart/finalize/:uuid";

export const FETCH_ORDERS_URL = BASE_URL + "/orders";
export const SORT_ORDERS_URL = BASE_URL + "/orders/sort";
export const FETCH_ORDER_URL = BASE_URL + "/orders/:id"
export const FETCH_ORDER_ITEMS_URL = BASE_URL + "/order-items/:orderId"
export const SUBMIT_CURATED_PACK_ORDER_URL = BASE_URL + "/orders/box/submit";

export const FETCH_USERS_URL = BASE_URL + "/users";
export const UPDATE_USER_PROFILE_URL = BASE_URL + "/user-profile/:userId";
export const FETCH_USER_URL = BASE_URL + "/user/:id";
export const UPDATE_USER_PASSWORD_URL = BASE_URL + "/user/password";
export const FETCH_USER_CARDS_URL = BASE_URL + "/user/card";
export const SAVE_USER_CARD_URL = BASE_URL + "/user/card";
export const DELETE_USER_CARD_URL = BASE_URL + "/user/card/:id";
export const FETCH_USER_ADDRESSES_URL = BASE_URL + "/user/address";
export const SAVE_USER_ADDRESS_URL = BASE_URL + "/user/address";
export const DELETE_USER_ADDRESS_URL = BASE_URL + "/user/address/:id";
export const UPDATE_USER_ADDRESS_URL = BASE_URL + "/user/address/:id";

export const IMPORT_PRODUCTS_URL = BASE_URL + "/import-products";
export const IMPORT_PRODUCT_DATA_URL = BASE_URL + "/import-product-data";

export const EXPORT_PRODUCTS_URL = BASE_URL + "/products-export";

export const FETCH_SETTINGS_URL = BASE_URL + "/settings";
export const SAVE_SETTINGS_URL = BASE_URL + "/settings";

export const SIGNUP_URL = BASE_URL + "/register";
export const LOGIN_URL = BASE_URL + "/login";
export const SOCIAL_LOGIN_URL = BASE_URL + "/socialLogin";
export const REFRESH_TOKEN_URL = BASE_URL + "/refresh";
export const FETCH_FILTERS_URL = BASE_URL + "/filters"
export const CONTACT_US_URL = BASE_URL + "/guest/contact";
export const BULK_ORDER_URL = BASE_URL + "/guest/bulk-order";
export const FORGOT_PASSWORD_URL = BASE_URL + "/forgot-password";
export const VALIDATE_FORGOT_PASSWORD_TOKEN_URL = BASE_URL + "/verify-reset-token";
export const RESET_PASSWORD_URL = BASE_URL + "/reset-password";
export const ACCESS_API_POLL_URL = '/api-poll/access';

export const FETCH_ENQUIRY_PRODUCTS_URL = BASE_URL + "/enquiry-product";
export const FETCH_ENQUIRY_PRODUCT_URL = BASE_URL + "/enquiry-product/get-product-by-slug?slug=:slug";
export const SUBMIT_ENQUIRY_PRODUCTS_URL = BASE_URL + "/enquiry-product/enquiry";
export const UPLOAD_ENQUIRY_PRODUCT_BRAND_ASSET_URL = BASE_URL + "/enquiry-product/file";
export const IMPORT_ENQUIRY_PRODUCTS_URL = BASE_URL + "/enquiry-product/import";
export const FETCH_ENQUIRY_PRODUCT_SIZE_GUIDES_URL = BASE_URL + "/enquiry-product/get-size-charts";
export const IMPORT_ENQUIRY_PRODUCT_SIZE_GUIDES_URL = BASE_URL + "/enquiry-product/import-size-charts";