import React from "react";
import { Modal, Form } from "antd";
import GoogleSetup from "../../utilities/GoogleSetUp";

const ConfirmCart = ({
    onOk,
    onCancel,
}) => {
    return (
        <>
            <GoogleSetup
                title={"Confirm Cart"}
                description={""}
            />
            <Modal
                title="Update Cart"
                centered
                className="reg_modal"
                visible={true}
                width={700}
                okText={"Yes"}
                cancelText={"No"}
                onOk={onOk}
                onCancel={onCancel}
            >
                <Form
                    layout={"vertical"}
                    style={{ backgroundColor: "white" }}
                >
                    <Form.Item>
                        <h3>You have items saved previously in your cart. Do you want to update cart with the new items?</h3>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ConfirmCart;
