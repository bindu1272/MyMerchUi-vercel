import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import GoogleSetup from "../utilities/GoogleSetUp";
const ResetPassword = ({ onSubmit }) => {
  return (
    <>
      <div className="profile_settings_block">
        <GoogleSetup
          title={"Reset Password"}
          description={""}
        />
        <div className="top_title_bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h1>Reset Password</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="order_history_block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="select_group">
                  <Form
                    layout="vertical"
                    onFinish={(values) => onSubmit(values)}
                  >
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Password is required",
                        },
                      ]}
                    >
                      <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                      name="confirm_password"
                      label="Confirm Password"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Confirm Password is required",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "Passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item>
                      <Button className="mt-4 btn" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
