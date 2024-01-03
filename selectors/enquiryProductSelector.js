export const getEnquiryProducts = (state) => {
    const enquiryProducts = state.enquiryProducts ? state.enquiryProducts.list.products : null;
    return enquiryProducts
}

export const getEnquiryProductsType = (state) => {
    const enquiryProducts = state.enquiryProducts ? state.enquiryProducts.list.productsType : null;
    return enquiryProducts
}

export const getEnquiryProductsQuantity = (state) => {
    const enquiryProducts = state.enquiryProducts ? state.enquiryProducts.list.productsQuantity : null;
    return enquiryProducts
}

export const getEnquiryProductsSearchString = (state) => {
    const enquiryProducts = state.enquiryProducts ? state.enquiryProducts.list.searchString : null;
    return enquiryProducts
}