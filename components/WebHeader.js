"use client";
import Link from "next/link";
import { Input, Button, Menu, Dropdown } from "antd";
import {
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Login from "./Login/Login";
import Registration from "./Registration";
import BulkOrder from "./BulkOrder"
import WebHeaderNavigation from "../components/WebHeaderNavigation";
import S3Image from "../common/S3Image";
import React, { useState, useEffect } from "react";
// import dynamic from 'next/dynamic';

// const DynamicLink = dynamic(() => import('next/link'), { ssr: false });


const menu = (onLogout) => (
  <Menu className="avatar_menu">
    <Menu.Item>
      <Link href="/accountsettings"
        style={{ textDecoration: "none",fontFamily:"Neutra Text" }}
      >
        Account Settings
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Button type="text" onClick={onLogout}
        style={{ textDecoration: "none",fontFamily:"Neutra Text" }}
      >
        LogOut
      </Button>
    </Menu.Item>
  </Menu>
);

const WebHeader = ({
  cart,
  redirect,
  userId,
  userRoles,
  navigationOptions,
  onLogout,
  userName,
  showLogin,
  setShowLogin,
  showSignUp,
  setShowSignUp,
  showBulkOrder,
  setShowBulkOrder,
  searchText,
  setSearchText,
  handleSearch,
  onClickCart,
}) => {
  // Storage.prototype.getObject = function (key) {
  //   return JSON.parse(this.getItem(key));
  // };
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient ?
      <>
        <BulkOrder
          showBulkOrder={showBulkOrder}
          setShowBulkOrder={setShowBulkOrder}
        />
        <Login
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
          redirect={redirect}
        />
        <Registration
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 d-flex align-items-center">
                <Link href="callto:1800959308" className="call-link">
                  <PhoneOutlined className="mr-3" /><strong> 1800 959 308</strong>
                </Link>
                <span style={{ color: "white", marginLeft: 15, marginRight: 15 }}></span>
                <Link className="call-link" style={{ color: "white" }} href="/GetAQuote">
                  Get a Quote
                </Link>
                {/* <span style={{ color: "white", marginLeft: 15, marginRight: 15 }}>|</span>
                <Link href="" className="call-link" style={{ color: "white" }} onClick={() => setShowBulkOrder(true)}>
                  Bulk Enquiry
                </Link> */}
              </div>
              <div className="col-sm-7">
                <div className="d-flex align-items-center justify-content-end">
                  <Input
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={e => {
                      setSearchText(e.target.value)
                    }}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handleSearch()
                      }
                    }}
                  />
                  <div className="avatar-block">
                    {!userId ? (
                      <>
                        <a onClick={() => setShowLogin(true)}>Login</a>
                        <a onClick={() => setShowSignUp(true)}>Sign Up</a>
                      </>
                    ) : (
                      <>
                        {userRoles && userRoles.includes("Admin") ? <a href="/admin" className="call-link">Admin</a> : ""}
                        <div className="avatar_drop_down">
                          <Dropdown
                            overlay={menu(onLogout)}
                            trigger={["click"]}
                            overlayStyle={{ zIndex: 1000000 }}
                            overlayClassName="avatar_select_menu"
                          >
                            <Link href=""
                              className="ant-dropdown-link"
                              onClick={(e) => e.preventDefault()}
                              style={{ textDecoration: "none" }}
                            >
                              <UserOutlined className="avatar" />
                              {userName} <DownOutlined />
                            </Link>
                          </Dropdown>
                        </div>
                      </>
                    )}
                    <a onClick={onClickCart} className="cart-items">
                      <span className="d-flex align-items-center">
                        <ShoppingCartOutlined />{" "}
                        <span className="cart-count">
                          {cart &&
                            cart.products &&
                            cart.products.length}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 brand">
                  <Link href="/">
                    <S3Image src={"/mymerch-logo-black-desktop.svg"} width={150} height={52} />
                  </Link>
                </div>
                <div className="col-sm-5 position-static">
                  <WebHeaderNavigation
                    navigationOptions={navigationOptions}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
      : null
  );
};

export default WebHeader;
