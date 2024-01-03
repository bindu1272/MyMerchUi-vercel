import React from "react";
import moment from "moment";
import { Form, Input, Radio, DatePicker, Space, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import RateCardPopup from "./RateCardPopup";

const AddYourDetails = ({
  showRateCardPopup,
  onClickContinue,
  onClickRateCardPopup,
  onOkRateCardPopup,
  onCancelRateCardPopup,
}) => {
  const [form] = Form.useForm();
  const contactDetailsIntialValues = {
    "clientType": "New Client",
    "warehousing": "No",
    "delivery": "One Address",
  };
  const disabledDate = current => {
    return current && current < moment().startOf('day');
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={contactDetailsIntialValues}
        onFinish={(values) => onClickContinue(values)}
      >
        <section className="add_final_details_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="cd_title">Contact Details</p>
              </div>
              <div className="col-sm-12">
                <div className="cd_radio_group">
                  <Form.Item name="clientType">
                    <Radio.Group>
                      <Radio value={"Exisiting Client"}>Existing Client</Radio>
                      <Radio value={"New Client"}>New Client</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="cd_form_section" id="continue_form_position">
                  <div className="ant-form">
                    <Form.Item
                      label="Full name"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Full name",
                        },
                      ]}
                    >
                      <Input placeholder="Full name" />
                    </Form.Item>
                    <Form.Item
                      label="Work email address"
                      name="emailAddress"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Work email address",
                        },
                      ]}
                    >
                      <Input placeholder="Work email address*" />
                    </Form.Item>
                    <Form.Item
                      label="Company name"
                      name="companyName"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Company name",
                        },
                      ]}
                    >
                      <Input placeholder="Company name" />
                    </Form.Item>
                    <Form.Item
                      label="Phone number"
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Phone number",
                        },
                      ]}>
                      <Input placeholder="Phone number" />
                    </Form.Item>
                    <Form.Item
                      label="Date these packs are required:"
                      className="w-100"
                      name="requiredDate"
                    >
                      <DatePicker
                        disabledDate={disabledDate}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
            <div className="row warehousing_from_section">
              <div className="col-sm-12">
                <p className="cd_title">Warehousing</p>
              </div>
              <div className="col-sm-12">
                <p className="merch_description text-left">
                  Do you require us to store your packs?{" "}
                  <a
                    className="merch_text_link"
                    onClick={onClickRateCardPopup}
                  >
                    View rate card
                  </a>
                </p>
                <div className="cd_radio_group">
                  <Form.Item name="warehousing">
                    <Radio.Group>
                      <Radio value={"Yes"}>Yes please</Radio>
                      <Radio value={"No"}>No Thanks</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <p className="merch_description text-left mb-0 color_primary">
                  ⓘ Indicative pricing will be provided in the quote.
                </p>
              </div>
            </div>
            <div className="row distribution_form_section">
              <div className="col-sm-12">
                <p className="cd_title">Distribution</p>
              </div>
              <div className="col-sm-12">
                <p className="merch_description text-left">
                  How would you like your merch packs delivered?{" "}
                  <a
                    className="merch_text_link"
                    onClick={onClickRateCardPopup}
                  >
                    View delivery rate card.
                  </a>
                </p>
                <div className="cd_radio_group mb-0">
                  <Form.Item name="delivery">
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value={"One Address"} className="mx-0">
                          All packs sent to one address{" "}
                        </Radio>
                        <Radio value={"Individual Recipients"} className="mx-0">
                          Packs sent direct to individual recipients{" "}
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="row align-items-center bottom_btn_group">
              <div className="col-12 col-sm-8  text-right">
                <p className="merch_description text-left color_primary mb-0">
                  <strong>
                    ⓘ Indicative pricing will be provided in the quote.
                  </strong>{" "}
                </p>
              </div>
              <div className="col-sm-4  text-right">
                <Button
                  className="btn_blue m-0 continue_btn"
                  htmlType="submit"
                >
                  Continue
                  <RightOutlined />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Form>
      {showRateCardPopup && (
        <RateCardPopup
          showRateCardPopup={showRateCardPopup}
          onOkRateCardPopup={onOkRateCardPopup}
          onCancelRateCardPopup={onCancelRateCardPopup}
        />
      )}
    </>
  );
};

export default AddYourDetails;
