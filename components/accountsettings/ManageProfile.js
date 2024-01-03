import React from "react";
import { Input, Form, Button } from "antd";

const ManageProfile = ({
    user,
    onUpdateProfile,
}) => {
    return (
        <Form
            layout="vertical"
            initialValues={user}
            onFinish={(values) => onUpdateProfile(values)}
        >
            <Form.Item
                name="first_name"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: "First Name is required",
                    },
                ]}
            >
                <Input
                    placeholder="First Name"
                    className="col-12 col-lg-5"
                />
            </Form.Item>
            <Form.Item
                name="last_name"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: "Last Name is required",
                    },
                ]}
            >
                <Input
                    placeholder="Last Name"
                    className="col-12 col-lg-5"
                />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Email is required",
                    },
                ]}
            >
                <Input
                    placeholder="Email"
                    className="col-12 col-lg-5"
                />
            </Form.Item>
            <Form.Item name="phone_number" label="Phone Number">
                <Input
                    placeholder="Phone Number"
                    className="col-12 col-lg-5"
                />
            </Form.Item>
            <Form.Item name="company" label="Company">
                <Input
                    placeholder="Company"
                    className="col-12 col-lg-5"
                />
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

export default ManageProfile;
