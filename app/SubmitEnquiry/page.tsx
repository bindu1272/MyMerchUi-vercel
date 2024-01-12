"use client";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useDispatch, connect } from "react-redux";
import { Button, Collapse, notification } from "antd";
// import { store } from "../index";
import { store } from "@/utilities/configureStore";
import * as TYPES from "@/constants/actionTypes";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import Loader from "@/components/enquiryProduct/Loader";
import ProductDetailsPopup from "@/components/enquiryProductSubmit/ProductDetailsPopup";
import ReviewProducts from "@/components/enquiryProductSubmit/ReviewProducts";
import DeleteProductPopup from "@/components/enquiryProductSubmit/DeleteProductPopup";
import AddYourDetails from "@/components/enquiryProductSubmit/AddYourDetails";
import BrandAssets from "@/components/enquiryProductSubmit/BrandAssets";
import SubmitEnquirySuccessPopup from "@/components/enquiryProductSubmit/SubmitEnquirySuccessPopup";
import SubmitEnquiryErrorPopup from "@/components/enquiryProductSubmit/SubmitEnquiryErrorPopup";
import MessageBox from "@/common/MessageBox";
import {
  submitEnquiryProductsRequest,
  uploadEnquiryProductBrandAssetRequest,
} from "@/actions/enquiryProductActions";
import {
  getEnquiryProductsQuantity,
} from "@/selectors/enquiryProductSelector"
import {
  getCart,
  getContactDetails,
  getBrandAssets,
} from "@/selectors/cartSelector";

const { Panel } = Collapse;

const EnquiryProductsSubmitPage = ({
  cart,
  contactDetails,
  brandAssets,
  enquiryProductsQuantity,
}:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [showProductsQuantityPopup, setShowProductsQuantityPopup] = useState(false);
  const [productsQuantity, setProductsQuantity] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom" ?
      "custom" : enquiryProductsQuantity.value);
  const [productsCustomQuantity, setProductsCustomQuantity] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom" ?
      enquiryProductsQuantity.value : 50);
  const [
    disableProductsCustomQuantityInput,
    setDisableProductsCustomQuantityInput,
  ] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom"
      ? false
      : true);
  const [showProductQuantityPopup, setShowProductQuantityPopup] = useState(false);
  const [productQuantity, setProductQuantity] = useState();
  const [productCustomQuantity, setProductCustomQuantity] = useState();
  const [disableProductCustomQuantityInput, setDisableProductCustomQuantityInput] = useState(true);
  const [updateQuantityProductId, setUpdateQuantityProductId] = useState();
  const [showDeleteProductPopup, setShowDeleteProductPopup] = useState(false);
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [currentProduct, setCurrentProduct]:any = useState({});
  const [currentProductColour, setCurrentProductColour] = useState({});
  const [currentProductQuantity, setCurrentProductQuantity] = useState();
  const [currentProductUnitPrice, setCurrentProductUnitPrice] = useState();
  const [showProductSizeGuideModal, setShowProductSizeGuideModal] = useState(false);
  const [showRateCardPopup, setShowRateCardPopup] = useState(false);
  const [brandAssetUploadInProgress, setBrandAssetUploadLoading] = useState(false);
  const [disableSubmitEnquiry, setDisableSubmitEnquiry] = useState(true);
  const [submitEnquiryInProgress, setSubmitEnquiryInProgress] = useState(false);
  const [showSubmitEnquirySuccessPopup, setShowSubmitEnquirySuccessPopup] = useState(false);
  const [submitEnquiryErrorText, setSubmitEnquiryErrorText] = useState("");
  const [showSubmitEnquiryErrorPopup, setShowSubmitEnquiryErrorPopup] = useState(false);

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  const calculateProductUnitPrice = (qty:any, prices:any) => {
    let unitPriceObject = prices.filter((p:any) => p.qty <= qty).sort().pop();
    if (!unitPriceObject) {
      unitPriceObject = prices[0];
    }
    return unitPriceObject.pu;
  };

  const toggleProductsQuantityPopup = () => {
    setShowProductsQuantityPopup(!showProductsQuantityPopup);
  };

  const closeProductsQuantityPopup = () => {
    setShowProductsQuantityPopup(false);
  };

  const onChangeProductsQuantity = (e:any) => {
    let qty = e.target.value;
    setProductsQuantity(qty);
    setProductsCustomQuantity(50);
    if (qty == "custom") {
      qty = 50;
      setDisableProductsCustomQuantityInput(false);
      store.dispatch({
        type: TYPES.SET_ENQUIRY_PRODUCTS_QUANTITY,
        payload: { type: "custom", value: qty },
      })
    } else {
      setDisableProductsCustomQuantityInput(true);
      store.dispatch({
        type: TYPES.SET_ENQUIRY_PRODUCTS_QUANTITY,
        payload: { type: "", value: qty },
      });
    }
    if (cart.products && cart.products.length > 0) {
      cart.products.forEach((cp:any) => {
        //if root level quantity is less than the minimum order quantity
        //use the minimum order quantity as quantity for corresponding product
        if (qty < cp.product.minimum_order_quantity) {
          let unitPrice = calculateProductUnitPrice(cp.product.minimum_order_quantity, cp.product.prices)
          store.dispatch({
            type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
            payload: { "id": cp.id, "quantity": cp.product.minimum_order_quantity, "unitPrice": unitPrice },
          });
        } else {
          let unitPrice = calculateProductUnitPrice(qty, cp.product.prices)
          store.dispatch({
            type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
            payload: { "id": cp.id, "quantity": qty, "unitPrice": unitPrice },
          });
        }
      });
    }
  };

  const onChangeProductsCustomQuantity = (e:any) => {
    setProductsCustomQuantity(e.target.value);
  };

  const onBlurProductsCustomQuantity = (e:any) => {
    let qty = e.target.value < 50
      ? 50
      : e.target.value;
    store.dispatch({
      type: TYPES.SET_ENQUIRY_PRODUCTS_QUANTITY,
      payload: { type: "custom", value: qty },
    });
    setProductsCustomQuantity(qty);
    if (cart.products && cart.products.length > 0) {
      cart.products.forEach((cp:any) => {
        //if root level quantity is less than the minimum order quantity
        //use the minimum order quantity as quantity for corresponding product
        if (qty < cp.product.minimum_order_quantity) {
          let unitPrice = calculateProductUnitPrice(cp.product.minimum_order_quantity, cp.product.prices)
          store.dispatch({
            type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
            payload: { "id": cp.id, "quantity": cp.product.minimum_order_quantity, "unitPrice": unitPrice },
          });
        } else {
          let unitPrice = calculateProductUnitPrice(qty, cp.product.prices)
          store.dispatch({
            type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
            payload: { "id": cp.id, "quantity": qty, "unitPrice": unitPrice },
          });
        }
      });
    }
  };

  const toggleProductQuantityPopup = (id:any) => {
    setUpdateQuantityProductId(id);
    setShowProductQuantityPopup(!showProductQuantityPopup);
  };

  const closeProductQuantityPopup = () => {
    setShowProductQuantityPopup(false);
  };

  const onChangeProductQuantity = (e:any, minimumQuantity:any) => {
    let qty = e.target.value;
    setProductQuantity(qty);
    setProductCustomQuantity(minimumQuantity);
    if (qty == "custom") {
      qty = minimumQuantity;
      setDisableProductCustomQuantityInput(false);
    } else {
      setDisableProductCustomQuantityInput(true);
    }
    let updatedQtyProduct = cart.products.find((p:any) => p.id == updateQuantityProductId);
    let unitPrice = calculateProductUnitPrice(qty, updatedQtyProduct.product.prices)
    store.dispatch({
      type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
      payload: { "id": updateQuantityProductId, "quantity": qty, "unitPrice": unitPrice },
    });
  };

  const onChangeProductCustomQuantity = (e:any) => {
    setProductCustomQuantity(e.target.value);
  };

  const onBlurProductCustomQuantity = (e:any, minimumQuantity:any) => {
    let qty = e.target.value < minimumQuantity ? minimumQuantity : e.target.value;
    let updatedQtyProduct = cart.products.find((p:any) => p.id == updateQuantityProductId);
    let unitPrice = calculateProductUnitPrice(qty, updatedQtyProduct.product.prices)
    setProductCustomQuantity(qty);
    store.dispatch({
      type: TYPES.SET_CART_ENQUIRY_PRODUCT_QUANTITY,
      payload: { "id": updateQuantityProductId, "quantity": qty, "unitPrice": unitPrice },
    });
  };

  const onClickEditProduct = (csp:any) => {
    setUpdateQuantityProductId(csp.id);
    setCurrentProductColour(csp.colour);
    setCurrentProductQuantity(csp.quantity);
    setCurrentProductUnitPrice(csp.unitPrice);
    setCurrentProduct(csp.product);
    setShowProductDetailsModal(true);
  };

  const onOkProductDetailsModal = () => {
    setShowProductDetailsModal(false);
  };

  const onCancelProductDetailsModal = () => {
    setShowProductDetailsModal(false);
  };

  const onClickProductColour = (selectedColour:any) => {
    setCurrentProductColour(selectedColour);
  };

  const onChangeCurrentProductQuantity = (e:any) => {
    setCurrentProductQuantity(e.target.value);
  };

  const onBlurCurrentProductQuantity = (e:any, minimumOrderQuantity:any) => {
    let qty = e.target.value < minimumOrderQuantity ? minimumOrderQuantity : e.target.value;
    let updatedQtySelectedProduct = cart.products.find((p:any) => p.id == updateQuantityProductId);
    let unitPrice = calculateProductUnitPrice(qty, updatedQtySelectedProduct.product.prices)
    setCurrentProductQuantity(qty);
    setCurrentProductUnitPrice(unitPrice);
  };

  const onClickAddProductToEnquiry = () => {
    const actionPayload = {
      id: currentProduct.id,
      colour: currentProductColour,
      quantity: currentProductQuantity,
      unitPrice: currentProductUnitPrice,
      product: currentProduct,
    };
    if (cart.products.find((sp:any) => sp.id == currentProduct.id)) {
      store.dispatch({
        type: TYPES.UPDATE_ENQUIRY_PRODUCT,
        payload: actionPayload,
      });
    } else {
      store.dispatch({
        type: TYPES.ADD_ENQUIRY_PRODUCT,
        payload: actionPayload,
      });
    }
    setShowProductDetailsModal(false);
  };

  const onClickViewSizeGuide = () => {
    setShowProductSizeGuideModal(true);
  };

  const onOkSizeGuideModal = () => {
    setShowProductSizeGuideModal(false);
  };

  const onCancelSizeGuideModal = () => {
    setShowProductSizeGuideModal(false);
  };

  const onClickDeleteProduct = (csp:any) => {
    setCurrentProductColour(csp.colour);
    setCurrentProductQuantity(csp.quantity);
    setCurrentProductUnitPrice(csp.unitPrice);
    setCurrentProduct(csp.product);
    setShowDeleteProductPopup(true);
  };

  const onOkDeleteProductPopup = () => {
    setShowDeleteProductPopup(false);
  };

  const onCancelDeleteProductPopup = () => {
    setShowDeleteProductPopup(false);
  };

  const onDeleteProduct = (id:any) => {
    store.dispatch({
      type: TYPES.REMOVE_ENQUIRY_PRODUCT,
      payload: { "id": id },
    });
    setShowDeleteProductPopup(false);
  }

  const onClickAddMoreItems = () => {
    history.push(getPreviousUrl(cart.productsType));
  };

  const onChangeActiveTab = (activeTabKey:any) => {
    setActiveTabKey(activeTabKey);
    window.scrollTo(0, 0);
  };

  const onClickReviewProductsContinue = () => {
    if (cart.products.length > 0) {
      setActiveTabKey("2");
      window.scrollTo(0, 0);
    }
  };

  const onClickRateCardPopup = () => {
    setShowRateCardPopup(true);
  };
  const onOkRateCardPopup = () => {
    setShowRateCardPopup(false);
  };

  const onCancelRateCardPopup = () => {
    setShowRateCardPopup(false);
  };

  const onClickAddYourDetailsContinue = (values:any) => {
    store.dispatch({
      type: TYPES.SET_ENQUIRY_PRODUCTS_CONTACT_DETAILS,
      payload: values,
    })
    setActiveTabKey("3");
    window.scrollTo(0, 0);
  };

  const onUploadBrandAssetFile = (value:any) => {
    setBrandAssetUploadLoading(true);
    const data = new FormData();
    let brandAssetsUuid = brandAssets.uuid;
    if (!brandAssetsUuid) {
      brandAssetsUuid = Math.random();
    }
    if(value?.file?.size >  5 * 1024 * 1024){
      return "";
    }else{
    data.append("uuid", brandAssetsUuid);
    data.append("file", value.file);
    dispatch(
      uploadEnquiryProductBrandAssetRequest(
        data,
        (response:any) => {
          store.dispatch({
            type: TYPES.ADD_ENQUIRY_PRODUCTS_BRAND_ASSETS,
            payload: {
              uuid: brandAssetsUuid,
              file: {
                name: response.file_name,
                url: response.file_url,
                uid: Math.random(),
                status: "done"
              }
            },
          })
          setBrandAssetUploadLoading(false);
        },
        (error:any) => {
          setBrandAssetUploadLoading(false);
          notification.error({
            message: "Error occurred while uploading brand asset.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
      }
  };

  const onDeleteBrandAssetFile = (file:any) => {
    store.dispatch({
      type: TYPES.REMOVE_ENQUIRY_PRODUCTS_BRAND_ASSETS,
      payload: file,
    })
  }

  const onClickBrandAssetsContinue = () => {
    setActiveTabKey("4");
    setDisableSubmitEnquiry(false);
    window.scrollTo(0, 0);
  };

  const onClickSubmitEnquiry = () => {
    if (!cart.productsType
      || !cart.products
      || cart.products.length <= 0) {
      setActiveTabKey("1");
      setSubmitEnquiryErrorText("Please select atleast one product for enquiry!");
      setShowSubmitEnquiryErrorPopup(true);
    } else if (!contactDetails.fullName
      || !contactDetails.emailAddress
      || !contactDetails.companyName
      || !contactDetails.phoneNumber) {
      setActiveTabKey("2");
      setSubmitEnquiryErrorText("Please input mandatory details in \"Add your details\" section!");
      setShowSubmitEnquiryErrorPopup(true);
    } else {
      setSubmitEnquiryInProgress(true);
      const data :any= {};
      data["EnquiryProducts"] = {
        "ProductsType": cart.productsType,
        "Products": cart.products.map((p:any) => {
          return {
            "Id": p.id,
            "Colour": p.colour.colour,
            "Quantity": p.quantity,
            "Name": p.name,
          }
        })
      };
      data["ContactDetails"] = {
        "ClientType": contactDetails.clientType,
        "FullName": contactDetails.fullName,
        "EmailAddress": contactDetails.emailAddress,
        "CompanyName": contactDetails.companyName,
        "PhoneNumber": contactDetails.phoneNumber,
        "RequiredDate": contactDetails.requiredDate,
        "Warehousing": contactDetails.warehousing,
        "Delivery": contactDetails.delivery,
      };
      data["BrandAssets"] = brandAssets.filesList.map((ba:any) => {
        return {
          "Name": ba.name,
          "Url": ba.url,
        }
      });
      dispatch(
        submitEnquiryProductsRequest(
          data,
          (response:any) => {
            setSubmitEnquiryInProgress(false);
            setShowSubmitEnquirySuccessPopup(true);
          },
          (error:any) => {
            setSubmitEnquiryInProgress(false);
            setSubmitEnquiryErrorText("Submission Error!");
            setShowSubmitEnquiryErrorPopup(true);
          }
        )
      );
    }
  };

  const onCloseSubmitEnquirySuccessPopup = () => {
    let productsType = cart.productsType;
    store.dispatch({
      type: TYPES.RESET_ENQUIRY_PRODUCTS,
      payload: { productsType: productsType },
    });
    store.dispatch({
      type: TYPES.RESET_CART_ENQUIRY_PRODUCTS,
      payload: {},
    });
    setShowSubmitEnquirySuccessPopup(false);
    history.push(getPreviousUrl(productsType));
  };

  const onCloseSubmitEnquiryErrorPopup = () => {
    setShowSubmitEnquiryErrorPopup(false);
  };

  const getPreviousUrl = (productsType:any) => {
    let previousUrl = "AllMerch";
    if (productsType.toLowerCase() == "curated-pack") {
      previousUrl = "CuratedPacks";
    } else if (productsType.toLowerCase() == "custom-pack") {
      previousUrl = "CustomPacks";
    }
    return previousUrl;
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <GoogleSetup
        title={"Products - Submit Enquiry"}
        description={""}
      />
      <section className="header_space cart_steps">
        <MessageBox className="enquiry_products_page" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <label className={activeTabKey == "1" ? "active" : ""}>Pack</label>
                <span className="line"></span>
                <label className={activeTabKey == "2" ? "active" : ""}>Details</label>
                <span className="line"></span>
                <label className={activeTabKey == "3" ? "active" : ""}>Brand</label>
                <span className="line"></span>
                <label className={activeTabKey == "4" ? "active" : ""}>Submit</label>
              </div>
              <Button className="btn_white dt_btn" onClick={onClickAddMoreItems}>Add more items</Button>
              <Button className="btn_white m_btn" onClick={onClickAddMoreItems}>+ Add items</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="custom_pack_review_block">
        <Collapse
          accordion={true}
          defaultActiveKey={["1"]}
          activeKey={activeTabKey}
          onChange={onChangeActiveTab}
        >
          <Panel header="1. Review pack items" key="1">
            <ReviewProducts
              cart={cart}
              enquiryProductsQuantity={enquiryProductsQuantity}
              showProductsQuantityPopup={showProductsQuantityPopup}
              productsQuantity={productsQuantity}
              productsCustomQuantity={productsCustomQuantity}
              disableProductsCustomQuantityInput={disableProductsCustomQuantityInput}
              showProductQuantityPopup={showProductQuantityPopup}
              productQuantity={productQuantity}
              productCustomQuantity={productCustomQuantity}
              disableProductCustomQuantityInput={disableProductCustomQuantityInput}
              updateQuantityProductId={updateQuantityProductId}
              toggleProductsQuantityPopup={toggleProductsQuantityPopup}
              closeProductsQuantityPopup={closeProductsQuantityPopup}
              onChangeProductsQuantity={onChangeProductsQuantity}
              onChangeProductsCustomQuantity={onChangeProductsCustomQuantity}
              onBlurProductsCustomQuantity={onBlurProductsCustomQuantity}
              toggleProductQuantityPopup={toggleProductQuantityPopup}
              closeProductQuantityPopup={closeProductQuantityPopup}
              onChangeProductQuantity={onChangeProductQuantity}
              onChangeProductCustomQuantity={onChangeProductCustomQuantity}
              onBlurProductCustomQuantity={onBlurProductCustomQuantity}
              onClickEditProduct={onClickEditProduct}
              onClickDeleteProduct={onClickDeleteProduct}
              onClickContinue={onClickReviewProductsContinue}
            />
          </Panel>
          <Panel header="2. Add your details" key="2">
            <AddYourDetails
              contactDetails={contactDetails}
              showRateCardPopup={showRateCardPopup}
              onClickRateCardPopup={onClickRateCardPopup}
              onClickContinue={onClickAddYourDetailsContinue}
              onOkRateCardPopup={onOkRateCardPopup}
              onCancelRateCardPopup={onCancelRateCardPopup}
            />
          </Panel>
          <Panel header="3. Upload your brand assets" key="3">
            <BrandAssets
              brandAssetsFilesList={brandAssets.filesList}
              brandAssetUploadInProgress={brandAssetUploadInProgress}
              onUploadBrandAssetFile={onUploadBrandAssetFile}
              onDeleteBrandAssetFile={onDeleteBrandAssetFile}
              onClickContinue={onClickBrandAssetsContinue}
            />
          </Panel>
        </Collapse>
        <div className="container bottom_submit_section">
          <div className="row">
            <div className="col-sm-12">
              <div className="price_message m-0">
                <p className="m-0">
                  ⓘ Click the ‘submit enquiry’ button and a MyMerch team member
                  will finalise your quote.
                </p>
                <Button
                  className="btn_blue m-0 submit_btn"
                  disabled={disableSubmitEnquiry}
                  loading={submitEnquiryInProgress}
                  onClick={onClickSubmitEnquiry}
                >
                  Submit enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showProductDetailsModal && (
        <ProductDetailsPopup
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
      )}
      {showDeleteProductPopup &&
        <DeleteProductPopup
          currentProduct={currentProduct}
          currentProductColour={currentProductColour}
          currentProductQuantity={currentProductQuantity}
          currentProductUnitPrice={currentProductUnitPrice}
          cart={cart}
          showDeleteProductPopup={showDeleteProductPopup}
          onDeleteProduct={onDeleteProduct}
          onOkDeleteProductPopup={onOkDeleteProductPopup}
          onCancelDeleteProductPopup={onCancelDeleteProductPopup}
        />
      }
      {showSubmitEnquirySuccessPopup &&
        <SubmitEnquirySuccessPopup
          customerName={contactDetails.fullName}
          showSubmitEnquirySuccessPopup={showSubmitEnquirySuccessPopup}
          onCloseSubmitEnquirySuccessPopup={onCloseSubmitEnquirySuccessPopup}
        />
      }
      {showSubmitEnquiryErrorPopup &&
        <SubmitEnquiryErrorPopup
          submitEnquiryErrorText={submitEnquiryErrorText}
          showSubmitEnquiryErrorPopup={showSubmitEnquiryErrorPopup}
          onCloseSubmitEnquiryErrorPopup={onCloseSubmitEnquiryErrorPopup}
        />
      }
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    cart: getCart(state),
    contactDetails: getContactDetails(state),
    brandAssets: getBrandAssets(state),
    enquiryProductsQuantity: getEnquiryProductsQuantity(state),
  };
}

export default connect(mapStateToProps, {})(EnquiryProductsSubmitPage);