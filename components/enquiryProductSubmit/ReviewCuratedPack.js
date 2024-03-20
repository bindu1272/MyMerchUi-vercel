import React from "react";
import { Button } from "antd";
import { getDetailImageSpec } from "../enquiryProduct/EnquiryProductHelper";
import Image from "next/image";

const ReviewCuratedPack = ({
    selectedProduct,
    productCost,
    onClickEditProduct,
    onClickDeleteProduct,
}) => {
    return (
        <>
            <div className="cart_item">
                <div className="cart_img">
                    <Image alt="" src={selectedProduct.colour.images[getDetailImageSpec()].product_image_url} width={50} height={50}/>
                </div>
                <div className="cp_info">
                    <h1 className="merch_title text-left">
                        {selectedProduct.product.name}
                    </h1>
                    <p className="merch_description text-left">
                        {selectedProduct.product.product_description}
                    </p>
                    <div className="cart_item_info">
                        <div className="cart_link_info">
                            <a
                                onClick={() => onClickEditProduct(selectedProduct)}
                            >
                                Edit
                            </a>
                            <Button
                                className="delete_link"
                                onClick={() => onClickDeleteProduct(selectedProduct)}
                            >
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </Button>
                        </div>
                        <div className="item_price_details">
                            <h6>${productCost.toFixed(2)}</h6>
                        </div>
                    </div>
                </div>
            </div>
            {selectedProduct.product.child_products &&
                selectedProduct.product.child_products.length > 0 &&
                <>
                    <div className="cp_sub_items">
                        <h1 className="sub_items_title">Pack items included:</h1>
                        {selectedProduct.product.child_products.map((cp,index) => {
                            return (
                                <div className="cart_item" key={index}>
                                    <div className="cart_img">
                                        <Image alt="" src={cp.colours && cp.colours[0] && cp.colours[0].images[getDetailImageSpec()].product_image_url} />
                                    </div>
                                    <div className="cp_info">
                                        <div className="cart_item_info">
                                            <div>
                                                <h4>{cp.name}</h4>
                                                {cp.colours &&
                                                    <>
                                                        <h4>
                                                            Colour:{" "}
                                                            <span
                                                                style={{ backgroundColor: cp.colours[0] && cp.colours[0].colour_hex }}
                                                            ></span>
                                                            {cp.colours[0] && cp.colours[0].colour}
                                                        </h4>
                                                        <p>{cp.product_description}</p>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            }

        </>
    );
};

export default ReviewCuratedPack;
