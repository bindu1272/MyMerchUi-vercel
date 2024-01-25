"use client";
import React, { useEffect } from "react";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Steps } from "antd";
import S3Image from "@/common/S3Image";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const { Step } = Steps;

const MyMerchProcess = () => {
  useEffect(() => {
    trackPageViewInGoogle();
  }, []);
  const text = 'Send to recipients or';
  const text2 = 'store in our warehouse';
  const br = `\n`;
  return (
    <>
      <section
        className="bread_crumb"
        style={{ boxShadow: "0 15px 15px rgba(0, 0, 0, 0.08)", zIndex: "9" }}
      >
        <GoogleSetup
          title={"How to Order Custom Merch for Your Brand: Our Process"}
          description={"Explore the step-by-step process of creating a custom merchandise order with MyMerch and getting your merch delivered to anywhere you like."}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <span>MyMerch Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-top-banner border-center-align mt-0"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/mib-Process-banner.svg)`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="title text-center">
                You create, we deliver <br /> and can store it too!
              </h1>
              <p className="text-center">
                <strong> With the simple end-to-end mymerch hub</strong>
              </p>
              <p className="text-center mt-2 mb-0">
                Connect with your people anywhere!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="merch_inprocess" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>
                The <S3Image src={"/new-logo-blue.png"} width={250} height={94} style={{ position: "relative", top: 15,verticalAlign:"middle",display:"unset" }} /> process
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Steps current={0}>
                <Step title=" &nbsp;" description="Select Your Merch" />
                <Step title=" &nbsp;" description="Upload Your Art" />
                <Step title=" &nbsp;" description="Approve Designs" />
                <Step title=" &nbsp;" description="Confirm Order" />
                <Step
                  title=" &nbsp;"
                  description={text + br + text2}
                />
                <Step title=" &nbsp;" description="Repeat" />
              </Steps>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#d3dce4" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6 col-lg-6 text-right">
              <S3Image src={"/mib-Process-05.svg"} width={475} height={348}/>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 1</div>
              <h1 className="mp-title">Select your merch</h1>
              <p className="mp-description">
                From our full range of curated, quality and contemporary
                products & preset packs for all occasions. We only use the best
                & tested products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 2</div>
              <h1 className="mp-title">Upload your art</h1>
              <p className="mp-description">
                Upload your art so we can start working on best branding and
                design options. Some designs are more suitable for some
                products. Not to worry, we will advise you.
              </p>
            </div>
            <div className="col-sm-6 col-lg-6" style={{ position: "inherit" }}>
              <S3Image src={"/mib-Process-01.svg"} width={475} height={348}/>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#d3dce4" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-sm-6 col-lg-6 text-right"
              style={{ position: "inherit" }}
            >
              <S3Image src={"/mib-Process-02.svg"} width={475} height={348}/>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 3</div>
              <h1 className="mp-title">Approve designs</h1>
              <p className="mp-description">
                We send you the design mockup for your approval. This is done
                via our full in-house creative team. Colour, size & placements
                are checked.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 4</div>
              <h1 className="mp-title">Confirm order</h1>
              <p className="mp-description">
                If you’re happy with the designs, you give us the green light.
                Your merch is sent to the recipients or stored in our warehouse.
              </p>
            </div>
            <div
              className="col-sm-6 col-lg-6 text-right"
              style={{ position: "inherit" }}
            >
              <S3Image src={"/mib-Process-03.svg"}  width={475} height={348}/>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#d3dce4" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-sm-6 col-lg-6 text-right"
              style={{ position: "inherit" }}
            >
              <S3Image src={"/mib-Process-04.svg"} width={475} height={348}/>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 5</div>
              <h1 className="mp-title">Repeat</h1>
              <p className="mp-description"></p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="find-out-section"
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xl-8 text-center">
              <Link
                href="/Warehouse"
                className="get-link"
                style={{
                  width: "300px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "#0032a0",
                }}
              >
                Explore the Warehouse <br />& Distribution feature
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyMerchProcess;
