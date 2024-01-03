import React from "react";
import { Modal, Input, Button, Form, Checkbox, Select } from "antd";

const AddAddressForm = ({
  showForm,
  onSave,
  onCancel,
}) => {

  const { Option } = Select;
  
  return (
    <>
      <Modal
        title={"Add Address"}
        centered
        className="reg_modal"
        visible={showForm}
        onOk={onSave}
        onCancel={onCancel}
        footer={null}
        width={600}
        height={800}
      >
        <div className="payment_options">
          <Form
            layout="vertical"
            onFinish={(values) => onSave(values)}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Name is required",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="address_line_1"
              label="Address Line 1"
              rules={[
                {
                  required: true,
                  message: "Address Line 1 is required",
                },
              ]}
            >
              <Input placeholder="Address Line 1" />
            </Form.Item>
            <Form.Item
              name="address_line_2"
              label="Address Line 2"
            >
              <Input placeholder="Address Line 2" />
            </Form.Item>
            <Form.Item
              name="suburb"
              label="Suburb"
              rules={[
                {
                  required: true,
                  message: "Suburb is required",
                },
              ]}
            >
              <Input placeholder="Suburb" />
            </Form.Item>
            <Form.Item
              name="state"
              label="State"
              rules={[
                {
                  required: true,
                  message: "State is required",
                },
              ]}
            >
              <Select placeholder={"State"}>
                <Option value="ACT">Australian Capital Territory</Option>
                <Option value="NSW">New South Wales</Option>
                <Option value="NT">Northern Territory</Option>
                <Option value="QLD">Queensland</Option>
                <Option value="SA">South Australia</Option>
                <Option value="TAS">Tasmania</Option>
                <Option value="VIC">Victoria</Option>
                <Option value="WA">Western Australia</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="zip_code"
              label="Zip Code"
              rules={[
                {
                  required: true,
                  message: "Zip Code is required",
                },
              ]}
            >
              <Input placeholder="Zip Code" />
            </Form.Item>
            {/* <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Country is required",
                },
              ]}
            >
              <Input placeholder="Country"  />
            </Form.Item>          */}
            <Form.Item
              name="type"
              label="Type"
              rules={[
                {
                  required: true,
                  message: "Type is required",
                },
              ]}
            >
              <Input placeholder="Type" className="col-12 col-lg-5" />
            </Form.Item>
            <Form.Item name="is_default" valuePropName="checked">
              <Checkbox>Set this Address as default</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className="mt-4 btn"
                htmlType="submit"
              >
                Add
                </Button>
            </Form.Item>
          </Form>
          <hr style={{ marginTop: 30, marginBottom: 30 }} />
        </div>
      </Modal>
    </>
  );
};

export default AddAddressForm;
