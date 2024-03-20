"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, connect } from "react-redux";
import { notification, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { store } from "@/utilities/configureStore";
import * as TYPES from "@/constants/actionTypes";
import { getQueryParams } from "@/utilities/helpers";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import Loader from "@/components/enquiryProduct/Loader";
import Header from "@/components/enquiryProduct/Header";
import StepsModal from "@/components/enquiryProduct/StepsModal";
import Products from "@/components/enquiryProduct/Products";
import ProductCategories from "@/components/enquiryProduct/ProductCategories";
import OverwriteCartPopup from "@/components/enquiryProduct/OverwriteCartPopup";
import { fetchEnquiryProductsRequest } from "@/actions/enquiryProductActions";
import {
  getEnquiryProducts,
  getEnquiryProductsType,
  getEnquiryProductsQuantity,
  getEnquiryProductsSearchString,
} from "@/selectors/enquiryProductSelector";
import {
  getCart,
} from "@/selectors/cartSelector";
import leftArrow from "@/left-arrow-web.svg";
import rightArrow from "@/right-arrow-web.svg";
import { ENQUIRY_PRODUCT_TYPES_SEO_DATA } from "@/constants/appConstants";
import {
  fetchHeaderBannersRequest,
  fetchFooterBannersRequest,
} from "@/actions/strapiActions";
import Image from "next/image";

const EnquiryProductsPage = ({
  enquiryProducts,
  enquiryProductsType,
  enquiryProductsQuantity,
  enquiryProductsSearchString,
  cart,
}:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const pathname = usePathname() 
  const [loading, setLoading] = useState(false);
  const [showStepsModal, setShowStepsModal] = useState(false);
  const [productsQuantity, setProductsQuantity] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom"
      ? "custom"
      : enquiryProductsQuantity.value
  );
  const [productsCustomQuantity, setProductsCustomQuantity] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom"
      ? enquiryProductsQuantity.value
      : 50
  );
  const [
    disableProductsCustomQuantityInput,
    setDisableProductsCustomQuantityInput,
  ] = useState(
    enquiryProductsQuantity &&
      enquiryProductsQuantity.type == "custom"
      ? false
      : true);
  const [productCategories, setProductCategories] = useState([]);
  const [showProductCategoriesMobile, setShowProductCategoriesMobile] = useState(false);
  const [currentProductCategoryKey, setCurrentProductCategoryKey] = useState("");
  const [previousProductCategory, setPreviousProductCategory]:any = useState({});
  const [nextProductCategory, setNextProductCategory]:any = useState({});
  const [currentProduct, setCurrentProduct]:any = useState({});
  const [currentProductColour, setCurrentProductColour] = useState({});
  const [currentProductQuantity, setCurrentProductQuantity] = useState();
  const [currentProductUnitPrice, setCurrentProductUnitPrice] = useState();
  const [showOverwriteCartPopup, setShowOverwriteCartPopup] = useState(false);

  const getCurrentProductsType = () => {
    var currentUrl = new URL(window.location.href);
    if (currentUrl.pathname.toLowerCase().startsWith("/curatedpacks")) {
      return "curated-pack";
    } else if (currentUrl.pathname.toLowerCase().startsWith("/custompacks")) {
      return "custom-pack";
    } else {
      return "all-merch";
    }
  };

  const getCurrentProductsTypeUrl = () => {
    if (enquiryProductsType == "curated-pack") {
      return "/CuratedPacks";
    } else if (enquiryProductsType == "custom-pack") {
      return "/CustomPacks";
    } else {
      return "/AllMerch";
    }
  };

  const [stepsModalDisplayed, setStepsModelDisplayed]:any = useState(
    localStorage.getItem(`${getCurrentProductsType()}-steps-display`)
  );

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  useEffect(() => {
    dispatch(
      fetchHeaderBannersRequest(
        { _sort: "displayOrder:ASC", },
        (response:any) => { },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching header banners.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [])

  useEffect(() => {
    dispatch(
      fetchFooterBannersRequest(
        (response:any) => { },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching footer banners.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [])

  useEffect(() => {
    setLoading(true);
    let currentProductsType = getCurrentProductsType();
    let currentSearchString = "";
    const queryParams:any = getQueryParams(window.location.href);
    if (queryParams.searchString) {
      currentSearchString = queryParams.searchString;
    }
    if (
      enquiryProducts == null ||
      enquiryProducts.length == 0 ||
      enquiryProductsType != currentProductsType ||
      enquiryProductsSearchString != currentSearchString
    ) {
      store.dispatch({
        type: TYPES.SET_ENQUIRY_PRODUCTS_TYPE,
        payload: currentProductsType
      });
      store.dispatch({
        type: TYPES.SET_ENQUIRY_PRODUCTS_SEARCH_STRING,
        payload: currentSearchString
      });
      dispatch(
        fetchEnquiryProductsRequest(
          {
            type: currentProductsType,
            searchString: currentSearchString,
          },
          (response:any) => {
            const resCategories:any = Object.keys(response).map(c => {
              return ({
                key: c,
                name: response[c][0].categories[0].name,
              })
            });
            setProductCategories(resCategories);
            var urlSplits = pathname.split("/");
            let currentCategoryKey = urlSplits.length > 2 ? urlSplits[2] : "";
            if (!currentCategoryKey) {
              currentCategoryKey = resCategories[0].key;
            }
            setCurrentProductCategoryKey(currentCategoryKey);
            const currentProductCategoryIndex = resCategories.findIndex((c:any) => c.key.toLowerCase() == currentCategoryKey.toLowerCase())
            setPreviousProductCategory(
              currentProductCategoryIndex == 0
                ? resCategories[resCategories.length - 1]
                : resCategories[currentProductCategoryIndex - 1]
            );
            setNextProductCategory(
              currentProductCategoryIndex == resCategories.length - 1
                ? resCategories[0]
                : resCategories[currentProductCategoryIndex + 1]
            );
            setLoading(false);
          },
          (error:any) => {
            setLoading(false);
            notification.error({
              message: "Error occurred while fetching products.",
              placement: "bottomRight",
              // bottom: 400,
            });
          }
        )
      );
    } else {
      const resCategories:any = Object.keys(enquiryProducts).map(c => {
        return ({
          key: c,
          name: enquiryProducts[c][0].categories[0].name,
        })
      });
      setProductCategories(resCategories);
      var urlSplits = pathname.split("/");
      let currentCategoryKey = urlSplits.length > 2 ? urlSplits[2] : "";
      if (!currentCategoryKey) {
        currentCategoryKey = resCategories[0].key;
      }
      setCurrentProductCategoryKey(currentCategoryKey);
      const currentProductCategoryIndex = resCategories.findIndex((c:any) => c.key.toLowerCase() == currentCategoryKey.toLowerCase())
      setPreviousProductCategory(
        currentProductCategoryIndex == 0
          ? resCategories[resCategories.length - 1]
          : resCategories[currentProductCategoryIndex - 1]
      );
      setNextProductCategory(
        currentProductCategoryIndex == resCategories.length - 1
          ? resCategories[0]
          : resCategories[currentProductCategoryIndex + 1]
      );
      setLoading(false);
    }
  }, [window.location.href]);

  const onClickHeaderTitle = () => {
    setShowStepsModal(true);
  }

  const onCloseStepsModal = () => {
    // localStorage.setItem(`${getCurrentProductsType()}-steps-display`, true);
    localStorage.setItem(`${getCurrentProductsType()}-steps-display`,"true");
    setStepsModelDisplayed(true);
    setShowStepsModal(false);
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

  const onClickProductCategory = (key:any) => {
    setCurrentProductCategoryKey(key);
    history.push(`${getCurrentProductsTypeUrl()}/${key}`);
  };

  const onClickProductCategoriesMobile = () => {
    setShowProductCategoriesMobile(!showProductCategoriesMobile);
  };

  const onClickProductCategoryMobile = (key:any) => {
    setCurrentProductCategoryKey(key);
    setShowProductCategoriesMobile(false);
    history.push(`${getCurrentProductsTypeUrl()}/${key}`);
  };

  const onOkOverwriteCartPopup = () => {
    store.dispatch({
      type: TYPES.RESET_CART_ENQUIRY_PRODUCTS,
      payload: {},
    });
    addProductToEnquiry();
    setShowOverwriteCartPopup(false);
  };

  const onCancelOverwriteCartPopup = () => {
    setCurrentProduct({});
    setShowOverwriteCartPopup(false);
  };

  const onClickProduct = (product:any) => {
    let colour = product.colours.find((c:any) => c.is_lifestyle_image)
      ? product.colours.find((c:any) => c.is_lifestyle_image)
      : product.colours[0];
    let quantity = enquiryProductsType == "all-merch"
      ? product.minimum_order_quantity
      : enquiryProductsQuantity.value > product.minimum_order_quantity
        ? enquiryProductsQuantity.value
        : product.minimum_order_quantity;
    let unitPrice = calculateProductUnitPrice(quantity, product.prices);
    if (cart.productsType != enquiryProductsType &&
      cart.products &&
      cart.products.length > 0) {
      setCurrentProductColour(colour);
      setCurrentProductQuantity(quantity);
      setCurrentProductUnitPrice(unitPrice);
      setCurrentProduct(product);
      setShowOverwriteCartPopup(true);
    } else {
      if (cart.products.find((cp:any) => cp.id == product.id)) {
        store.dispatch({
          type: TYPES.REMOVE_ENQUIRY_PRODUCT,
          payload: { "id": product.id },
        });
      } else {
        store.dispatch({
          type: TYPES.SET_CART_ENQUIRY_PRODUCTS_TYPE,
          payload: enquiryProductsType
        });
        store.dispatch({
          type: TYPES.ADD_ENQUIRY_PRODUCT,
          payload: {
            "id": product.id,
            "colour": colour,
            "quantity": quantity,
            "unitPrice": unitPrice,
            "product": product,
          },
        });
      }
    }
  };

  const onClickProductSeeMore = (slug:any) => {
    history.push(`/EnquiryProduct/${slug}`);
  };

  const calculateProductUnitPrice = (qty:any, prices:any) => {
    let unitPriceObject = prices.filter((p:any) => p.qty <= qty).sort().pop();
    if (!unitPriceObject) {
      unitPriceObject = prices[0];
    }
    return unitPriceObject.pu;
  };

  const addProductToEnquiry = () => {
    const actionPayload = {
      id: currentProduct.id,
      colour: currentProductColour,
      quantity: currentProductQuantity,
      unitPrice: currentProductUnitPrice,
      product: currentProduct,
    };
    store.dispatch({
      type: TYPES.SET_CART_ENQUIRY_PRODUCTS_TYPE,
      payload: enquiryProductsType
    });
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
  };

  const onClickViewCart = () => {
    if (cart.products.length > 0) {
      history.push("/SubmitEnquiry");
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <GoogleSetup
        title={`${ENQUIRY_PRODUCT_TYPES_SEO_DATA[getCurrentProductsType()].title}`}
        description={`${ENQUIRY_PRODUCT_TYPES_SEO_DATA[getCurrentProductsType()].description}`}
      />
      <div className="custom_pack_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Header
                productsType={enquiryProductsType}
                productsQuantity={productsQuantity}
                productsCustomQuantity={productsCustomQuantity}
                onClickHeaderTitle={onClickHeaderTitle}
                disableProductsCustomQuantityInput={disableProductsCustomQuantityInput}
                onChangeProductsQuantity={onChangeProductsQuantity}
                onChangeProductsCustomQuantity={onChangeProductsCustomQuantity}
                onBlurProductsCustomQuantity={onBlurProductsCustomQuantity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="packs_category_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xl-12 position-relative">
              <ProductCategories
                categories={productCategories}
                currentProductCategoryKey={currentProductCategoryKey}
                cart={cart}
                showProductCategoriesMobile={showProductCategoriesMobile}
                onClickProductCategory={onClickProductCategory}
                onClickProductCategoriesMobile={onClickProductCategoriesMobile}
                onClickProductCategoryMobile={onClickProductCategoryMobile}
                onClickViewCart={onClickViewCart}
              />
              <div className="custom_packs_items_section">
                <Products
                  enquiryProducts={enquiryProducts}
                  currentProductCategoryKey={currentProductCategoryKey}
                  cart={cart}
                  onClickProduct={onClickProduct}
                  onClickProductSeeMore={onClickProductSeeMore}
                />
                {productCategories &&
                  productCategories.length > 0 &&
                  getCurrentProductsType() !== "curated-pack" &&
                  <div className="product_prev_next_block">
                    <a href={`${getCurrentProductsTypeUrl()}/${previousProductCategory.key}`}>
                      <Image src={leftArrow} alt="" width={20} height={20}/>
                      {`Back to ${previousProductCategory.name}`}
                    </a>
                    <a href={`${getCurrentProductsTypeUrl()}/${nextProductCategory.key}`}>
                      {`Continue to ${nextProductCategory.name}`}
                      <Image src={rightArrow} alt="" width={20} height={20}/>
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>
          <Button
            className="view_cart_btn d_btn"
            onClick={onClickViewCart}
            disabled={!(cart.products &&
              cart.products.length > 0)
            }
          >
            <ShoppingCartOutlined />
            <span className="cart-count">
              {cart &&
                cart.products &&
                cart.products.length}
            </span>
            View Cart
          </Button>
        </div>
      </div>
      {(showStepsModal || !stepsModalDisplayed) && (
        <StepsModal
          showStepsModal={showStepsModal || !stepsModalDisplayed}
          productsType={enquiryProductsType}
          onOkStepsModal={onCloseStepsModal}
          onCancelStepsModal={onCloseStepsModal}
        />
      )}
      {showOverwriteCartPopup && (
        <OverwriteCartPopup
          showOverwriteCartPopup={showOverwriteCartPopup}
          onOkOverwriteCartPopup={onOkOverwriteCartPopup}
          onCancelOverwriteCartPopup={onCancelOverwriteCartPopup}
        />
      )}
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    enquiryProducts: getEnquiryProducts(state),
    enquiryProductsType: getEnquiryProductsType(state),
    enquiryProductsQuantity: getEnquiryProductsQuantity(state),
    enquiryProductsSearchString: getEnquiryProductsSearchString(state),
    cart: getCart(state),
  };
}

export default connect(mapStateToProps, {})(EnquiryProductsPage);