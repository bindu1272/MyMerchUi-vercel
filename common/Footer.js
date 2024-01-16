import React from "react";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import {
  FacebookOutlined,
  InstagramFilled,
  LinkedinOutlined,
} from "@ant-design/icons";
import S3Image from "@/common/S3Image";
import ScrollToUp from "./ScrollToUp"

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-8 col-lg-4">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <S3Image src={"/new-logo-white.png"} className="mb-3 footer_logo" width={164} height={62}/>
                      <p style={{fontFamily:"Neutra Text"}}>
                        We create the tangible moments for your brand. Experts
                        in designing & producing branded & custom apparel,
                        promotional items & gifts. Modern merch, simply done
                      </p>
                      <p>
                        Sydney | Melbourne | Shanghai
                      </p>
                      <p
                        style={{
                          marginBottom: 0,
                          fontFamily: "Neutra Text Alt",
                        }}
                      >
                        27 Sirius Road, Lane Cove West NSW 2066
                      </p>
                      <p
                        style={{
                          fontFamily: "Neutra Text Demi Alt",
                        }}
                      >
                        Loft 6/49 Smith St, Fitzroy VIC 3065
                      </p>
                      <Link
                        href="mailto:info@mymerch.com.au"
                        style={{
                          fontFamily: "Neutra Text Demi Alt",
                          color: "#fff",
                        }}
                      >
                        info@mymerch.com.au
                      </Link>
                      <p
                        style={{
                          fontFamily: "Neutra Text Demi Alt",
                          fontWeight: "normal",
                        }}
                      >
                        1800 959 308
                      </p>
                      <p className="abn_code mb-1">
                        ABN: 8316 2516 529
                      </p>
                      <ul className="social-media mt-2">
                        <Link
                          href="https://www.instagram.com/mymerch.com.au/"
                          target={"_blank"}
                        >
                          <InstagramFilled />
                        </Link>
                        <Link
                          href="https://www.facebook.com/mymerch.com.au"
                          target={"_blank"}
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        {/*<Link href="/">*/}
                        {/*    <TwitterOutlined />*/}
                        {/*</Link>*/}
                        <Link
                          href="https://www.linkedin.com/company/my-merch"
                          target={"_blank"}
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-7 ms-auto footer_info_links">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 mb-5">
                      <h1>Cool Stuff</h1>
                      <ul className="links">
                        <li>
                          <Link href="/caseStudies">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/Blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/CustomPortal">Custom Portal</Link>
                        </li>
                        <li>
                          <Link href="/MerchInBox">Merch in a Box</Link>
                        </li>
                        <li>
                          <Link href="/MyMerchProcess">My Merch Process</Link>
                        </li>
                        <li>
                          <Link href="/Warehouse">
                            Warehouse & Distribution
                          </Link>
                        </li>
                        {/* <li>
                              <Link href="/">My Cupboard</Link>
                            </li>
                            <li>
                              <Link href="/">Latest work </Link>
                            </li>
                            <li>
                              <Link href="/">My Blog</Link>
                            </li>
                          */}
                      </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 mb-5">
                      <h1>Information</h1>
                      <ul className="links">
                        <li>
                          <Link href="/aboutus">About Us</Link>
                        </li>
                        <li>
                          <Link href="/GetAQuote">Get a Quote</Link>
                        </li>
                        <li>
                          <Link href="/FAQ">FAQ’s </Link>
                        </li>
                        <li>
                          <Link href="/PrivacyPolicy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/TermsConditions">Terms & Conditions</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                      <h1>Your Resources</h1>
                      <ul className="links">
                        <li>
                          <Link href="/YourResources?tabIndex=1">Artwork Requirements </Link>
                        </li>
                        <li>
                          <Link href="/YourResources?tabIndex=2">Artwork Approvals </Link>
                        </li>
                        <li>
                          <Link href="/YourResources?tabIndex=3">Branding Methods </Link>
                        </li>
                        <li>
                          <Link href="/YourResources?tabIndex=4">Sample Policy </Link>
                        </li>
                        <li>
                          <Link href="/Delivery">Delivery </Link>
                        </li>
                        <li>
                          <Link href="/ShippingTracking">
                            Shipping & Tracking{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/PaymentMethods">
                            Payment & Return Policy{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="copyright-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              © 2020 mymerch.com.au All Rights Reserved
            </div>
          </div>
        </div>
      </div> */}
      <div>
        {/* <ScrollToUp/> */}
      </div>
      
    </div>
  );
};

export default Footer;
