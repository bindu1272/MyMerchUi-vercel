"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import S3Image from "@/common/S3Image";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import ContactUsSubmitSuccess from "@/components/contactus/ContactUsSubmitSuccess";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { getHeaderBanners } from "@/selectors/bannerSelector";
import {
    fetchHeaderBannersRequest,
  } from "@/actions/strapiActions";

const ContactUsSuccessPage = ({ headerBanners }:any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);
  useEffect(() => {
    dispatch(
      fetchHeaderBannersRequest(
        { _sort: "displayOrder:ASC", },
        (response:any) => { },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching header banners.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [])

  return (
    <>
      <section className="banner-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles">
                <ParallaxProvider>
                  <Parallax translateY={["260px", "0px"]}>
                    <S3Image src={"/production-header-bubble.svg"} width={306} height={284} />
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="carousel-caption">
            <div className="container">
              <div className="row">
                <div className="col-sm-7">
                  <div className="slider_info ">
                    <h1 className="heading">
                      {headerBanners &&
                        headerBanners.length > 0 &&
                        headerBanners[0].title}
                    </h1>
                    <div className="banner_divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="desktop_main_banner"
          style={{
            backgroundImage: `url(${headerBanners &&
              headerBanners.length > 0 &&
              headerBanners[0].desktopImage1580x455 &&
              headerBanners[0].desktopImage1580x455.url
              })`,
          }}
        ></div>
        <div
          className="mobile_main_banner"
          style={{
            backgroundImage: `url(${headerBanners &&
              headerBanners.length > 0 &&
              headerBanners[0].mobileImage430x260 &&
              headerBanners[0].mobileImage430x260.url
              })`,
          }}
        ></div>
      </section>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-sm-12">
            <GoogleSetup
              title={"Contact Us | Get a Quote Success"}
              description={""}
            />
            <ContactUsSubmitSuccess />
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "contactus"),
  };
}

export default connect(mapStateToProps, {})(ContactUsSuccessPage);
