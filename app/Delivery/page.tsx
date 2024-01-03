"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const Delivery = () => {
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
          title={"Delivery"}
          description={"Our standard delivery for custom branded merch is approx. 10-15 working days. This excludes shipping. We do offer a priority turn around on T-shirts."}
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
              <h1>Delivery</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>Delivery</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <h2>Delivery</h2>
              <p>
                Our standard delivery for custom branded merch is approx. 10-15
                working days. This excludes shipping. We do offer a priority
                turn around on T-shirts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
