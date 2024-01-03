import React from "react";
import { Modal } from "antd";

const SubmitEnquirySuccessPopup = ({
    customerName,
    showSubmitEnquirySuccessPopup,
    onCloseSubmitEnquirySuccessPopup,
}) => {
    return (
        <Modal
            className="submit_thankyou_modal"
            centered
            footer={false}
            maskClosable={false}
            visible={showSubmitEnquirySuccessPopup}
            width={1049}
            onOk={onCloseSubmitEnquirySuccessPopup}
            onCancel={onCloseSubmitEnquirySuccessPopup}
        >
            <div>
                <div className="header_title_section">
                    <div class="divider"></div>
                </div>
                <h1 className="title">Thankyou {customerName}!</h1>
                <p>
                    Congrats on your first steps towards your very own branded merch!<br />The
                    MyMerch team will be in touch within 2 business days to confirm
                    final details/next steps.
                </p>
                <p>
                    In the mean-time, we have sent a confirmation email to you for your
                    records.<br />If you have any other questions, please feel free to contact
                    us on 1800 959 308.
                </p>
                <p>Chat soon!</p>
            </div>
        </Modal>
    );
};

export default SubmitEnquirySuccessPopup;
