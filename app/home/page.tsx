"use client";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { notification } from "antd";
import Slider from "react-slick";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import MerchSimplified from "@/components/MerchSimplified";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { fetchBrandsRequest } from "@/actions/strapiActions";
import Image from "next/image";
import {
  fetchHeaderBannersRequest,
  fetchFooterBannersRequest,
} from "@/actions/strapiActions";

const HomePage = ({ headerBanners, footerBanners }:any) => {
  const headerBannerSliderSettings = {
    dots: true,
    arrows: false,
    //fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const brandsSliderSettings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const [brandsImages, setBrandsImages] = useState([]);

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  useEffect(() => {
    dispatch(
      fetchBrandsRequest(
        (response:any) => {
          setBrandsImages(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching brands.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
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
  return (
    <div>
      <div className="container position-relative banner_shape">
        <div className="row">
          <div className="col-sm-12">
            <div className="home_banner_bubble">
              <ParallaxProvider>
                <Parallax translateY={["540px", "0px"]}>
                  <S3Image src={"/home-page-header-bubble.svg"} width={304} height={306}/>
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <section className="banner-section home_slider">
        {/* <GoogleSetup
          title={"Australia's Leading Promotional Products & Branded Merchandise Supplier"}
          description={"MyMerch is the trusted supplier of promotional products and branded merchandise for brands throughout Australia. Design & order your custom merch today."}
        /> */}
        
<Slider {...headerBannerSliderSettings}>
          {headerBanners &&
            headerBanners.length > 0 &&
            headerBanners.map((hb:any,index:any) => {
              return (
                <div className="carousel-item " key={index}>
                  <div
                    className="container"
                    style={{ position: "relative", zIndex: 9999 }}
                  >
                    <div className="row">
                      <div className="col-sm-5 col-lg-6">
                        <div className="slider_info">
                          <h1 className="heading">{hb.title}</h1>
                          <div className="banner_divider"></div>
                          <p>{hb.description}</p>
                          {/* <a
                            href={hb.linkButtonURL}
                            className="btn-medium btn-bg-blue border-radius-md"
                          >
                            {hb.linkButtonLabel}
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="desktop_banner_img"
                    style={{
                      backgroundImage: `url(${hb.desktopImage1580x455 && hb.desktopImage1580x455.url
                        })`,
                    }}
                  ></div>
                  <div
                    className="mobile_banner_img"
                    style={{
                      backgroundImage: `url(${hb.mobileImage430x260 && hb.mobileImage430x260.url
                        })`,
                    }}
                  ></div>
                </div>
              );
            })}
        </Slider>
      
      </section>
      <section className="brands_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Brands we’ve worked with:</h1>
              <Slider {...brandsSliderSettings}>
                {brandsImages &&
                  brandsImages?.length > 0 &&
                  brandsImages?.map((bi:any,index:any) => {
                    return (
                      <div className="carousel-item " key={index}>
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-12">
                              <Image
                                src={
                                  bi?.mobileImage400x40 &&
                                  bi?.mobileImage400x40?.url
                                }
                                className="img-fluid d-block d-sm-none"
                                alt=""
                                // layout="fill"
                                width={200}
                                height={100}
                              />
                              <Image
                                src={
                                  bi?.smallDesktopImage660x60 &&
                                  bi?.smallDesktopImage660x60?.url
                                }
                                className="img-fluid d-none d-sm-block d-lg-none"
                                alt=""
                                // layout="fill"
                                width={800}
                                height={300}

                              />
                              <Image
                                src={
                                  bi?.desktopImage1050x75 &&
                                  bi?.desktopImage1050x75?.url
                                }
                                className="img-fluid d-none d-lg-block"
                                alt=""
                                // layout="fill"
                                width={1002}
                                height={500}

                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
           
            </div>
          </div>
        </div>
      </section>
      <section className="merch-crew-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Your go-to merch crew" className="no-border" />
              <p className="merch_description col-sm-12 col-lg-8">
                At MyMerch, we’re ready to make your merch dreams happen. Our
                specialist designers and in-house production crew help you
                create magical moments for your people. And to save you space
                and the hassle, we can store your gear and send it anywhere at
                the click of a button. You can access all of this and more on an
                easy-to-use portal that lets you manage, track and nail merch
                across all your locations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="grid_items">
                <div className="cs_list_items">
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-1.jpg"} />
                    <h2 className="main_card_title">Creative & Production</h2>
                    <div className="overly-info">
                      <h2 className="card_title">Creative & Production</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          Our in-house design and production teams bring a mix
                          of creativity and strategic thinking, connecting the
                          right gear with your brand. Helping you create merch
                          that people get excited about.
                        </p>
                        <a href="/Production" className="btn_white">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-2.jpg"} />
                    <h2 className="main_card_title">
                      Warehouse & Distribution
                    </h2>
                    <div className="overly-info">
                      <h2 className="card_title">Warehouse & Distribution</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          Need space for all your awesome new merch? We can
                          store it and send it on demand. Plus, you get
                          exclusive shipping rates, so you save on delivery. How
                          good’s that?
                        </p>
                        <a href="/Warehouse" className="btn_white">
                          Let`&apos;`s talk logistics
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-3.jpg"} />
                    <h2 className="main_card_title">Custom Portal</h2>
                    <div className="overly-info">
                      <h2 className="card_title">Custom Portal</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          From inventory and designs to budget and distribution
                          – consistent experiences across all your locations are
                          at your fingertips with the MyMerch portal. Just don’t
                          let all that power go to your head.
                        </p>
                        <a href="/CustomPortal" className="btn_white">
                          Tell me more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-4.jpg"} />
                    <h2 className="main_card_title">Custom Packs</h2>
                    <div className="overly-info">
                      <h2 className="card_title">Custom Packs</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          When you want to make merch uniquely yours, custom
                          packs are the way to go. Create bespoke moments by
                          curating the perfect items, beautifully packaged and
                          delivered direct.
                        </p>
                        <a href="/CustomPacks" className="btn_white">
                          Start creating
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-5.jpg"} />
                    <h2 className="main_card_title">Curated Packs</h2>
                    <div className="overly-info">
                      <h2 className="card_title">Curated Packs</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          When you want quality, on-trend merch but are short on
                          time, our curated packs have you covered. Each item is
                          carefully considered and packaged beautifully to suit
                          any occasion.
                        </p>
                        <a href="/AllMerch" className="btn_white">
                          Find your pack
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cs-item-info item_card">
                    <S3Image src={"/home-category-6.jpg"} />
                    <h2 className="main_card_title">All Merch</h2>
                    <div className="overly-info">
                      <h2 className="card_title">All Merch</h2>
                      <div className="hide-info">
                        <p className="card_description">
                          Welcome to the home of quality merch. We regularly
                          update our curated range to reflect the latest trends
                          and carefully select, try and test every item.
                        </p>
                        <a href="/AllMerch" className="btn_white">
                          Check out our gear
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="merch-simplified-section section_space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Merch, simplified" />
              <p className="merch_description col-sm-12 col-lg-6">
                Making a lasting impression through merch doesn’t have to be
                hard. With quality, hand-picked items and the mad skills of our
                expert team behind you, it can be as easy as four little steps.
              </p>
            </div>
          </div>
          <div className="row home_merch_simplified_section">
            <div className="col-sm-12 col-lg-10 m-auto">
              <div className="simplified_easy_arrows">
                <MerchSimplified />
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <a href="/WhatWeDo" className="btn_blue">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="edc_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle
                title="Engage. Delight. Connect."
                className="no-border"
              />
              <p className="merch_description col-sm-12 col-lg-8">
                From making first impressions count to elevating brand awareness
                and sales, merch is an important part of an effective marketing
                strategy. Best of all, it’s cost-effective, looks great and
                helps your brand reach a broader audience.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 ">
              <div className="edc_main_section">
                <div className="edc_shape">
                  <S3Image src={"/edc-frame.svg"} className="img-fluid" width={487} height={296}/>
                </div>
                <div className="edc_info_block">
                  <h1 className="percentge">
                    76<span>%</span>
                  </h1>
                  <p>
                    of people who received promotional items remember the
                    product, the brand and the message associated with the
                    merch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <a href="/WhyMerch" className="btn_blue mt-5">
                Learn why merch works
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <MerchTitle title="Your go-to merch crew" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center position-relative merch_crew_block">
              <div className="">
                <div className="shape2">
                  <ParallaxProvider>
                    <Parallax translateY={["-100", "100"]}>
                      <S3Image src={"/shape2.svg"} className="img-fluid"  width={294} height={325}/>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="shape1">
                  <S3Image
                    src={"/your-go-to-merch-crew.png"}
                    className="img-fluid"
                    width={916}
                    height={403}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-10 m-auto col-lg-7">
              <p className="merch_description">
                We’re creative designers, production experts and trend spotters,
                refining our merch obsession over the past two decades.
              </p>
              <p className="merch_description mb-0">
                We want to shake things up a little. And by a little, we mean a
                LOT. <br /> Turning a traditionally boring and complex process
                into a thoughtful, fun and exciting experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {footerBanners && footerBanners?.length > 0 && (
        <div className="footer_block section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-lg-5 col-xl-4 d-flex flex-column justify-content-center foot_left_block">
                <MerchTitle
                  title={footerBanners[0].title}
                  className="border-left title-left"
                />
                <a
                  href={footerBanners[0].linkButtonURL}
                  className="footer_btn_blue mt-0 d-flex ms-0"
                >
                  {footerBanners[0].linkButtonLabel}
                </a>
              </div>
              <div className="col-sm-7 col-lg-7 col-xl-7 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
                      <S3Image src={"/footer-bubbles.svg"} 
                      width={450}
                      height={279}
                      />
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="footer_shape">
                  <Image
                    src={
                      footerBanners[0].footerImage450x250 &&
                      footerBanners[0].footerImage450x250.url
                    }
                    alt=""
                    width={450}
                    height={279}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "home"),
    footerBanners: getFooterBanners(state, "home"),
  };
}

export default connect(mapStateToProps, {})(HomePage);
