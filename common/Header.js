"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { connect, useDispatch } from "react-redux";
import { logoutRequest } from "@/actions/authActions";
import {
  getUserId,
  getUserName,
  getUserRoles,
} from "@/selectors/authSelector";
import { getQueryParams } from "@/utilities/helpers";
import MobileHeader from "@/components/MobileHeader";
import WebHeader from "@/components/WebHeader";
import MessageBox from "./MessageBox";
import { HEADER_NAV_ITEMS } from "@/constants/appConstants";
import { getCart } from "@/selectors/cartSelector";
import { useSearchParams } from "next/navigation";
import { getEnquiryProductsSearchString } from "@/selectors/enquiryProductSelector";

const Header = ({
  cart,
  userId,
  userName,
  userRoles,
  searchTextCache
}) => {
  const params = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchText, setSearchText] = useState(searchTextCache);
  const [showBulkOrder, setShowBulkOrder] = useState(false);
  const [redirect, setRedirect] = useState();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigationOptions = [...HEADER_NAV_ITEMS];
  useEffect(() => {
    if (!userId) {
      const queryParams = getQueryParams(window.location.href);
      if (queryParams.showLogin && queryParams.showLogin == "true") {
        setShowLogin(true);
      }
      if (queryParams.redirect) {
        setRedirect(queryParams.redirect);
      }
    }
  }, []);

  function onShowMobileSearch() {
    setShowMobileSearch(true);
  }

  function onCloseMobileSearch() {
    setShowMobileSearch(false);
  }

  const handleToggleSidebar = (value) => {
    setToggleSidebar(value);
  };

  const onLogout = () => {
    dispatch(logoutRequest());
    router.push(`/`);
    // window.location.reload();
  };

  const onClickTitle = (itemUrl) => {
    router.push(itemUrl);
  };

  const handleSearch = () => {
    const searchUrl = searchText
      ? `/AllMerch?searchString=${searchText}`
      : `/AllMerch`;
    router.push(searchUrl);
  };

  const onClickCart = () => {
    router.push("/SubmitEnquiry");
  }

  return (
    <>
      <MessageBox />
      <div className="mobile_header">
        <MobileHeader
          cart={cart}
          redirect={redirect}
          toggleSidebar={toggleSidebar}
          onCloseMobileSearch={onCloseMobileSearch}
          onShowMobileSearch={onShowMobileSearch}
          handleToggleSidebar={handleToggleSidebar}
          showMobileSearch={showMobileSearch}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          navigationOptions={navigationOptions}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          userId={userId}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          onClickTitle={onClickTitle}
          onClickCart={onClickCart}
        />
      </div>
      <section className="main-header">
        <WebHeader
          cart={cart}
          redirect={redirect}
          onLogout={onLogout}
          userId={userId}
          userName={userName}
          userRoles={userRoles}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          navigationOptions={navigationOptions}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          showBulkOrder={showBulkOrder}
          setShowBulkOrder={setShowBulkOrder}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          onClickCart={onClickCart}
        />
      </section>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cart: getCart(state),
    userId: getUserId(state),
    userName: getUserName(state),
    userRoles: getUserRoles(state),
    searchTextCache: getEnquiryProductsSearchString(state)
  };
}
export default connect(mapStateToProps, {})(Header);
// export default Header;
