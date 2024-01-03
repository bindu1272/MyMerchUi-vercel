import React from "react";
import CustomPackDetailsPopup from "./CustomPackDetailsPopup";
import CuratedPackDetailsPopup from "./CuratedPackDetailsPopup";

const ProductDetailsPopup = ({
    currentProduct,
    currentProductColour,
    currentProductQuantity,
    currentProductUnitPrice,
    showProductDetailsModal,
    showProductSizeGuideModal,
    onChangeCurrentProductQuantity,
    onBlurCurrentProductQuantity,
    onClickProductColour,
    onOkProductDetailsModal,
    onCancelProductDetailsModal,
    onClickAddProductToEnquiry,
    onClickViewSizeGuide,
    onOkSizeGuideModal,
    onCancelSizeGuideModal,
}) => {
    return (currentProduct.curated_pack
        ? <CuratedPackDetailsPopup
            currentProduct={currentProduct}
            currentProductColour={currentProductColour}
            currentProductQuantity={currentProductQuantity}
            currentProductUnitPrice={currentProductUnitPrice}
            showProductDetailsModal={showProductDetailsModal}
            showProductSizeGuideModal={showProductSizeGuideModal}
            onChangeCurrentProductQuantity={onChangeCurrentProductQuantity}
            onBlurCurrentProductQuantity={onBlurCurrentProductQuantity}
            onClickProductColour={onClickProductColour}
            onOkProductDetailsModal={onOkProductDetailsModal}
            onCancelProductDetailsModal={onCancelProductDetailsModal}
            onClickAddProductToEnquiry={onClickAddProductToEnquiry}
            onClickViewSizeGuide={onClickViewSizeGuide}
            onOkSizeGuideModal={onOkSizeGuideModal}
            onCancelSizeGuideModal={onCancelSizeGuideModal}
        />
        : <CustomPackDetailsPopup
            currentProduct={currentProduct}
            currentProductColour={currentProductColour}
            currentProductQuantity={currentProductQuantity}
            currentProductUnitPrice={currentProductUnitPrice}
            showProductDetailsModal={showProductDetailsModal}
            showProductSizeGuideModal={showProductSizeGuideModal}
            onChangeCurrentProductQuantity={onChangeCurrentProductQuantity}
            onBlurCurrentProductQuantity={onBlurCurrentProductQuantity}
            onClickProductColour={onClickProductColour}
            onOkProductDetailsModal={onOkProductDetailsModal}
            onCancelProductDetailsModal={onCancelProductDetailsModal}
            onClickAddProductToEnquiry={onClickAddProductToEnquiry}
            onClickViewSizeGuide={onClickViewSizeGuide}
            onOkSizeGuideModal={onOkSizeGuideModal}
            onCancelSizeGuideModal={onCancelSizeGuideModal}
        />
    );
};

export default ProductDetailsPopup;