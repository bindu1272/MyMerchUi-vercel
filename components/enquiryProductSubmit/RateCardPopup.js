import React from "react";
import { Modal } from "antd";

const RateCardPopup = ({
  showRateCardPopup,
  onOkRateCardPopup,
  onCancelRateCardPopup,
}) => {
  return (
    <Modal
      width={1040}
      visible={showRateCardPopup}
      centered
      footer={false}
      className={"img_upload_tips"}
      onOk={onOkRateCardPopup}
      onCancel={onCancelRateCardPopup}
    >
      <>
        <div className="header_title_section">
          <div class="divider"></div>
        </div>
        <h1 className="title">Rate Card </h1>
        <p className="merch_description text-left">
          <strong> Warehousing Rates Warehousing</strong>
        </p>
        <p className="merch_description text-left margin_bottom">
          $30 per month per pallet - billed monthly
        </p>
        <p className="merch_description text-left">
         <strong> Distribution Rates (Australia Wide)</strong>
        </p>
        <p className="merch_description text-left">
          Bulk pack & delivery to one address – cost depending on volume &
          location: Approx $40 - $100{" "}
        </p>
        <p className="merch_description text-left">
          Custom merch packs – Pick & pack: $8.50 each
        </p>
        <p className="merch_description text-left">
          Custom merch packs – Pick, pack & delivery to individual addresses $25
          each
        </p>
        <p className="info_message"><span>ⓘ</span> The above are indicative costs only, final cost confirmed once delivery details provided.</p>
      </>
    </Modal>
  );
};

export default RateCardPopup;
