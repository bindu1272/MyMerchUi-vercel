import React from "react";
import { CloseOutlined } from "@ant-design/icons";

const ContactUsSubmitError = ({}) => {
  return (
    <div className="contact_success_message">
      <div>
        <CloseOutlined className="error_icon" />
      </div>
      <h1 className="title">{"Something went wrong. Please try again."}</h1>
    </div>
  );
};

export default ContactUsSubmitError;
