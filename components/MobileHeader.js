"use client";
import React, {useEffect, useState} from "react";
import  Link  from "next/link";
import {
  PhoneOutlined,
  InfoOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  MailOutlined,
} from "@ant-design/icons";
import S3Image from "../common/S3Image";
import MobileSidebar from "./MobileSidebar";
import MobileSearchModal from "./MobileSearchModal";
import * as TYPES from "@/constants/actionTypes";
// import "../common/customJquery";

const MobileHeader = ({
  cart,
  onCloseMobileSearch,
  onShowMobileSearch,
  toggleSidebar,
  handleToggleSidebar,
  showMobileSearch,
  searchText,
  setSearchText,
  handleSearch,
  redirect,
  showLogin,
  setShowLogin,
  navigationOptions,
  setShowSignUp,
  showSignUp,
  onClickTitle,
  userId,
}) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  // Storage.prototype.getObject = function (key) {
  //   return JSON.parse(this.getItem(key));
  // };
  return (
    isClient ?
    <>
      {showMobileSearch &&
        <MobileSearchModal
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          navigationOptions={navigationOptions}
          onClose={onCloseMobileSearch}
        />
      }
      <div className="top-header fixed-header">
        <div className="container-fluid" style={{margin: "unset !important", width: "100%"}}>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <Link className="logo_sm" href="/">
                  <S3Image src={"/mymerch-logo-white-mobile.svg"} width={115} height={43}/>
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <a href="/GetAQuote" className="mail-link">
                  <MailOutlined />
                </a>
                <a href="callto:1800959308" className="call-link">
                  <PhoneOutlined />
                </a>
                <div
                  className="mb_search"
                  onClick={() => {
                    setSearchText("");
                    store.dispatch({
                      type: TYPES.SET_ENQUIRY_PRODUCTS_SEARCH_STRING,
                      payload: ""
                    });
                    setShowLogin(false);
                    setShowSignUp(false);
                    onShowMobileSearch();
                  }}
                >
                  <SearchOutlined />
                </div>
                <div className="avatar-block">
                  <Link href="/SubmitEnquiry" className="cart-items">
                    <span className="d-flex align-items-center">
                      <ShoppingCartOutlined />
                      <span className="cart-count">
                        {cart &&
                          cart.products &&
                          cart.products.length}
                      </span>
                    </span>
                  </Link>
                  <div
                    type="text"
                    className="mb_menu"
                    onClick={() => {
                      setShowLogin(false);
                      setShowSignUp(false);
                      handleToggleSidebar(true)
                    }}
                  >
                    <MenuOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar
        userId={userId}
        toggleSidebar={toggleSidebar}
        handleToggleSidebar={handleToggleSidebar}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        navigationOptions={navigationOptions}
        setShowSignUp={setShowSignUp}
        showSignUp={showSignUp}
        onClickTitle={onClickTitle}
        redirect={redirect}
      />
    </>
    : null
  );
};

export default MobileHeader;
