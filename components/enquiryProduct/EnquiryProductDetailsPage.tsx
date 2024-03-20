"use client";
import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { useRouter,usePathname } from "next/navigation";
import { useDispatch, connect } from "react-redux";
import { notification } from "antd";
// import { store } from "@/index";
import { store } from "@/utilities/configureStore";
import * as TYPES from "@/constants/actionTypes";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import Loader from "@/components/enquiryProduct/Loader";
import ProductDetails from "@/components/enquiryProduct/ProductDetails";
import OverwriteCartPopup from "@/components/enquiryProduct/OverwriteCartPopup";
import { fetchEnquiryProductRequest } from "@/actions/enquiryProductActions";
import {
    getEnquiryProductsType,
    getEnquiryProductsQuantity,
} from "@/selectors/enquiryProductSelector";
import { getCart } from "@/selectors/cartSelector";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

const EnquiryProductDetailsPage = ({
    enquiryProductsType,
    enquiryProductsQuantity,
    cart,
    currentProductData,
    currentProductQuantityData,
    currentProductUnitPriceData,
    currentProductColourData
}:any) => {
    const dispatch = useDispatch();
    const history = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [currentProduct, setCurrentProduct] :any= useState({});
    const [currentProductColour, setCurrentProductColour] = useState({});
    const [currentProductQuantity, setCurrentProductQuantity] = useState();
    const [currentProductUnitPrice, setCurrentProductUnitPrice] = useState();
    const [showError,setShowError]:any = useState();
    const [showProductSizeGuideModal, setShowProductSizeGuideModal] =
        useState(false);
    const [showOverwriteCartPopup, setShowOverwriteCartPopup] = useState(false);
    const [initialRender, setInitialRender]:any = useState(false);

    const getCurrentProductsType = () => {
        // var currentUrl = new URL(window.location.href);
        if (pathname.toLowerCase().startsWith("/curatedpacks")) {
            return "curated-pack";
        } else if (pathname.toLowerCase().startsWith("/custompacks")) {
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

    useEffect(() => {
        trackPageViewInGoogle();
    }, []);

    useEffect(() => {
        var urlSplits = pathname.split("/");
        const currentProductSlug = urlSplits.length > 2 ? urlSplits[2] : "";
        dispatch(
            fetchEnquiryProductRequest(
                {
                    slug: currentProductSlug,
                },
                (response:any) => {
                    const csp = cart.products.find((sp:any) => sp.slug == currentProductSlug);
                    if (csp) {
                        setCurrentProductColour(csp.colour);
                        setCurrentProductQuantity(csp.quantity);
                        setCurrentProductUnitPrice(csp.unitPrice);
                        setCurrentProduct(csp.product);
                    } else {
                        setCurrentProductColour(
                            response.colours.find((c:any) => c.is_lifestyle_image)
                                ? response.colours.find((c:any) => c.is_lifestyle_image)
                                : response.colours[0]
                        );
                        let qty = enquiryProductsType.toLowerCase() == "curated-pack"
                            ? enquiryProductsQuantity.value
                            : response.minimum_order_quantity;
                        setCurrentProductQuantity(qty);
                        setCurrentProductUnitPrice(calculateProductUnitPrice(qty, response.prices));
                        setCurrentProduct(response);
                    }
                },
                (error:any) => {
                    setLoading(false);
                    notification.error({
                        message: "Error occurred while fetching product.",
                        placement: "bottomRight",
                        // bottom: 400,
                    });
                }
            )
        );
        setInitialRender(true);
    }, []);

    const onOkOverwriteCartPopup = () => {
        store.dispatch({
            type: TYPES.RESET_CART_ENQUIRY_PRODUCTS,
            payload: {},
        });
        addProductToEnquiry();
        setShowOverwriteCartPopup(false);
        let selectedCategoryKey = localStorage.getItem(`${getCurrentProductsType()}-selected-category`);
        if (selectedCategoryKey) {
            history.push(`${getCurrentProductsTypeUrl()}/${selectedCategoryKey}`);
        } else {
            history.push(getCurrentProductsTypeUrl());
        }
    };

    const onCancelOverwriteCartPopup = () => {
        setCurrentProduct({});
        setShowOverwriteCartPopup(false);
    };

    const onClickProductColour = (selectedColour:any) => {
        setCurrentProductColour(selectedColour);
    };

    const onChangeCurrentProductQuantity = (e:any) => {
        setCurrentProductQuantity(e.target.value);
        setShowError(Number(e.target.value) < 50);
    };

    const onBlurCurrentProductQuantity = (e:any, minimumOrderQuantity:any) => {
        let qty =
            e.target.value < minimumOrderQuantity
                ? minimumOrderQuantity
                : e.target.value;
        setCurrentProductQuantity(qty);
        setShowError(false);
        setCurrentProductUnitPrice(
            calculateProductUnitPrice(qty, currentProduct.prices)
        );
    };

    const calculateProductUnitPrice = (qty:any, prices:any) => {
        let unitPriceObject = prices
            .filter((p:any) => p.qty <= qty)
            .sort()
            .pop();
        if (!unitPriceObject) {
            unitPriceObject = prices[0];
        }
        return unitPriceObject.pu;
    };

    const onClickAddProductToEnquiry = () => {
        if (
            cart.productsType != enquiryProductsType &&
            cart.products &&
            cart.products.length > 0
        ) {
            setShowOverwriteCartPopup(true);
        } else {
            addProductToEnquiry();
            let selectedCategoryKey = localStorage.getItem(`${getCurrentProductsType()}-selected-category`);
            if (selectedCategoryKey) {
                history.push(`${getCurrentProductsTypeUrl()}/${selectedCategoryKey}`);
            } else {
                history.push(getCurrentProductsTypeUrl());
            }
        }
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
            payload: enquiryProductsType,
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

    const onClickViewSizeGuide = () => {
        setShowProductSizeGuideModal(true);
    };

    const onOkProductSizeGuideModal = () => {
        setShowProductSizeGuideModal(false);
    };

    const onCancelProductSizeGuideModal = () => {
        setShowProductSizeGuideModal(false);
    };

    return(
        <>
            <GoogleSetup
                title={`${currentProduct.name}`}
                description={""}
            />
            <div
                className="bread_crumb shadow-none"
                style={{
                    border: 0,
                    backgroundColor: "#fff",
                    position: "relative",
                    zIndex: 99,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="bread_crumb_nav">
                                <Link href="/">Home</Link>
                                <span className="arrow">
                                    <RightOutlined />
                                </span>
                                <Link href={`${getCurrentProductsTypeUrl()}`}>Merch</Link>
                                <span className="arrow">
                                    <RightOutlined />
                                </span>
                                <Link href={`${getCurrentProductsTypeUrl()}/${currentProduct?.categories?.[0]?.key}`}>{currentProduct?.categories?.[0]?.name}</Link>
                                <span className="arrow">
                                    <RightOutlined />
                                </span>
                                <label className="mb-0">{currentProduct.name}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packs_category_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-xl-12 position-relative">
                            <div className="custom_packs_items_section">
                                <ProductDetails
                                    currentProduct={initialRender && Object.keys(currentProduct)?.length > 0 ? currentProduct : currentProductData}
                                    currentProductColour={initialRender && Object.keys(currentProductColour)?.length > 0 ? currentProductColour : currentProductColourData}
                                    currentProductQuantity={initialRender && currentProductQuantity? currentProductQuantity : currentProductQuantityData}
                                    currentProductUnitPrice={initialRender  && currentProductUnitPrice? currentProductUnitPrice : currentProductUnitPriceData}
                                    showProductSizeGuideModal={showProductSizeGuideModal}
                                    onChangeCurrentProductQuantity={onChangeCurrentProductQuantity}
                                    onBlurCurrentProductQuantity={onBlurCurrentProductQuantity}
                                    onClickProductColour={onClickProductColour}
                                    onClickAddProductToEnquiry={onClickAddProductToEnquiry}
                                    onClickViewSizeGuide={onClickViewSizeGuide}
                                    onOkSizeGuideModal={onOkProductSizeGuideModal}
                                    onCancelSizeGuideModal={onCancelProductSizeGuideModal}
                                    showError = {showError}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        enquiryProductsType: getEnquiryProductsType(state),
        enquiryProductsQuantity: getEnquiryProductsQuantity(state),
        cart: getCart(state),
    };
}

export default connect(mapStateToProps, {})(EnquiryProductDetailsPage);
