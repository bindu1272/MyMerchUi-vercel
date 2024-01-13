import React from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Space,
  DatePicker,
} from "antd";

const ContactUs = ({
  loading,
  helpOptions,
  currentHelpOption,
  onHelpOptionChange,
  onSubmit
}) => {

  return (
    <>
      <section className="contact_form_section section_space" >
        <div className="container">
          <div
            className="info_section  pb-0 pt-5 m-0"
            style={{ borderRadius: 14 }}
          >
            <div className="row">
              <div className="col-sm-12">
                <h1 className="merch_title no-border">Let’s talk merch</h1>
                <div className="merch_description col-sm-12 col-lg-4">
                  Got a question? <br />
                  Ready to start your merch journey? <br />
                  Just want to chat? <br />
                  Fill out the form below and we’ll get back to you asap.
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 m-auto">
                <div className="contact-form p-0">
                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    layout="vertical"
                    className="row"
                    onFinish={onSubmit}
                  >
                    <Form.Item
                      label="Name"
                      name="first_name"
                      className="col-lg-12"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Name",
                        },
                      ]}
                    >
                      <Input placeholder="Enter Name" />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      className="col-lg-12"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Email",
                        },
                      ]}
                    >
                      <Input placeholder="Enter Email" />
                    </Form.Item>
                    <Form.Item
                      label="Contact Number"
                      name="phone_number"
                      className="col-lg-12"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Contact Number",
                        },
                      ]}
                    >
                      <Input placeholder="Enter Contact Number" />
                    </Form.Item>
                    <Form.Item
                      label="Company"
                      name="company"
                      className="col-lg-12"
                    >
                      <Input placeholder="Enter Company" className="col-lg-12" />
                    </Form.Item>
                    <div className="ant-form-item mb-0">
                      <div className="col-sm-12 ant-col ant-form-item-label label1">
                        <label>What do you need help with?*</label>
                      </div>
                    </div>
                    <div className="mb-4 col-sm-12">
                      <Radio.Group
                        value={currentHelpOption.name}
                        onChange={(e) => onHelpOptionChange(e.target.value)}
                      >
                        <Space direction="vertical" size={"middle"}>
                          {helpOptions &&
                            helpOptions.length > 0 &&
                            helpOptions.map((ho,index) => {
                              return <Radio value={ho.name} key={index}>{ho.name}</Radio>
                            })
                          }
                        </Space>
                      </Radio.Group>
                    </div>
                    <div className="col-sm-12">
                      <div className="row">
                        {currentHelpOption &&
                          currentHelpOption.fields &&
                          currentHelpOption.fields.length > 0 &&
                          currentHelpOption.fields.map(f => {
                            switch (f.type.toLowerCase()) {
                              case "int":
                                return <Form.Item
                                  label={f.label}
                                  name={f.name}
                                  className="col-lg-6"
                                  rules={[
                                    {
                                      required: f.isRequired,
                                      message: f?.label === "Quantity" ? "Please Enter Quantity" : f.isRequiredValidationMessage,
                                    },
                                  ]}
                                  
                                
                                >
                                  <Input
                                    type="number"
                                    min={f.minValue ? f.minValue : 1}
                                    placeholder={f.placeholderText}
                                    rules={[
                                      {
                                        required: f.isRequired,
                                        message: f.isRequiredValidationMessage,
                                      },
                                    ]}
                                  />
                                </Form.Item>
                              case "date":
                                return <Form.Item
                                  label={f.label}
                                  name={f.name}
                                  className="col-lg-6"
                                  rules={[
                                    {
                                      required: f.isRequired,
                                      message: f.isRequiredValidationMessage,
                                    },
                                  ]}
                                >
                                  <DatePicker placeholder={f.placeholderText} />
                                </Form.Item>
                              default:
                                return <Form.Item
                                  label={f.label}
                                  name={f.name}
                                  className="col-lg-6"
                                  rules={[
                                    {
                                      required: f.isRequired,
                                      message: f.isRequiredValidationMessage,
                                    },
                                  ]}
                                >
                                  <Input placeholder={f.placeholderText} />
                                </Form.Item>
                            }
                          })
                        }
                        <div className="col-lg-12">
                          <Form.Item>
                            <label style={{ fontSize: 16 }}>
                              Additional Information* <br />
                              It would be great if you can include a style name,
                              code or description here
                            </label>
                          </Form.Item>
                          <Form.Item
                            name="message"
                            className="message-box"
                            rules={[
                              {
                                required: true,
                                message: "Please enter Additional Information",
                              },
                            ]}
                          >
                            <Input.TextArea placeholder="Enter Additional Information" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <Form.Item className="col-sm-12 text-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                       className="btn_blue"
                        loading={loading}
                      >
                        Send
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
