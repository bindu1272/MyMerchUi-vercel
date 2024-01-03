import React from "react";

function MerchTitle(props) {
  return (
    <div className={props?.className}>
      <div className="title_divider">
        <span></span>
      </div>
      <h1 className="merch_title">{props?.title}</h1>
    </div>
  );
}

export default MerchTitle;
