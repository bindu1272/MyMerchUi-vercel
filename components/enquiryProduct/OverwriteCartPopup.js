import React from "react";
import { Modal } from "antd";

const OverwriteCartPopup = ({
    showOverwriteCartPopup,
    onOkOverwriteCartPopup,
    onCancelOverwriteCartPopup,
}) => {
    return (
        <Modal
            className="page_load_modal"
            centered
            visible={showOverwriteCartPopup}
            width={1049}
            onOk={onOkOverwriteCartPopup}
            onCancel={onCancelOverwriteCartPopup}
        >
            <div>
                <div className="header_title_section">
                    <div class="divider"></div>
                </div>
                <p>
                    You are adding a different type of product to the cart.
                    Previous products in the cart will be deleted.
                </p>
            </div>
        </Modal>
    );
};

export default OverwriteCartPopup;
