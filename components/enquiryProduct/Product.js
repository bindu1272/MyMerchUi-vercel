import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined, CheckCircleFilled } from "@ant-design/icons";
import S3Image from "../../common/S3Image";
import { getThumbnailImageSpec } from "./EnquiryProductHelper";
import Image from "next/image";

const Product = ({ product, cart, onClickProduct, onClickProductSeeMore }) => {
  let isProductSelected = cart.products.find((p) => p.id == product.id);
  const imgSrc = product.colours.find((c) => c.is_lifestyle_image)
    ? product.colours.find((c) => c.is_lifestyle_image).images[
      getThumbnailImageSpec()
    ].product_image_url
    : product.colours[0].images[getThumbnailImageSpec()].product_image_url;
  return (
    <div className="pack_item">
      <div className="pack_img">
        <div className="badges_info">
          {product.tags && product.tags.toLowerCase().includes("hot") && (
            <div className="badge_icon" style={{ backgroundColor: "#EB7E89" }}>
              <S3Image src={"/enquiry_product_hot.svg"} />
              <label>HOT!</label>
            </div>
          )}
          {product.tags && product.tags.toLowerCase().includes("eco") && (
            <div className="badge_icon" style={{ backgroundColor: "#D9B48F" }}>
              <S3Image src={"/enquiry_product_eco.svg"} />
              <label>ECO</label>
            </div>
          )}
          {product.tags && product.tags.toLowerCase().includes("xprs") && (
            <div>
              <S3Image src={"/enquiry_product_xprs.svg"} />
            </div>
          )}
        </div>
        <Image alt="" src={imgSrc} width={325} height={415} />
        <div className="pack_info">
          <div className="pack_description">
            {product.product_description}.
            <br />
            <span style={{ fontWeight: 700 }}>
              {product.colours_available}.
            </span>
          </div>
          <Button
            className="btn_white"
            onClick={() => onClickProductSeeMore(product.slug)}
          >
            See More
          </Button>
        </div>
      </div>
      <div className="pack_title">
        <div>
          <h1>{product.name}</h1>
          <p>From ${Math.min(...product.prices.map(p => p.pu))} per unit</p>
        </div>
        <div
          className={isProductSelected ? "pack_select active" : "pack_select"}
        >
          <a onClick={() => onClickProduct(product)}>
            <PlusCircleOutlined className="plus_circle" />{" "}
            <CheckCircleFilled className="check_circle" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
