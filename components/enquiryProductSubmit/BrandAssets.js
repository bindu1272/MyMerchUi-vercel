import React from "react";
import { RightOutlined } from "@ant-design/icons";
import BrandAssetUpload from "./BrandAssetUpload";

const BrandAssets = ({
  brandAssetsFilesList,
  brandAssetUploadInProgress,
  onUploadBrandAssetFile,
  onDeleteBrandAssetFile,
  onClickContinue,
}) => {
  return (
    <>
      <section className="upload_brand_assets_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="merch_description">
                You can skip this step for now and click ‘Continue’ below and finalise your enquiry.<br />
                OR<br />
                Please upload all your brand elements, include all logo variants and any supporting brand marks.
              </div>
              <BrandAssetUpload
                fileList={brandAssetsFilesList}
                brandAssetUploadInProgress={brandAssetUploadInProgress}
                onUploadFile={onUploadBrandAssetFile}
                onDeleteFile={onDeleteBrandAssetFile}
              />
              <div className="price_message m-0">
                <p>
                  ⓘ Tip: We recommend file formats such as .eps, .ai, .svg for
                  the best results. <br /> If unsure, click continue to skip
                  this step and a MyMerch team member will assist you further
                  with your quote.
                </p>
                <a className="btn_blue m-0" onClick={() => onClickContinue()}>
                  Continue
                  <RightOutlined style={{ height: 12, marginLeft: 10 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandAssets;
