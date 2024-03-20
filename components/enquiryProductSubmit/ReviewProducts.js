import React from "react";
import { Button } from "antd";
import {
  RightOutlined,
  DownOutlined,
  UpOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Quantity from "../enquiryProduct/Quantity";
import ReviewCustomPack from "./ReviewCustomPack";
import ReviewCuratedPack from "./ReviewCuratedPack";

const ReviewProducts = ({
  cart,
  enquiryProductsQuantity,
  showProductsQuantityPopup,
  productsQuantity,
  productsCustomQuantity,
  disableProductsCustomQuantityInput,
  showProductQuantityPopup,
  productQuantity,
  productCustomQuantity,
  disableProductCustomQuantityInput,
  updateQuantityProductId,
  toggleProductsQuantityPopup,
  closeProductsQuantityPopup,
  onChangeProductsQuantity,
  onChangeProductsCustomQuantity,
  onBlurProductsCustomQuantity,
  toggleProductQuantityPopup,
  closeProductQuantityPopup,
  onChangeProductQuantity,
  onChangeProductCustomQuantity,
  onBlurProductCustomQuantity,
  onClickEditProduct,
  onClickDeleteProduct,
  onClickContinue,
}) => {
  const productsType = cart.productsType.toLowerCase();
  let subTotalCost = 0.0;
  const selectedPackagingProducts = [];
  const selectedMerchProducts = [];

  cart.products &&
    cart.products.length > 0 &&
    cart.products.forEach((cp,index) => {
      if (cp.product.categories.map((c,index) => c.key).includes("packaging")) {
        selectedPackagingProducts.push(cp);
      } else {
        selectedMerchProducts.push(cp);
      }
    });

  return (
    <>
      <div className="cart_enquiry_items_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <p className="ed_title">Enquiry details</p>
                </div>
                {(productsType == "custom-pack" ||
                  productsType == "curated-pack") && (
                    <div className="col-sm-12">
                      <h1 className="no_of_packs">
                        {enquiryProductsQuantity.value} packs{" "}
                        {showProductsQuantityPopup ? (
                          <UpOutlined onClick={toggleProductsQuantityPopup} />
                        ) : (
                          <DownOutlined onClick={toggleProductsQuantityPopup} />
                        )}
                        {showProductsQuantityPopup && (
                          <div className="packs_filter_option">
                            <CloseOutlined
                              onClick={closeProductsQuantityPopup}
                              className="close_icon"
                            />
                            <h1 className="sub_title">
                              {cart.productsType.toLowerCase() ==
                                "custom-pack"
                                ? "How many custom packs do you want?"
                                : "How many curated packs do you want?"}
                            </h1>
                            <div className="search_packs_section">
                              <Quantity
                                quantity={productsQuantity}
                                minimumQuantity={50}
                                customQuantity={productsCustomQuantity}
                                disableCustomQuantityInput={
                                  disableProductsCustomQuantityInput
                                }
                                onChangeQuantity={onChangeProductsQuantity}
                                onChangeCustomQuantity={
                                  onChangeProductsCustomQuantity
                                }
                                onBlurCustomQuantity={
                                  onBlurProductsCustomQuantity
                                }
                              />
                            </div>
                            <p className="info_message">
                              ⓘ Minimum order quantity is 50 units.
                            </p>
                          </div>
                        )}
                      </h1>
                    </div>
                  )}
                <div className="col-sm-12">
                  {selectedMerchProducts.length > 0 && (
                    <>
                      <p className="category_title">Merch: </p>
                      <div className="curated_packs_items">
                        {selectedMerchProducts.map((smp,index) => {
                          var productCost = smp.unitPrice * smp.quantity
                          subTotalCost = subTotalCost + productCost
                          if (productsType == "curated-pack") {
                            return (
                              <ReviewCuratedPack key={index}
                                selectedProduct={smp}
                                productCost={productCost}
                                onClickEditProduct={onClickEditProduct}
                                onClickDeleteProduct={onClickDeleteProduct}
                              />
                            );
                          } else {
                            return (
                              <ReviewCustomPack key={index}
                                selectedProduct={smp}
                                productCost={productCost}
                                productsType={productsType}
                                showProductQuantityPopup={
                                  showProductQuantityPopup
                                }
                                productQuantity={productQuantity}
                                productCustomQuantity={productCustomQuantity}
                                disableProductCustomQuantityInput={
                                  disableProductCustomQuantityInput
                                }
                                updateQuantityProductId={
                                  updateQuantityProductId
                                }
                                toggleProductQuantityPopup={
                                  toggleProductQuantityPopup
                                }
                                closeProductQuantityPopup={
                                  closeProductQuantityPopup
                                }
                                onChangeProductQuantity={
                                  onChangeProductQuantity
                                }
                                onChangeProductCustomQuantity={
                                  onChangeProductCustomQuantity
                                }
                                onBlurProductCustomQuantity={
                                  onBlurProductCustomQuantity
                                }
                                onClickEditProduct={onClickEditProduct}
                                onClickDeleteProduct={onClickDeleteProduct}
                              />
                            );
                          }
                        })}
                      </div>
                    </>
                  )}
                  {selectedPackagingProducts.length > 0 && (
                    <>
                      <p className="category_title">Packaging:</p>
                      <div className="curated_packs_items">
                        {selectedPackagingProducts.map((spp,index) => {
                          var productCost = spp.unitPrice * spp.quantity;
                          subTotalCost = subTotalCost + productCost;
                          if (productsType == "curated-pack") {
                            return (
                              <ReviewCuratedPack key={index}
                                selectedProduct={spp}
                                productCost={productCost}
                                onClickEditProduct={onClickEditProduct}
                                onClickDeleteProduct={onClickDeleteProduct}
                              />
                            );
                          } else {
                            return (
                              <ReviewCustomPack key={index}
                                selectedProduct={spp}
                                productCost={productCost}
                                productsType={cart.productsType}
                                showProductQuantityPopup={
                                  showProductQuantityPopup
                                }
                                productQuantity={productQuantity}
                                productCustomQuantity={productCustomQuantity}
                                disableProductCustomQuantityInput={
                                  disableProductCustomQuantityInput
                                }
                                updateQuantityProductId={
                                  updateQuantityProductId
                                }
                                toggleProductQuantityPopup={
                                  toggleProductQuantityPopup
                                }
                                closeProductQuantityPopup={
                                  closeProductQuantityPopup
                                }
                                onChangeProductQuantity={
                                  onChangeProductQuantity
                                }
                                onChangeProductCustomQuantity={
                                  onChangeProductCustomQuantity
                                }
                                onBlurProductCustomQuantity={
                                  onBlurProductCustomQuantity
                                }
                                onClickDeleteProduct={onClickDeleteProduct}
                              />
                            );
                          }
                        })}
                      </div>
                    </>
                  )}
                </div>
                <div className="col-sm-12">
                  <div className="sub_total_info">
                    <div className="row st_mb">
                      <div className="col-sm-2 p-0"></div>
                      <div className="col col-sm-6 p-xl-0">
                        <h5>Sub-total Cost</h5>
                      </div>
                      <div className="col col-sm-4 text-right">
                        <h6 className="sub_total">${subTotalCost.toFixed(2)}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 p-0"></div>
                      <div className="col col-sm-6 p-xl-0">
                        <h5>GST</h5>
                      </div>
                      <div className="col col-sm-4 text-right">
                        <h6>${(subTotalCost * 0.1).toFixed(2)}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total_price_info_section">
                <div className="total_price_details">
                  <div className="tc_block">
                    <label>Total Cost:</label>
                    <h2></h2>
                  </div>
                  <h1>${(subTotalCost * 1.1).toFixed(2)}</h1>
                </div>
              </div>
              <div className="price_message">
                <p>
                  ⓘ Prices are indicative at this stage. The above estimate does
                  not include distribution or warehousing costs, this will be
                  provided in the quote.
                </p>
                <Button
                  className="btn_blue m-0"
                  onClick={() => onClickContinue()}
                  disabled={cart.products.length == 0}
                >
                  Continue
                  <RightOutlined style={{ marginLeft: 10 }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewProducts;
