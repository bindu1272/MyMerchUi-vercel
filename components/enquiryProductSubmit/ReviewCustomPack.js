import React from "react";
import { Button } from "antd";
import {
    DownOutlined,
    UpOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import Quantity from "../enquiryProduct/Quantity";
import { getDetailImageSpec } from "../enquiryProduct/EnquiryProductHelper";

const ReviewCustomPack = ({
    selectedProduct,
    productCost,
    productsType,
    showProductQuantityPopup,
    productQuantity,
    productCustomQuantity,
    disableProductCustomQuantityInput,
    updateQuantityProductId,
    toggleProductQuantityPopup,
    closeProductQuantityPopup,
    onChangeProductQuantity,
    onChangeProductCustomQuantity,
    onBlurProductCustomQuantity,
    onClickEditProduct,
    onClickDeleteProduct,
}) => {
    return (
        <>
            <div className="cart_item">
                <div className="cart_img">
                    <img src={selectedProduct.colour.images[getDetailImageSpec()].product_image_url} />
                </div>
                <div className="cart_item_info">
                    <div>
                        <h4>{selectedProduct.product.name}</h4>
                        <h4>
                            Colour:{" "}
                            <span className="bg_color"
                                style={{ backgroundColor: selectedProduct.colour.colour_hex }}
                            ></span>
                            {selectedProduct.colour.colour}
                        </h4>
                        <p>{selectedProduct.product.branding_type}</p>
                        <h4>
                            ${selectedProduct.unitPrice.toFixed(2)} each
                            x {selectedProduct.quantity} units
                            {productsType.toLowerCase() == "all-merch" &&
                                ((showProductQuantityPopup && selectedProduct.id == updateQuantityProductId)
                                    ? <UpOutlined onClick={() => toggleProductQuantityPopup(selectedProduct.id)} />
                                    : <DownOutlined onClick={() => toggleProductQuantityPopup(selectedProduct.id)} />)
                            }
                        </h4>
                    </div>
                    <div className="item_price_details">
                        <h6>${productCost.toFixed(2)}</h6>
                    </div>
                    <div className="cart_link_info">
                        <a
                            onClick={() => onClickEditProduct(selectedProduct)}
                        >
                            Edit
                        </a>
                        {showProductQuantityPopup &&
                            selectedProduct.id == updateQuantityProductId && (
                                <div className="packs_filter_option">
                                    <CloseOutlined
                                        onClick={closeProductQuantityPopup}
                                        className="close_icon"
                                    />
                                    <h1 className="sub_title">
                                        How many custom packs do you want?
                                    </h1>
                                    <div className="search_packs_section">
                                        <Quantity
                                            quantity={productQuantity}
                                            minimumQuantity={selectedProduct.product.minimum_order_quantity}
                                            customQuantity={productCustomQuantity}
                                            disableCustomQuantityInput={disableProductCustomQuantityInput}
                                            onChangeQuantity={onChangeProductQuantity}
                                            onChangeCustomQuantity={onChangeProductCustomQuantity}
                                            onBlurCustomQuantity={onBlurProductCustomQuantity}
                                        />
                                    </div>
                                    <p className="info_message">
                                        <span>ⓘ </span>Minimum order quantity is {selectedProduct.product.minimum_order_quantity} units.
                                    </p>
                                </div>
                            )}
                        <Button
                            className="delete_link"
                            onClick={() => onClickDeleteProduct(selectedProduct)}
                        >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCustomPack;
