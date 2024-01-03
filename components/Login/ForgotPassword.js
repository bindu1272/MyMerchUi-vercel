import React from "react";
import { Modal, Input, Divider, Form, Typography, Button } from "antd";
import GoogleSetup from "../../utilities/GoogleSetUp";

const ForgotPassword = ({
  loading,
  showForgotPassword,
  showForgotPasswordRequestStatus,
  error,
  onSubmit,
  onOk,
  onCancel,
}) => {
  return (
    <>
      <GoogleSetup
        title={"Forgot Password"}
        description={""}
      />
      <Modal
        title="Forgot Password"
        centered
        className="reg_modal"
        visible={true}
        width={700}
        onOk={onOk}
        onCancel={onCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={
          showForgotPasswordRequestStatus
            ? { style: { display: "block" } }
            : { style: { display: "none" } }
        }
      >
        <Form
          layout={"vertical"}
          onFinish={(values) => onSubmit(values)}
          style={{ backgroundColor: "white" }}
        >
          {showForgotPassword && (
            <>
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
              <Divider />
              <div className="row">
                <div className="col-sm-12">
                  <Form.Item className="mb-0">
                    <Button
                      type="default"
                      htmlType="submit"
                      block
                      className="ct_btn mb-0"
                      loading={loading}
                      style={{ backgroundColor: "#0072ce", color: "#ffffff" }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </>
          )}
          {showForgotPasswordRequestStatus && (
            <Form.Item>
              <h3>
                Password has been reset. Please check your email for more
                details.
              </h3>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default ForgotPassword;
