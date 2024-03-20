import React from "react";
import { Modal, Input, Button, Form, Checkbox } from "antd";
import S3Image from '../../common/S3Image';

const AddCardForm = ({
  showForm,
  onSave,
  onCancel,
}) => {
  return (
    <>
      <Modal
        title={"Add Card"}
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
          <div className="form_group">
            <S3Image src={"/cards.png"} alt="mymerch" width={407} height={42}/>
          </div>
          <Form
            initialValues={{}}
            onFinish={(values) => onSave(values)}
          >
            <div className="col-sm-8">
              <h3>CardHolder Name</h3>
              <Form.Item
                name="cardHolderName"
                rules={[
                  {
                    required: true,
                    message: "Card Holder Name is required",
                  },
                ]}
              >
                <Input size={"large"} placeholder="Card Holder" />
              </Form.Item>
            </div>
            <div className="col-sm-8">
              <h3>Card Number</h3>
              <Form.Item
                name="cardNumber"
                rules={[
                  {
                    required: true,
                    message: "Card Number is required",
                  },
                ]}
              >
                <Input size={"large"} placeholder="XXXX XXXX XXXX XXXX" />
              </Form.Item>
            </div>

            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6">
                  <h3>Expiration Month</h3>
                  <Form.Item
                    name="expirationMonth"
                    rules={[
                      {
                        required: true,
                        message: "Expiration Month is required",
                      },
                    ]}
                  >
                    <Input placeholder="MM" />
                  </Form.Item>
                </div>

                <div className="col-sm-6">
                  <h3>Expiration Year</h3>
                  <Form.Item
                    name="expirationYear"
                    rules={[
                      {
                        required: true,
                        message: "Expiration Year is required",
                      },
                    ]}
                  >
                    <Input placeholder="YY" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h3>CVV</h3>
              <Form.Item
                name="cvn"
                rules={[
                  {
                    required: true,
                    message: "CVV is required",
                  },
                ]}
              >
                <Input size={"large"} placeholder="CVV" />
              </Form.Item>
            </div>
            <Form.Item
              name="is_default"
              valuePropName="checked">
              <Checkbox>Set this card as default</Checkbox>
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

export default AddCardForm;
