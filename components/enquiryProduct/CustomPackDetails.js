import React from "react";
import { Modal, Form, Input,Alert } from "antd";
import SizeGuide from "./SizeGuide";
import { getDetailImageSpec } from "./EnquiryProductHelper";
import Image from "next/image";

const CustomPackDetails = ({
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
  return (
    <>
      <div className="product_details_page">
        <div className="ant-modal-content">
          <div className="ant-modal-header">
            <h1 className="ant-modal-title ">{currentProduct.name}</h1>
          </div>
          <div className="ant-modal-body">
            <div className="packs_details_block">
              <div className="pack_slider">
                <div className="img_block">
                  <Image alt="" width={388} height={498}
                    src={
                      currentProductColour?.images?.[getDetailImageSpec()]
                        .product_image_url
                    }
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
                  <p className="size_space">
                    {currentProduct?.sizes?.toString().split(",").join(" ")}
                  </p>
                  <p>
                    {currentProduct.show_size_guide && (
                      <a
                        onClick={() =>
                          onClickViewSizeGuide(currentProduct?.size_chart_data)
                        }
                      >
                        View Size Guide
                      </a>
                    )}
                  </p>
                </div>
                <div className="item my-0">
                  <label>Branding Type:</label>
                  <p>{currentProduct.branding_type}</p>
                </div>
                <div className="item">
                  <label>Print Area:</label>
                  <p>{currentProduct.print_area}</p>
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
                      currentProduct.colours.map((c,index) => {
                        return (
                          <span key={index}
                            className={
                              c.colour_hex == currentProductColour?.colour_hex
                                ? "selected"
                                : ""
                            }
                            style={{ backgroundColor: c.colour_hex }}
                            onClick={() => onClickProductColour(c)}
                          ></span>
                        );
                      })}
                  </div>
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
                  $
                  {parseFloat(
                    (currentProductUnitPrice ? currentProductUnitPrice : 0.0) *
                    currentProductQuantity
                  ).toFixed(2)}
                </span>
                <div className="per_pack_price">
                  <span>
                    ${currentProductUnitPrice ? currentProductUnitPrice : 0.0}{" "}
                    each x{" "}
                  </span>
                  <Form>
                    <Input
                      type="number"
                      min={currentProduct.minimum_order_quantity}
                      placeholder={currentProduct.minimum_order_quantity}
                      value={currentProductQuantity}
                      onChange={(e) => {
                        onChangeCurrentProductQuantity(e);
                      }}
                      onBlur={(e) => {
                        onBlurCurrentProductQuantity(
                          e,
                          currentProduct.minimum_order_quantity
                        );
                      }}
                    />
                  </Form>
                  <span>Units</span>
                </div>
           
              </div>
             
              <div className="col-5 col-md-4 text-end text-sm-end mt-4 m-sm-0">
                <a
                  className="btn_blue m-0"
                  onClick={() => onClickAddProductToEnquiry()}
                >
                  Add to enquiry
                </a>
              </div>
              {showError && (
        <Alert style={{width:"250px",marginLeft:"44px",padding:"6px",border:"none",fontWeight:"600"}}
          description="Quantity should be >= 50."
          type="error"
          showIcon
        />
      )}
              <div className="col-7 col-md-12  mt-4 m-sm-0">
                <p className="info_message">
                  ⓘ Minimum order quantity is{" "}
                  {currentProduct.minimum_order_quantity} units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default CustomPackDetails;
