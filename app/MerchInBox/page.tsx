"use client";
import React, { useEffect } from "react";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import S3Image from "@/common/S3Image"
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const MerchInBox = () => {

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  const MerchUnbox = `${process.env.REACT_APP_IMAGES_SRC_URL}/Merch-Unbox.mp4`;

  return (
    <>
      <section
        className="bread_crumb"
        style={{ boxShadow: "0 15px 15px rgba(0, 0, 0, 0.08)", zIndex: "9" }}
      >
        <GoogleSetup
          title={"Merch In A Box"}
          description={"Welcoming or rewarding staff, or launching a brand campaign? We help you build curated merch, beautifully packaged and delivered to their door."}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <span>Merch in a Box</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-top-banner mib-section mt-0"
      // style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/MyMerch-portal-Banner.svg)` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-7">
              <h1 className="title" style={{ color: "#0032a0" }}>
                Merch that always <br />
                delivers on delight.
              </h1>
              <p style={{ color: "#0032a0" }}>
                Welcoming a team member, rewarding staff or launching a national
                brand campaign?
              </p>
              <p style={{ color: "#0032a0", marginTop: 0 }}>
                We can help you build curated merch, beautifully packaged and
                delivered to their door.
              </p>
              <Link
                href="/GetAQuote"
                className="btn"
                style={{
                  backgroundColor: "#3671c8",
                  border: "none",
                  color: "#fff",
                }}
              >
                Get started!
              </Link>
            </div>
            <div className="col-sm-6 col-xl-5 mb-video" >
              <video
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
                autofocus={true}
                muted={true}
                preload={true}
                controls={false}
                controlsList="nodownload"
                disablePictureInPicture={true}
                style={{width:390,height:429}}
              >
                <source src={MerchUnbox} type="video/mp4" />
              </video>
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
              <div className="mp-icon-title">Step 1</div>
              <h1 className="mp-title">Curate and customise</h1>
              <p className="mp-description">
                We guide you through a super easy design process and help you
                curate your branded custom merch.
              </p>
            </div>
            <div className="col-sm-6 col-lg-6 text-right">
              <S3Image src={"/merch-in-a-box-step-1.svg"} width={474} height={474}/>
            </div>
          </div>
        </div>
      </section>
      <section
        className="merch-portal-section mib-info-section"
        style={{ backgroundColor: "#d3dce4" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-end align-items-center">
            <div className="col-sm-6 col-lg-6" style={{ position: "inherit" }}>
              <S3Image src={"/merch-in-a-box-step-2.svg"} width={475} height={475}/>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="mp-icon-title">Step 2</div>
              <h1 className="mp-title">Personalise and pack</h1>
              <p className="mp-description">
                Next we customise your branded packaging with a personalised
                message. Your bespoke merch collection is then beautifully
                packed, ready to go.
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
              <div className="mp-icon-title">Step 3</div>
              <h1 className="mp-title">Delivering on delight</h1>
              <p className="mp-description">
                We deliver your custom merch-in-a-box direct for a seamless
                time-saving process. Sit back and watch the surprise and delight
                on the faces of your staff or customers!
              </p>
            </div>
            <div
              className="col-sm-6 col-lg-6 text-right"
              style={{ position: "inherit" }}
            >
              <S3Image src={"/merch-in-a-box-step-3.svg"} width={475} height={475}/>
            </div>
          </div>
        </div>
      </section>
      <section className="find-out-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xl-12 text-center">
              <h1>
                Find out how easy it is to make your brand’s merch happen.
              </h1>
              <Link href="/GetAQuote" className="get-link">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MerchInBox;
