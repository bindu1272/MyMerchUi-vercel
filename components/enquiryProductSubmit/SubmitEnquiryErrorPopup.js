import React from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const SubmitEnquiryErrorPopup = ({
  submitEnquiryErrorText,
  showSubmitEnquiryErrorPopup,
  onCloseSubmitEnquiryErrorPopup,
}) => {
  return (
    <Modal
      className="error_modal"
      centered
      footer={false}
      maskClosable={false}
      visible={showSubmitEnquiryErrorPopup}
      width={1049}
      onOk={onCloseSubmitEnquiryErrorPopup}
      onCancel={onCloseSubmitEnquiryErrorPopup}
    >
      <div>
        <div>
          <CloseOutlined className="error_icon" />
        </div>
        <h1>{submitEnquiryErrorText}</h1>
      </div>
    </Modal>
  );
};

export default SubmitEnquiryErrorPopup;
