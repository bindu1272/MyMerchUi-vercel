import React from "react";
import { Layout } from "antd";
// import { Router, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollToTop";
// import AdminPage from "../pages/AdminPage";
// import AdminUsers from "./Admin/Users";
// import AdminSettings from "./Admin/Settings";
// import AdminSizeGuides from "./Admin/SizeGuides";
// import HomePage from "../pages/HomePage";
// import CaseStudyPage from "../pages/CaseStudyPage";
// import CaseStudyDetailsPage from "../pages/CaseStudyDetailsPage";
// import AccountSettingsPage from "../pages/AccountSettingsPage";
// import AboutUs from "../pages/AboutUs";
// import FAQ from "../pages/FAQ";
// import CustomPortal from "../pages/CustomPortal";
// import YourResources from "../pages/YourResources";
// import Delivery from "../pages/Delivery";
// import ShippingTracking from "../pages/ShippingTracking";
// import PaymentMethods from "../pages/PaymentMethods";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import TermsConditions from "../pages/TermsConditions";
// import ContactUsPage from "../pages/ContactUsPage";
// import ContactUsSuccessPage from "../pages/ContactUsSuccessPage";
// import ContactUsErrorPage from "../pages/ContactUsErrorPage";
// import ResetPasswordPage from "../pages/ResetPasswordPage";
// import MerchInBox from "../pages/MerchInBox";
// import MyMerchProcess from "../pages/MyMerchProcess";
// import BlogsPage from "../pages/BlogsPage";
// import BlogDetailsPage from "../pages/BlogDetailsPage";
// import EnquiryProductsPage from "../pages/EnquiryProductsPage";
// import EnquiryProductDetailsPage from "../pages/EnquiryProductDetailsPage";
// import EnquiryProductsSubmitPage from "../pages/EnquiryProductsSubmitPage";
// import Production from "../pages/Production";
// import Warehouse from "../pages/Warehouse";
// import WhyMerch from "../pages/WhyMerch";
// import WhoWeAre from "../pages/WhoWeAre";
// import WhatWeDo from "../pages/WhatWeDo";
// import Sustainability from "../pages/Sustainability";
// import MyMerchInspo from "../pages/MyMerchInspo";
// import MyMerchInspoDetails from "../pages/MyMerchInspoDetails";

const { Content } = Layout;

// export const history = createBrowserHistory();
const Routes = (props) => {
  return (
    // <Router history={history}>
      <Layout>
        {/* <Header /> */}
        {/* <ScrollToTop> */}
          {/* <Content style={{ minHeight: 700, backgroundColor: "#d1dde6" }}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route path="/admin/users" component={AdminUsers} />
            <Route path="/admin/settings" component={AdminSettings} />
            <Route path="/admin/sizeguides" component={AdminSizeGuides} />
            <Route path="/accountsettings" component={AccountSettingsPage} />
            <Route path="/reset-password" component={ResetPasswordPage} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/YourResources" component={YourResources} />
            <Route path="/Delivery" component={Delivery} />
            <Route path="/ShippingTracking" component={ShippingTracking} />
            <Route path="/PaymentMethods" component={PaymentMethods} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/TermsConditions" component={TermsConditions} />
            <Route path="/CustomPortal" component={CustomPortal} />
            <Route path="/MerchInBox" component={MerchInBox} />
            <Route path="/MyMerchProcess" component={MyMerchProcess} />
            <Route path="/GetAQuote" component={ContactUsPage} />
            <Route path="/GetAQuoteSuccess" component={ContactUsSuccessPage} />
            <Route path="/GetAQuoteError" component={ContactUsErrorPage} />
            <Route path="/CaseStudies/:category?" component={CaseStudyPage} />
            <Route path="/CaseStudyDetails/:slug" component={CaseStudyDetailsPage} />
            <Route path="/Blog/:category?" component={BlogsPage} />
            <Route path="/BlogDetails/:slug" component={BlogDetailsPage} />
            <Route path="/CustomPacks" component={EnquiryProductsPage} />
            <Route path="/CuratedPacks" component={EnquiryProductsPage} />
            <Route path="/AllMerch" component={EnquiryProductsPage} />
            <Route path="/EnquiryProduct/:id" component={EnquiryProductDetailsPage} />
            <Route path="/SubmitEnquiry" component={EnquiryProductsSubmitPage} />
            <Route path="/Sustainability" component={Sustainability} />
            <Route path="/Production" component={Production} />
            <Route path="/Warehouse" component={Warehouse} />
            <Route path="/WhyMerch" component={WhyMerch} />
            <Route path="/WhatWeDo" component={WhatWeDo} />
            <Route path="/WhoWeAre" component={WhoWeAre} />
            <Route path="/MyMerchInspo/:category?" component={MyMerchInspo} />
            <Route path="/MyMerchInspoDetails/:slug" component={MyMerchInspoDetails} />
          </Content> */}
        {/* </ScrollToTop> */}
        {/* <Footer /> */}
      </Layout>
    // </Router>
  );
};

export default Routes;
