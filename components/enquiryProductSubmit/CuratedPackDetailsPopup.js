import React, { useRef } from "react";
import { Modal, Form, Input } from "antd";
import ImageGallery from "react-image-gallery";
import SizeGuide from "../enquiryProduct/SizeGuide";
import { getDetailImageSpec } from "../enquiryProduct/EnquiryProductHelper";

const CuratedPackDetailsPopup = ({
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
    const galleryImages =
        currentProduct.colours &&
        currentProduct.colours.length > 0 &&
        currentProduct.colours.map((c,index) => (
            {
                original: c.images[getDetailImageSpec()].product_image_url,
                thumbnail: c.images[getDetailImageSpec()].product_image_url,
            }
        ));
    // currentProduct.child_products &&
    //     currentProduct.child_products.length > 0 &&
    //     currentProduct.child_products.forEach((cp) => {
    //         if (cp.images[getDetailImageSpec()].product_image_url) {
    //             galleryImages.push({
    //                 original: cp.images[getDetailImageSpec()].product_image_url,
    //                 thumbnail: cp.images[getDetailImageSpec()].product_image_url,
    //             });
    //         }
    //     });

    const refImageGallery = useRef(null)

    const onClickColour = (c, index) => {
        refImageGallery.current.slideToIndex(index);
        onClickProductColour(c);
    }

    return (
        <>
            <Modal
                title={currentProduct.name}
                className="custom_pack_modal_info"
                centered
                footer={false}
                visible={showProductDetailsModal}
                onOk={onOkProductDetailsModal}
                onCancel={onCancelProductDetailsModal}
            >
                <div className="packs_details_block">
                    <div className="pack_slider">
                        <div className="img_block">
                            <ImageGallery
                                items={galleryImages}
                                ref={refImageGallery}
                                showPlayButton={'false'}
                                showBullets={true}
                                showThumbnails="false"
                            />
                        </div>
                    </div>
                    <div className="pack_details">
                        <div className="item">
                            <label>Description :</label>
                            <p>{currentProduct.product_description}</p>
                        </div>
                        <div className="item">
                            <label>Sizes: </label>
                            <p className="size_space">{currentProduct.sizes.toString().split(",").join(" ")}</p>
                            <p>
                                {currentProduct.show_size_guide &&
                                    <a onClick={() => onClickViewSizeGuide(currentProduct.size_chart_data)}>
                                        View Size Guide
                                    </a>
                                }
                            </p>
                        </div>
                        <div className="item my-0">
                            <label>Branding Type:</label>
                            <p>{currentProduct.branding_type}</p>
                        </div>
                        <div className="item">
                            <label>Print Area:</label>
                            {currentProduct.child_products.map((cp,index) => {
                                return <p key={index}>{cp.name}</p>
                            })}
                        </div>
                        <div className="item">
                            <label>Select Colour:</label>
                            <p>
                                <label>{currentProductColour.colour}</label>
                            </p>
                        </div>
                        <div className="modal_colour_panel">
                            <div className="color_list">
                                {currentProduct.colours &&
                                    currentProduct.colours.length > 0 &&
                                    currentProduct.colours.map((c, index) => {
                                        return (
                                            <span key={index}
                                                className={
                                                    c.colour_hex == currentProductColour.colour_hex
                                                        ? "selected"
                                                        : ""
                                                }
                                                style={{ backgroundColor: c.colour_hex }}
                                                onClick={() =>
                                                    onClickColour(c, index)
                                                }
                                            ></span>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border_line" />
                <div className="footer_info">
                    <h5>Cost (excluding GST):</h5>
                    <div className="row">
                        <div className="col-sm-8 d-flex align-items-center">
                            <span className="price">
                                ${parseFloat((currentProductUnitPrice ? currentProductUnitPrice : 0.00)
                                    * currentProductQuantity).toFixed(2)}
                            </span>
                            <div className="per_pack_price">
                                <span>${currentProductUnitPrice ? currentProductUnitPrice : 0.00} each x </span>
                                <Form>
                                    <Input
                                        type="number"
                                        min={currentProduct.minimum_order_quantity}
                                        placeholder={currentProduct.minimum_order_quantity}
                                        value={currentProductQuantity}
                                        onChange={(e) => {
                                            onChangeCurrentProductQuantity(e)
                                        }}
                                        onBlur={(e) => {
                                            onBlurCurrentProductQuantity(e)
                                        }}
                                    />
                                </Form>
                                <span>Units</span>
                            </div>
                        </div>
                        <div className="col-5 col-md-4 text-left text-sm-end mt-4 m-sm-0">
                            <a
                                className="btn_blue m-0"
                                onClick={() =>
                                    onClickAddProductToEnquiry()
                                }
                            >
                                Add to enquiry
                            </a>
                        </div>
                        <div className="col-7 col-md-12  mt-4 m-sm-0">
                            <p className="info_message">
                                ⓘ Minimum order quantity is{" "}
                                {currentProduct.minimum_order_quantity} units.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
            {showProductSizeGuideModal && (
                <SizeGuide
                    sizeGuide={currentProduct.size_chart_data}
                    visible={showProductSizeGuideModal}
                    onOk={onOkSizeGuideModal}
                    onCancel={onCancelSizeGuideModal}
                />
            )}
        </>
    );
};

export default CuratedPackDetailsPopup;
