import React from "react";
import { Input, Form, Button, Radio } from "antd";

const SettingsForm = ({
  settings,
  onSave
}) => {

  return (
    <>
      <div className="order_history_block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="select_group2">
                <div className="row">
                  <div className="col-sm-5">
                    <Form
                      layout="vertical"
                      initialValues={settings}
                      onFinish={(values) => onSave(values)}
                    >
                      <Form.Item name="freight_settings_header">
                        <h1>Freight Settings</h1>
                      </Form.Item>
                      <Form.Item name="freight_type" label="Type">
                        <Radio.Group name="radiogroup" defaultValue={"Fixed"}>
                          <Radio value="Fixed">Fixed</Radio>
                          <Radio value="Variable">Variable</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        name="freight_minimum_threshold"
                        label="Minimum Threshold($)"
                      >
                        <Input placeholder="Minimum Threshold" />
                      </Form.Item>
                      <Form.Item name="freight_charge" label="Charge($)">
                        <Input placeholder="Freight Charge" />
                      </Form.Item>
                      <Form.Item name="tax_percentage" label="Tax (%)">
                        <Input placeholder="Tax Percentage" />
                      </Form.Item>
                      <Form.Item>
                        <Button className="btn" size="large" htmlType="submit">
                          Save
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;
