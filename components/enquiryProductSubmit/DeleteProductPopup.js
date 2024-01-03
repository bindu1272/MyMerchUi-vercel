import React from "react";
import { Modal, Button } from "antd";
import { getDetailImageSpec } from "../enquiryProduct/EnquiryProductHelper";

const DeleteProductPopup = ({
    currentProduct,
    currentProductColour,
    currentProductQuantity,
    currentProductUnitPrice,
    cart,
    showDeleteProductPopup,
    onDeleteProduct,
    onOkDeleteProductPopup,
    onCancelDeleteProductPopup,
}) => {
    const cartProduct = cart.products.find(sp => sp.id == currentProduct.id);
    return (
        <Modal
            className="confirm_delete_item"
            centered
            footer={false}
            visible={showDeleteProductPopup}
            onOk={onOkDeleteProductPopup}
            onCancel={onCancelDeleteProductPopup}
        >
            <div>
                <div className="header_title_section">
                    <div class="divider"></div>
                </div>
                <h1 className="title">
                    {" "}
                    Are you sure you want to delete the below item from your enquiry?{" "}
                </h1>
                <div className="btn_group">
                    <Button
                        className="delete_btn btn_blue m-0"
                        onClick={() => onDeleteProduct(currentProduct.id)}
                    >
                        {" "}
                        <i class="fa fa-trash me-1" aria-hidden="true"></i>
                        Delete item
                    </Button>
                    <Button
                        className="back_btn"
                        onClick={() => onCancelDeleteProductPopup()}
                    >
                        Cancel and go back {">"}
                    </Button>
                </div>
                <div className="item_info_block">
                    <div className="item_img">
                        <img src={cartProduct.colour.images[getDetailImageSpec()].product_image_url} />
                    </div>
                    <div className="item_details">
                        <div>
                            <h4>{currentProduct.name}</h4>
                            <h4>
                                Colour:
                                <span style={{ backgroundColor: "#747576" }}></span>
                                {cartProduct.colour.colour}
                            </h4>
                            <p>{currentProduct.branding}</p>
                            <h4>${currentProductUnitPrice} each x {currentProductQuantity} units</h4>
                        </div>
                        <div className="item_total_price_details">
                            <h1>Sub-total Cost: </h1>
                            <h1>
                                ${parseFloat(currentProductUnitPrice * currentProductQuantity).toFixed(2)}
                                <br />
                                <label>Ex GST</label>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteProductPopup;