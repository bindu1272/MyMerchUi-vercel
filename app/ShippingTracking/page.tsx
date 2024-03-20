"use client";
import React, { useEffect } from "react";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const ShippingTracking = () => {

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.NEXT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"Shipping & Tracking"}
          description={"We ship everywhere! A tracking number will be emailed to you once your order is despatched. Delivery is generally 2-4 days. Learn more."}
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
              <h1>Shipping & Tracking</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>Shipping & Tracking</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <h2>Shipping & Tracking</h2>
              <p>
                We ship everywhere! A tracking number will be emailed to you
                once your order is despatched. Delivery days will vary depending
                on your location. But generally allow for 2-4 days.
              </p>
              <p>
                Shipping prices are calculated online and included when placing
                the order. It calculates the price by weight & post code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingTracking;
