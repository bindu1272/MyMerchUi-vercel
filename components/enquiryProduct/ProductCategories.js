import React from "react";
import { Link } from "react-scroll";
import { Collapse, Button } from "antd";
import {
  DownOutlined,
  UpOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const ProductCategories = ({
  categories,
  currentProductCategoryKey,
  cart,
  showProductCategoriesMobile,
  onClickProductCategory,
  onClickProductCategoriesMobile,
  onClickProductCategoryMobile,
  onClickViewCart,
}) => {
  return (
    <>
      <div className="category_list">
        <div className="d-none d-xl-block">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Categories" key="1">
              <ul>
                {categories && (
                  <ul>
                    {categories.length === 2 ? (
                      <li key={1}>
                        <a
                          onClick={() =>
                            onClickProductCategory(categories[1].key)
                          }
                          className={
                            currentProductCategoryKey === categories[1].key
                              ? "active"
                              : ""
                          }
                        >
                          {categories[1].name}
                        </a>
                      </li>
                    ) : (
                      categories.map((c, index) => (
                        <li key={index}>
                          <a
                            onClick={() => onClickProductCategory(c.key)}
                            className={
                              currentProductCategoryKey === c.key
                                ? "active"
                                : ""
                            }
                          >
                            {c.name}
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </ul>
            </Panel>
          </Collapse>
        </div>
        <div className="d-flex justify-content-between d-xl-none sticky_categories mobile_categories">
          <Button
            className={showProductCategoriesMobile ? "up_arrow" : "down_arrow"}
            onClick={onClickProductCategoriesMobile}
          >
            Categories <DownOutlined /> <UpOutlined />
          </Button>
          <Button
            className="view_cart_btn"
            onClick={onClickViewCart}
            disabled={!(cart.products && cart.products.length > 0)}
          >
            <ShoppingCartOutlined />
            <span className="cart-count">
              {cart && cart.products && cart.products.length}
            </span>
            View Cart
          </Button>
          <ul className={showProductCategoriesMobile ? "show" : "hide"}>
            {categories &&
              categories.length > 0 &&
              categories.map((c, index) => {
                return (
                  <li key={index}>
                    <Link
                      href=""
                      onClick={() => onClickProductCategoryMobile(c.key)}
                      to={c.key}
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={500}
                      className={
                        currentProductCategoryKey == c.key ? "active" : ""
                      }
                    >
                      {c.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
