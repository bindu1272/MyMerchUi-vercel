import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Modal, DatePicker, notification } from "antd";
import S3Image from "../common/S3Image";
import { bulkOrderRequest } from "../actions/userActions";

const BulkOrder = ({
  showBulkOrder,
  setShowBulkOrder,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      bulkOrderRequest(
        values,
        (response) => {
          setLoading(false);
          setShowBulkOrder(false);
          notification.success({
            message: `Your request has been sent.`,
            placement: "bottomRight",
            bottom: 400,
          });
        },
        (error) => {
          setLoading(false);
          setShowBulkOrder(true);
          notification.error({
            message: `Something went wrong. Please try again.`,
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  }

  return (
    <>
      {showBulkOrder &&
        <Modal
          centered
          className="reg_modal get_modal"
          visible={showBulkOrder}
          onOk={() => setShowBulkOrder(false)}
          onCancel={() => setShowBulkOrder(false)}
          footer={null}
          width={750}
        >
          <div className="row">
            <div className="col-sm-12 text-right" style={{ fontSize: 18 }}>
              <S3Image src={"/new-logo-black.png"} width="150" height={34} /> <br />
              <a href="mailto:info@mymerch.com.au">info@mymerch.com.au</a>
              <p style={{ margin: 0, lineHeight: "normal" }}>1800 959 308 </p>
            </div>
            <div className="col-sm-12">
              <h3 style={{ color: "#000" }}>Get in touch! </h3>
              <p>
                Kindly complete & submit your enquiry, one of the team will be in
                touch soon.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-form2">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  layout="vertical"
                  className="row"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    label="First Name"
                    name="first_name"
                    className="col-lg-6"
                    rules={[
                      {
                        required: true,
                        message: "Please enter First Name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Company"
                    name="company"
                    className="col-lg-6"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="last_name"
                    className="col-lg-6"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Last Name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item></Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    className="col-lg-6"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone Number"
                    name="phone_number"
                    className="col-lg-6"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Message - It would be great if you can include a style name, code or description here"
                    name="message"
                    className="col-sm-12"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Message",
                      },
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    label="Colour"
                    name="color"
                    className="col-lg-6"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    className="col-lg-6"
                  ><Input type="number" min="1" placeholder="Enter Quantity" />
                  </Form.Item>
                  <Form.Item
                    label="Required Date"
                    name="required_date"
                    className="col-lg-6"
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="Artwork Ready – Yes or No "
                    name="is_artwork_ready"
                    className="col-lg-6"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item className="col-sm-12 mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
      }
    </>
  );
}

export default BulkOrder;
