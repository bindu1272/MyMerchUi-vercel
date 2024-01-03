import React from "react";
import S3Image from "../../common/S3Image";

const Loader = () => {
  return (
    <div className="cp_loader">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title">Loading memorable merch...</h1>
            <div class="cp_box_loading">
              <S3Image src={"/enquiry-product-loader.gif"} alt="mymerch" layout="auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
