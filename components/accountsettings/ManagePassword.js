import React from "react";
import { Input, Form, Button } from "antd";

const ManagePassword = ({
  onUpdatePassword
}) => {
  return (
    <Form
      layout="vertical"
      onFinish={(values) => onUpdatePassword(values)}
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
        <Input.Password placeholder="Password" className="col-12 col-lg-5" />
      </Form.Item>
      <Form.Item
        name="confirm_password"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: "Confirm Password is required",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" className="col-12 col-lg-5" />
      </Form.Item>
      <Form.Item>
        <Button
          className="mt-4 btn"
          htmlType="submit"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ManagePassword;
