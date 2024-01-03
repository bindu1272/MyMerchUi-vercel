"use client";
import React from "react";
import Link from "next/link";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import {
  CloseOutlined,
  LoginOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Login from "./Login/Login";
import Registration from "../components/Registration";

const MobileSidebar = ({
  userId,
  showLogin,
  showSignUp,
  toggleSidebar,
  navigationOptions,
  setShowLogin,
  setShowSignUp,
  onClickTitle,
  redirect,
  handleToggleSidebar,
}) => {
  return (
    <>
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
        redirect={redirect}
      />
      <Registration showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      <ProSidebar
        toggled={toggleSidebar}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarContent>
          <div className="modal_panel">
            <Link
              href=""
              className="close_btn"
              onClick={() => {
                setShowLogin(false);
                setShowSignUp(false);
                handleToggleSidebar(false);
              }}
            >
              <CloseOutlined />
            </Link>
            <div className="top_title_header">
              <h1>Menu</h1>
            </div>
            <Menu iconShape="circle">
              {navigationOptions &&
                navigationOptions.map((option) =>
                  option.children ? (
                    <SubMenu title={option.name} key={option.key}>
                      {option.children.map((child) =>
                        child.children && child.children.length > 0 ? (
                          <SubMenu title={child.name} key={child.key}>
                            {child.children.map((item) => (
                              <MenuItem
                                key={item.key}
                                onClick={() => {
                                  onClickTitle(item.url);
                                  handleToggleSidebar();
                                }}
                              >
                                {item.name}{" "}
                              </MenuItem>
                            ))}
                          </SubMenu>
                        ) : (
                          <MenuItem
                            key={child.key}
                            onClick={() => {
                              onClickTitle(child.url);
                              handleToggleSidebar();
                            }}
                          >
                            {child.name}{" "}
                          </MenuItem>
                        )
                      )}
                    </SubMenu>
                  ) : (
                    <MenuItem
                      key={option.id}
                      onClick={() => {
                        onClickTitle(option.url);
                        handleToggleSidebar();
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  )
                )}
            </Menu>
            <div className="modal_top_block">
              {!userId && (
                <>
                  <Link
                    href=""
                    onClick={() => {
                      setShowSignUp(false);
                      setShowLogin(true);
                      handleToggleSidebar(false);
                    }}
                  >
                    <LoginOutlined /> Log In
                  </Link>
                  <Link
                    href=""
                    onClick={() => {
                      setShowLogin(false);
                      setShowSignUp(true);
                      handleToggleSidebar(false);
                    }}
                    className="sign_up"
                  >
                    <UserOutlined /> Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

export default MobileSidebar;
