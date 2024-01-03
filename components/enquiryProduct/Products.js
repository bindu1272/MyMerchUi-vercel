import React from "react";
import Product from "./Product";

const Products = ({
    enquiryProducts,
    currentProductCategoryKey,
    cart,
    onClickProduct,
    onClickProductSeeMore
}) => {
    return (
        <div className="">
            {enquiryProducts &&
                enquiryProducts[currentProductCategoryKey] &&
                enquiryProducts[currentProductCategoryKey].length > 0 &&
                <>
                    <section id={currentProductCategoryKey} className="custom_packs_items_block">
                        {enquiryProducts[currentProductCategoryKey].map(p => {
                            return (
                                <Product
                                    product={p}
                                    cart={cart}
                                    onClickProduct={onClickProduct}
                                    onClickProductSeeMore={onClickProductSeeMore}
                                />
                            )
                        })}
                    </section>
                </>
            }
        </div>
    );
};

export default Products;
