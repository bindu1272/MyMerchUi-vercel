import React from "react";
import Product from "./Product";

const Products = ({
    enquiryProducts,
    currentProductCategoryKey,
    cart,
    onClickProduct,
    onClickProductSeeMore
}) => {
    const products = (enquiryProducts && enquiryProducts?.length > 0)
        ? currentProductCategoryKey?.toLowerCase() === "all"
            ? enquiryProducts
            : enquiryProducts.filter(ep => ep.categories.some(c => c.key.toLowerCase() == currentProductCategoryKey.toLowerCase()))
        : [];
    return (
        <div className="">
            {products &&
                products.length > 0 &&
                <>
                    <section id={currentProductCategoryKey} className="custom_packs_items_block">
                        {
                            products.map((p,index) => {
                                return (
                                    <Product key={index}
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
