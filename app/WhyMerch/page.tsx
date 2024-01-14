"use client";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Carousel, notification } from "antd";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import { fetchMomentsOfMerchMagicRequest } from "@/actions/strapiActions";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import {
    fetchHeaderBannersRequest,
    fetchFooterBannersRequest,
  } from "@/actions/strapiActions";
import Image from "next/image";

const Whymerch = ({ headerBanners, footerBanners }:any) => {
  const customiseSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const [momentsOfMerchMagic, SetMomentsOfMerchMagic] = useState([]);

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
    dispatch(
      fetchMomentsOfMerchMagicRequest(
        (response:any) => {
          SetMomentsOfMerchMagic(response);
        },
        (error:any) => {
          notification.error({
            message:
              "Error occurred while fetching moments of merch magic data.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  return (
    <>
      <section className="banner-section">
        <GoogleSetup
          title={"Why Is Branded Merchandise Important?"}
          description={"Branded merchandise elevates your brand by building awareness, creating tangible brand experiences, improving brand recall, sales & retention. Learn more."}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles why_merch_bubble">
                <ParallaxProvider>
                  <Parallax translateY={["150px", "0px"]}>
                    <S3Image src={"/why-merch-header-bubble.svg"} width={232} height={284} />
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
                <div className="col-sm-5 col-lg-6">
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
      <section className="section_space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Elevate your brand" className="no-border" />
              <p className="merch_description col-sm-12 col-lg-8 mb-0">
                Merch has a way with people (that’s why we love it). It helps
                build awareness, creates tangible brand experiences and improves
                sales and retention. Plus, it’s a great way to reach a wider
                audience and improve brand recall.
              </p>
            </div>
            <div className="col-sm-12">
              <MerchTitle
                title=" What do people really think of merch?"
                className="mb-0"
              />
            </div>
            <div className="col-sm-12 m-auto">
              <div className="percentage_block col-sm-9 col-lg-9 p-0 m-auto">
                <h1 className="percentge">
                  94<span>%</span>
                </h1>
                <p>
                  like to receive <br /> promotional product<sup>1</sup>
                </p>
              </div>
            </div>
            <div className="col-sm-12 m-auto">
              <div className="percentage_block col-sm-9 col-lg-9 p-0 m-auto">
                <h1 className="percentge">
                  40<span>%</span>
                </h1>
                <p>
                  keep promotional products for more than six years<sup>2</sup>
                </p>
              </div>
            </div>
            <div className="col-sm-12 m-auto">
              <div className="percentage_block col-sm-9 col-lg-9 p-0 m-auto">
                <h1 className="percentge">
                  76<span>%</span>
                </h1>
                <p>
                  recalled the company and message associated with a promotional
                  item<sup>3</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Get sticky with it" />
              <div className="shape7">
                <S3Image src={"/shape7.svg"} className="img-fluid m-auto" width={822} height={381} />
                <div className="bubble_shape">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
                      <S3Image src={"/bubble_shape.svg"} width={250} height={290}/>
                    </Parallax>
                  </ParallaxProvider>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <p className="merch_description col-sm-12 col-lg-8">
                Merch is super sticky. But in a good way, we promise. It is
                ranked as the most effective marketing tool to incite action
                across most generations.<sup>2</sup>
              </p>
              <p className="merch_description col-sm-12 col-lg-8">
                Done right, it can generate sales, grow followers and brand
                ambassadors and get your message in front of new audiences.
              </p>
              <p className="merch_description col-sm-12 col-lg-8">
                Build a community or lifestyle. Raise funds and show you care.
                Make a moment memorable while creating additional revenue
                streams. No matter your goals, merch will help you get there.
              </p>
            </div>
            <div className="col-sm-12 text-center p-0">
              <a
                href="/category/all"
                className="btn_blue m-0 pt-0"
                style={{ fontSize: 14, whiteSpace: "nowrap" }}
              >
                Get started
              </a>
            </div>
            <div className="col-sm-12">
              <ol className="info_list mt-4">
                <li>
                  {" "}
                  <a
                    href="https://www.ppai.org/members/research/"
                    target="_blank"
                  >
                    1. Source : Promotional Products Association International
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ama.org/marketing-news/what-are-promotional-products/"
                    target="_blank"
                  >
                    2. Source : American Marketing Association
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="https://www.godelta.com/blog/six-ways-promotional-products-can-improve-your-marketing-strategy"
                    target="_blank"
                  >
                    3. Source : Delta Marketing, 2021{" "}
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="moments_merch_magic_section section_space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle
                title="Moments of Merch magic"
                className="no-border"
              />
              <p className="merch_description col-sm-12 col-lg-8 pb-lg-5">
                We’ve had the pleasure of creating truly memorable experiences
                for great brands through merch. Here’s what they have to say.
              </p>
            </div>
            <div className="col-sm-12 col-lg-9 m-auto">
              <Carousel {...customiseSettings}>
                {momentsOfMerchMagic &&
                  momentsOfMerchMagic.length > 0 &&
                  momentsOfMerchMagic.map((mm:any,index:any) => {
                    return (
                      <div key={index}>
                        <div className="row align-items-center position-relative">
                          <div className="col-sm-6 col-lg-7 ">
                            <div className="testi_bubble">
                              <ParallaxProvider>
                                <Parallax translateY={["-100", "100"]}>
                                  <S3Image src={"/bubble_shape.svg"} />
                                </Parallax>
                              </ParallaxProvider>
                            </div>
                            <Image alt="" width={443} height={274}
                              src={mm.image450x275 && mm.image450x275.url}
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-sm-6 col-lg-5">
                            <div className="d-flex align-items-center justify-content-center flex-column text-center">
                              <Image alt="" src={mm.logo.url} width={314} height={104}/>
                              <p className="mt-4 pb-4">
                                <strong>{mm.description}</strong>
                                <span>
                                  {mm.name} - {mm.jobTitle}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Carousel>
            </div>
            <div className="col-sm-12 text-center mt-3">
              <a
                href="/caseStudies"
                className="btn_blue pt-0"
                style={{ fontSize: 14, whiteSpace: "nowrap" }}
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </section>
      {footerBanners && footerBanners.length > 0 && (
        <div className="footer_block section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-5 d-flex flex-column justify-content-center foot_left_block">
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
              <div className="col-sm-6 col-lg-7 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
                      <S3Image src={"/footer-bubbles.svg"}  width={211} height={223}/>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="footer_shape">
                  <Image alt="" width={450} height={279}
                    src={
                      footerBanners[0].footerImage450x250 &&
                      footerBanners[0].footerImage450x250.url
                    }
                  />
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
    headerBanners: getHeaderBanners(state, "whymerch"),
    footerBanners: getFooterBanners(state, "whymerch"),
  };
}

export default connect(mapStateToProps, {})(Whymerch);
