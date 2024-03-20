import { FETCH_ENQUIRY_PRODUCT_URL } from "@/constants/apiUrls";
import React from "react";
import EnquiryProductDetailsPage from "@/components/enquiryProduct/EnquiryProductDetailsPage"

const Page = async (props:any)=>{
    const url: any = FETCH_ENQUIRY_PRODUCT_URL.replace(":slug", props?.params?.id?.[0])
    const response = await fetch(url,{
        next: {revalidate: 1000}
    })
    const res:any = await response.json();
    const data = res?.data;
    let qty = data?.minimum_order_quantity;

    const calculateProductUnitPrice = (qty:any, prices:any) => {
        let unitPriceObject = prices
            .filter((p:any) => p.qty <= qty)
            .sort()
            .pop();
        if (!unitPriceObject) {
            unitPriceObject = prices[0];
        }
        return unitPriceObject.pu;
    };

    return(
        <EnquiryProductDetailsPage
            currentProductData = {data}
            currentProductQuantityData = {qty}
            currentProductUnitPriceData={calculateProductUnitPrice(qty, data?.prices)}
            currentProductColourData = {data.colours.find((c:any) => c.is_lifestyle_image)
                ? data.colours.find((c:any) => c.is_lifestyle_image)
                : data.colours[0]}
        />
    )
}
export default Page;