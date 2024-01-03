import React from "react";
import S3Image from "../../common/S3Image";

const ContactUsSubmitSuccess = ({ }) => {
  return (
    <div className="contact_success_message">
      <S3Image src={"/success-icon.png"} width={120} height={120}/>
      <h1 className="title">Thankyou</h1>
      <div className="header_title_section">
        <div
          class="divider"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
            marginTop: 30,
            padding:0
          }}
        ></div>
      </div>
      <p>Your request has been submitted successfully.</p>
    </div>
  );
};

export default ContactUsSubmitSuccess;
