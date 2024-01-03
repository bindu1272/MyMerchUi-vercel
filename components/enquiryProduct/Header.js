import React from "react";
import Quantity from "./Quantity";
import { QuestionCircleOutlined } from "@ant-design/icons";

const HeaderTitle = (props) => {
  return (
    <div className="header_title_section title_question_icon">
      <div className="divider" data={props.hidedivider}></div>
      <div className="merch_title text-left">
        {props.title}
        <QuestionCircleOutlined
          onClick={props.onClickHeaderTitle}
        />
      </div>
    </div>
  );
};

const Header = ({
  productsType,
  productsQuantity,
  productsCustomQuantity,
  onClickHeaderTitle,
  disableProductsCustomQuantityInput,
  onChangeProductsQuantity,
  onChangeProductsCustomQuantity,
  onBlurProductsCustomQuantity,
}) => {
  return (
    <div className="packs_quantity_section">
      {productsType == "custom-pack" && (
        <>
          <HeaderTitle
            title="Start building your custom pack"
            onClickHeaderTitle={onClickHeaderTitle}
          />
          <p className="merch_description text-left">
            Begin adding merch to your enquiry and select the packaging you want
            it all presented in.
          </p>
          <h1 className="sub_title">How many custom packs do you want?</h1>
          <div className="search_packs_section">
            <Quantity
              quantity={productsQuantity}
              minimumQuantity={50}
              customQuantity={productsCustomQuantity}
              disableCustomQuantityInput={disableProductsCustomQuantityInput}
              onChangeQuantity={onChangeProductsQuantity}
              onChangeCustomQuantity={onChangeProductsCustomQuantity}
              onBlurCustomQuantity={onBlurProductsCustomQuantity}
            />
          </div>
          <p className="info_message">
            <span>ⓘ </span>Minimum order quantity is 50 units. This number is
            the total amount of custom packs you want us to quote on, not the{" "}
            <strong>individual merch items.</strong> Don’t worry, we will
            calculate the total quantity of merch required per pack.
          </p>
        </>
      )}
      {productsType == "curated-pack" && (
        <>
          <HeaderTitle
            title="Start building your curated pack"
            onClickHeaderTitle={onClickHeaderTitle}
          />
          <p className="merch_description text-left">
            Simply pick the carefully curated pack that best fits your needs and
            enquire today.
          </p>
          <h1 className="sub_title">How many curated packs do you want?</h1>
          <div className="search_packs_section">
            <Quantity
              quantity={productsQuantity}
              minimumQuantity={50}
              customQuantity={productsCustomQuantity}
              disableCustomQuantityInput={disableProductsCustomQuantityInput}
              onChangeQuantity={onChangeProductsQuantity}
              onChangeCustomQuantity={onChangeProductsCustomQuantity}
              onBlurCustomQuantity={onBlurProductsCustomQuantity}
            />
          </div>
          <p className="info_message">
            <span>ⓘ </span>Minimum order quantity is 50 units. This number is
            the total amount of curated packs you want us to quote on, not the{" "}
            <strong>individual merch items.</strong> Don’t worry, we will
            calculate the total quantity of merch required per pack.
          </p>
        </>
      )}
      {productsType == "all-merch" && (
        <>
          <HeaderTitle
            title="Begin adding merch to you enquiry"
            onClickHeaderTitle={onClickHeaderTitle}
          />
          <p className="merch_description text-left">
            Select the individual merch options you want to personalise. (Minimum order quantity of 50 units.)
          </p>
        </>
      )}
    </div>
  );
};

export default Header;
