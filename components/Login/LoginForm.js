import React from "react";
import Link  from "next/link";
import { Modal, Input, Checkbox, Form, Typography, Space, Button } from "antd";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import GoogleSetup from "../../utilities/GoogleSetUp";

const LoginForm = ({
  onLoginSubmit,
  error,
  onClickFbBtn,
  onClickGoogleBtn,
  onClickContinueAsGuestBtn,
  title,
  showLogin,
  onCancel,
  onOk,
  loading,
  onForgotPassword,
  onRegisterNowClick,
}) => {
  return (
    <>
      <Modal
        title={title}
        centered
        className="reg_modal"
        visible={showLogin}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
        width={720}
        style={{fontFamily:"Neutra Text"}}
      >
        <div className="user_login_block">
          <GoogleSetup
            title={"Login"}
            description={""}
          />
          <div className="row">
            <div className="col-sm-12">
              <div className="top_block d-flex">
                <span>Want to shop?</span>{" "}
                <Link onClick={onRegisterNowClick} href="">
                  <UserOutlined /> Register now
                </Link>
              </div>
            </div>
          </div>
          { }
          <Form
            layout={"vertical"}
            onFinish={(values) => onLoginSubmit(values)}
            style={{ backgroundColor: "white" }}
          >
            <Typography.Text style={{ color: "red", fontSize: "20px" }}>
              {error && error}
            </Typography.Text>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input placeholder={"Email or Username"} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password placeholder={"Password"} />
            </Form.Item>
            <div className="form_group" style={{fontFamily:"Neutra Text"}}>
              <Form.Item name="remember_me" valuePropName="checked">
                <Checkbox style={{fontFamily:"Neutra Text !important"}}>Stay signed in</Checkbox>
              </Form.Item>
              <Link href=""
                onClick={(e) => {
                  e.preventDefault();
                  onForgotPassword();
                }}
              >
                Forgot your password?
              </Link>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Form.Item className="mb-0">
                  <Button
                    type="default"
                    htmlType="submit"
                    block
                    className="ct_btn mb-0"
                    style={{ padding: "25px", fontSize: 20,fontFamily:"Neutra Text !important" }}
                    loading={loading}
                  >
                    Login
                  </Button>
                </Form.Item>
              </div>
            </div>
            <div className="divider">
              <span>or</span>
            </div>
            <div className="bottom_block">
              <Link href=""
                className="ct_btn"
                style={{ backgroundColor: "#3C66C4" }}
                onClick={() => onClickFbBtn()}
              >
                <FacebookOutlined /> Log in with Facebook{" "}
              </Link>
              <Link href=""
                className="ct_btn"
                style={{ backgroundColor: "#CF4332" }}
                onClick={() => onClickGoogleBtn()}
              >
                <GooglePlusOutlined /> Sign in with Google{" "}
              </Link>
              <Link href=""
                className="ct_btn"
                onClick={() => onClickContinueAsGuestBtn()}
              >
                Continue as Guest
              </Link>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default LoginForm;
