import React from "react";
import { Form, Input, Typography, Button, Space, Select, Modal } from "antd";
import GoogleSetup from "../utilities/GoogleSetUp";
const { Option } = Select;

const RegistrationForm = ({
  onSubmit,
  errors,
  showSignUp,
  onOk,
  onCancel,
  title,
  loading,
}) => {
  return (
    <Modal
      title={title}
      centered
      className="reg_modal"
      visible={showSignUp}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <div className="user_login_block">
        <GoogleSetup
          title={"Registration"}
          description={""}
        />
        <div className="row">
          <div className="col-sm-12">
            <div className="top_block">
              <h3>CREATE AN ACCOUNT</h3>
              <h5>Enter your details to create an account with the portal</h5>
              {errors && errors.email && errors.email.length > 0 && (
                <Typography.Text style={{ color: "red", fontSize: "20px" }}>
                  {errors.email[0]}
                </Typography.Text>
              )}
            </div>
          </div>
        </div>
        <Form 
          layout={"vertical"}
          style={{ backgroundColor: "white",fontFamily:"Neutra Text" }}
          onFinish={(values) => onSubmit(values)}
        >
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your firstname",
              },
            ]}
          >
            <Input placeholder={"First Name"} />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your lastname",
              },
            ]}
          >
            <Input placeholder={"Last Name"} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                message: errors.email,
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input type="email" placeholder={"Email"} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder={"Password"} />
          </Form.Item>
          <Form.Item
            name="password_confirmation"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={"Confirm Password"} />
          </Form.Item>
          {/*<Form.Item*/}
          {/*  name="source"*/}
          {/*  label="How did you know about us?"*/}
          {/*  rules={[*/}
          {/*    {*/}
          {/*      required: false,*/}
          {/*      message: "Please select the source",*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*>*/}
          {/*  <Select>*/}
          {/*    <Option value="internet">Internet</Option>*/}
          {/*    <Option value="friend">Friend</Option>*/}
          {/*  </Select>*/}
          {/*</Form.Item>*/}
          <Form.Item>
            <Button
              block
              htmlType="submit"
              size="middle"
              style={{ padding: "30px" }}
              className="ct_btn"
              loading={loading}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default RegistrationForm;
