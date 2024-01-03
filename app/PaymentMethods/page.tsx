"use client";
import React, { useEffect } from "react";
import  Link  from "next/link";
import { RightOutlined } from "@ant-design/icons";
import S3Image from "@/common/S3Image";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const PaymentMethods = () => {

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"Payment & Return Policy"}
          description={"Read our payment and return policy and learn how to make payment with MyMerch or return our products, and what can or cannot be returned."}
        />
        <div className="container-fluid">
          <div
            className="row bread_crumb"
            style={{
              border: 0,
              backgroundColor: "transparent",
              position: "relative",
              zIndex: 99,
            }}
          >
            <div className="col-sm-12">
              <h1>Payment & Return Policy </h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>Payment & Return Policy </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <h2>Payment &amp; Return Policy</h2>
              <br />
              <p><strong>Payments</strong></p>
              <p>My Merch is an online store. Payment is made upon check out. Your payment is made via our secure e way payment gateway. An invoice is automatically sent to you after payment has been made. No credit card details are saved unless you choose to do so.</p>
              <p>Term accounts for our ongoing merch programs are available on request.</p>
              <p>We usually &amp; mostly get compliments for the service &amp; quality of products we provide. However, in the event you are not happy, please note the return policy below.</p>
              <p><strong>Returns</strong></p>
              <p><strong>To return a My Merch product:</strong>&nbsp;You must request an RMA (Return Merchandise Authorisation) number before making a return. To obtain an RMA number simply fill out your details on the contact page&nbsp;and request an RMA number. Please be sure to let us know in your email the date of your purchase, what you would like to return and why you want to return it. The RMA number, once received, must be written in a conspicuous place on the outside of the return parcel.</p>
              <p><strong>What can be returned:</strong>&nbsp;Only Items that are faulty/damaged or have a faulty print may only be returned. Returns must also comply with our user agreement.</p>
              <p>We&nbsp;do not refund or exchange&nbsp;for&nbsp;change of mind, shipping or stock delays&nbsp;or if the customer chooses the wrong product, size or colour.&nbsp;Please use our size guide for measurements and understand that the accepted tolerance for sizing is 2.5cm for half chest and length. Unforeseen delays or loss of items are a possibility with freight carriers and delivery dates are not guaranteed. We will always do our best and thank you for your understanding.</p>
              <p>Garments will not shrink if the correct washing guidlines on the t-shirt labels are followed; if you believe the garment was washed correctly please return the garment to us so we can organise a re-print on the same t-shirt.</p>
              <p>We take great pride in our commitment to customer service and are more than happy to assist you in any way we can. We want you to be happy and satisfied with your&nbsp;experience however some circumstances are beyond our control. Please advised we cannot&nbsp;be responsible for:</p>
              <ul>
                <li>Spelling, punctuation or grammatical errors made by the customer.</li>
                <li>Inferior quality, blurry or low-resolution of uploaded images by the customer.</li>
                <li>Incorrect&nbsp;image upload&nbsp;by the customer.</li>
                <li>Design errors introduced by the customer in the design creation process.</li>
                <li>Incorrect product type,size or colour product selection by the customer.</li>
                <li>10% variance in design printing colours and&nbsp;size.</li>
                <li>10% variance in the actual garment colours.</li>
                <li>Garment shrinkage in wash.</li>
              </ul>
              <p>&nbsp;</p>
              <p><strong>What cannot be returned:</strong>&nbsp;No returns will be accepted after 14 days of receipt of purchase. Items with noticeable wear cannot be returned. Items must be in like new condition to be eligible for return.</p>
              <p><strong>Returns for refund:</strong>&nbsp;must be made within 14 days of receipt of purchase.</p>
              <p><strong>Returns for exchange or store credit:</strong>&nbsp;must be made within 14 days of receipt of purchase.</p>
              <p><strong>Shipping charges for products returned:</strong>&nbsp;All shipping charges for returning products to us must be paid by the returnee. We do not reimburse shipping charges.</p>
              <p><strong>To return your items:</strong></p>
              <ol>
                <li>Contact us via the contact page to obtain an RMA (Return Merchandise Authorisation) number. Please indicate if you want a replacement or a refund.</li>
                <li>Write the RMA number in a conspicuous place on the outside of the return parcel.</li>
              </ol>
              <p>Send the package to:</p>
              <p><strong>My Merch Returns </strong></p>
              <p>27 Sirius Rd<br /> Lane Cove, NSW 2066</p>
              <p>ABN: 8316 2516 529</p>
              <p>&nbsp;</p>
              <br />
              {/* <S3Image src={"/cards.png"} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethods;
