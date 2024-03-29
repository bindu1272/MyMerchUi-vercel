import { FETCH_ENQUIRY_PRODUCTS_URL } from "@/constants/apiUrls";
import { computePaginationURL } from "@/utilities/helpers";
import React from "react";
import AllMerch from "@/components/AllMerch/index";
import _ from "lodash";

const Page = async(props:any) =>{
  // const pathname = usePathname();
  // const getCurrentProductsType = () => {
  //   if (pathname.toLowerCase().startsWith("/curatedpacks")) {
  //     return "curated-pack";
  //   } else if (pathname.toLowerCase().startsWith("/custompacks")) {
  //     return "custom-pack";
  //   } else {
  //     return "all-merch";
  //   }
  // };
 
  let currentProductsType = "custom-pack";
  let currentSearchString = props?.searchParams?.searchString || "";
  let params = {
    type: currentProductsType,
    searchString: currentSearchString,
    "applyGrouping": 0,
  }
  const url:any = computePaginationURL(FETCH_ENQUIRY_PRODUCTS_URL, params);
  const response = await fetch(url,  {
    next: { revalidate: 1000 },
  })

  const enquiryProducts:any = await response.json();
  let allCategory = [{
    id: 0,
    key: "all",
    name: "All",
  }];
  enquiryProducts?.forEach((p:any) => allCategory.push(...p.categories));
  let resCategories = _.uniqBy(allCategory, 'key');
  let currentCategoryKey = props?.params?.id?.[0] ? decodeURIComponent(props?.params?.id?.[0]) :"all";
  const currentProductCategoryIndex = resCategories.findIndex((c) => c.key.toLowerCase() == currentCategoryKey.toLowerCase());
  return(
    <AllMerch 
      productsData = {enquiryProducts}
      categoriesData = {resCategories}
      currentProductCategoryIndexData={currentCategoryKey}
      props = {props}
    />
  )
}
export default Page;

