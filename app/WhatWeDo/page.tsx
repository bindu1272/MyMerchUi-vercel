"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { notification } from "antd";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import MerchMadeEasyAs from "@/components/whatwedo/MerchMadeEasyAs";
import MerchMagicInAction from "@/components/whatwedo/MerchMagicInAction";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { fetchCaseStudiesRequest } from "@/actions/strapiActions";
import {
    fetchHeaderBannersRequest,
    fetchFooterBannersRequest,
  } from "@/actions/strapiActions";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo = ({ headerBanners, footerBanners }:any) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [caseStudies, setCaseStudies] = useState([]);

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

  useEffect(() => {
    dispatch(
      fetchFooterBannersRequest(
        (response:any) => { },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching footer banners.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [])

  useEffect(() => {
    const fetchReq = {
      _start: 0,
      _limit: 9,
      _sort: "published_at:DESC",
    };
    dispatch(
      fetchCaseStudiesRequest(
        fetchReq,
        (response:any) => {
          setCaseStudies(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching case studies.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  const beforeChangeStepCarousel = (from:any, to:any) => {
    setActiveStep(to);
  };

  return (
    <>
      <section className="banner-section">
        <GoogleSetup
          title={"What we do"}
          description={"From fresh ideas & bespoke design to quality production, we’ve been helping brands engage, connect, and grow for 18+ years through branded merchandise."}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles what_we_do_bubble">
                <ParallaxProvider>
                  <Parallax translateY={["150px", "0px"]}>
                    <S3Image src={"/what-we-do-header-bubble.svg"} width={288} height={274}/>
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
                <div className="col-sm-6">
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
      <section className="section_space pb-sm-0 memorable-moments-section">
        <div className="container">
          <div className="row column-reverse">
            <div className="col-sm-6">
              <h1 className="merch_title text-left">
                Memorable moments, <br /> made tangible
              </h1>
              {/* <MerchTitle title=" Memorable moments, made tangible" className="no-border title-left" /> */}
              <p className="merch_description col-sm-12 col-lg-12 text-left p-0">
                When done right, merch is a powerful tool for building your
                brand. We make sure you get it right every step of the way.
              </p>
              <p className="merch_description col-sm-12 col-lg-12 text-left p-0 mb-sm-0">
                From fresh ideas and bespoke design to quality production and
                beyond, we’ve been helping brands engage, connect and grow for
                over 18 years through merch.
              </p>
            </div>
            <div className="col-sm-6 text-right d-flex justify-content-end align-items-center">
              <S3Image src={"/whatwedoshape.svg"} className="img-fluid" width={415} height={278}/>
            </div>
          </div>
        </div>
      </section>
      <section className="memorable_moments_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mm_info_items">
                <div className="mm_item">
                  <S3Image src={"/home-category-1.jpg"} width={330} height={330}/>
                  <label>Creative & Production</label>
                  <div className="overly-info">
                    <div className="hide-info">
                      <span>Creative & Production</span>
                      <p>
                        Our in-house design and production teams bring a mix of
                        creativity and strategic thinking, connecting the right
                        gear with your brand. Helping you create merch that
                        people get excited about.
                      </p>
                      <a className="btn_white" href="/Production">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mm_item">
                  <S3Image src={"/home-category-2.jpg"} width={330} height={330}/>
                  <label>Warehouse & Distribution</label>
                  <div className="overly-info">
                    <div className="hide-info">
                      <span>Warehouse & Distribution</span>
                      <p>
                        Need space for all your awesome new merch? We can store
                        it and send it on demand. Plus, you get exclusive
                        shipping rates, so you save on delivery. <br />
                        How good’s that?
                      </p>
                      <a className="btn_white" href="/Warehouse">
                        Let`s talk logistics
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mm_item">
                  <S3Image src={"/home-category-3.jpg"} width={330} height={330}/>
                  <label>Custom Portal</label>
                  <div className="overly-info">
                    <div className="hide-info">
                      <span>Custom Portal</span>
                      <p>
                        From inventory and designs to budget and distribution –
                        consistent experiences across all your locations are at
                        your fingertips with the MyMerch portal. Just don’t let
                        all that power go to your head.
                      </p>
                      <a className="btn_white" href="/CustomPortal">
                        Tell me more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MerchMadeEasyAs
        activeStep={activeStep}
        beforeChangeStepCarousel={beforeChangeStepCarousel}
      />
      <MerchMagicInAction
        caseStudies={caseStudies}
      />
      {footerBanners && footerBanners.length > 0 && (
        <div className="footer_block section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-lg-5 d-flex flex-column justify-content-center foot_left_block">
                <MerchTitle
                  title={footerBanners[0].title}
                  className="border-left title-left"
                />
                <Link
                  href="/GetAQuote"
                  className="footer_btn_blue mt-0 d-flex ms-0"
                >
                  {footerBanners[0]?.linkButtonLabel}
                </Link>
              </div>
              <div className="col-sm-5 col-lg-7 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
                      <S3Image src={"/footer-bubbles.svg"}  width={211} height={223}/>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="footer_shape">
                  <Image alt="" src={footerBanners[0].footerImage450x250 && footerBanners[0].footerImage450x250.url} width={450} height={279}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "whatwedo"),
    footerBanners: getFooterBanners(state, "whatwedo"),
  };
}

export default connect(mapStateToProps, {})(WhatWeDo);
