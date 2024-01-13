import React from "react";
import CustomPackDetails from "./CustomPackDetails";
import CuratedPackDetails from "./CuratedPackDetails";

const ProductDetails = ({
    currentProduct,
    currentProductColour,
    currentProductQuantity,
    currentProductUnitPrice,
    showProductSizeGuideModal,
    onChangeCurrentProductQuantity,
    onBlurCurrentProductQuantity,
    onClickProductColour,
    onClickAddProductToEnquiry,
    onClickViewSizeGuide,
    onOkSizeGuideModal,
    onCancelSizeGuideModal,
    showError
}) => {
    return (currentProduct.curated_pack
        ? <CuratedPackDetails
            currentProduct={currentProduct}
            currentProductColour={currentProductColour}
            currentProductQuantity={currentProductQuantity}
            currentProductUnitPrice={currentProductUnitPrice}
            showProductSizeGuideModal={showProductSizeGuideModal}
            onChangeCurrentProductQuantity={onChangeCurrentProductQuantity}
            onBlurCurrentProductQuantity={onBlurCurrentProductQuantity}
            onClickProductColour={onClickProductColour}
            onClickAddProductToEnquiry={onClickAddProductToEnquiry}
            onClickViewSizeGuide={onClickViewSizeGuide}
            onOkSizeGuideModal={onOkSizeGuideModal}
            onCancelSizeGuideModal={onCancelSizeGuideModal}
            showError={showError}
        />
        : <CustomPackDetails
            currentProduct={currentProduct}
            currentProductColour={currentProductColour}
            currentProductQuantity={currentProductQuantity}
            currentProductUnitPrice={currentProductUnitPrice}
            showProductSizeGuideModal={showProductSizeGuideModal}
            onChangeCurrentProductQuantity={onChangeCurrentProductQuantity}
            onBlurCurrentProductQuantity={onBlurCurrentProductQuantity}
            onClickProductColour={onClickProductColour}
            onClickAddProductToEnquiry={onClickAddProductToEnquiry}
            onClickViewSizeGuide={onClickViewSizeGuide}
            onOkSizeGuideModal={onOkSizeGuideModal}
            onCancelSizeGuideModal={onCancelSizeGuideModal}
            showError={showError}
        />
    );
};

export default ProductDetails;