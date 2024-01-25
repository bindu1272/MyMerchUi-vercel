"use client";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Carousel, Modal, notification } from "antd";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import {
    fetchHeaderBannersRequest,
    fetchFooterBannersRequest
  } from "@/actions/strapiActions";

import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { fetchCaseStudiesRequest } from "@/actions/strapiActions";
import { CloseCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import "animate.css/animate.min.css";

const CustomPortal = ({ headerBanners, footerBanners }:any) => {
  const settings = {
    dots: true,
    className: "slider variable-width",
    centerMode: false,
    variableWidth: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPrev: true,
  };
  const CustomiseSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const dispatch = useDispatch();
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
      _limit: 5,
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

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <section className="merch-portal-top-banner">
        <GoogleSetup
          title={"Custom Portal to Manage Your Merch Order"}
          description={"The Custom Portal puts control at your fingertips with all your inventory, designs, budget, tracking and distribution in one place. Find out more."}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-5 d-flex align-items-center">
              <h1 className="title">
                {headerBanners &&
                  headerBanners.length > 0 &&
                  headerBanners[0].title}
              </h1>
            </div>
            <div className="col-sm-6 col-xl-7 text-right">
              <S3Image
                src={"/custom-portal-banner.svg"}
                onClick={openModal}
                className="mac_modal"
                width={651}
                height={419}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="merch_hub_section section_space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-0">
              <MerchTitle
                title=" Your all-in-one merch hub"
                className="no-border"
              />
              <p className="merch_description col-sm-12 col-xl-9 mb-lg-0 mb-sm-5">
                Create moments of magic through a simple, easy-to-use platform.
                <br />
                <br />
                The Custom Portal puts control at your fingertips with all your
                inventory, designs, budget, tracking and distribution in one
                place - letting you create consistent experiences across all
                your locations.
              </p>
            </div>
            <div className="col-sm-12 mt-lg-5 mb-0">
              <div className="m-auto col-xl-12 p-0 mh_info_section">
                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>
                        <S3Image src={"/icons/custom-portal-1.svg"} height={88} width={110}/>
                        </AnimationOnScroll>
                      {/* </ScrollAnimation> */}

                      <label>Your merch, your way</label>
                      <p>
                        Home to your merch, your portal comes fully customised
                        to your needs. Pick and choose features, select relevant
                        range and categories and easily update for new
                        campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>
                         <S3Image src={"/icons/custom-portal-2.svg"} height={88} width={115}/>
                         </AnimationOnScroll>
                      {/* </ScrollAnimation> */}
                      <label>Complete visibility</label>
                      <p>
                        NomoreFOMO. Get total transparency over your inventory,
                        so no one misses out or has to wait for their amazing
                        merch to drop.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-4 ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>
                        <S3Image src={"/icons/custom-portal-3.svg"} width={99} height={88}/>
                        </AnimationOnScroll>
                      {/* </ScrollAnimation> */}
                      <label>Full control</label>
                      <p>
                        Double-ups or unauthorised orders can be costly. With a
                        built-in approval system you can turn on or off, make
                        sure you only get what you really need.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

                        <S3Image src={"/icons/custom-portal-4.svg"} width={99} height={88}/>
                      {/* </ScrollAnimation> */}
                      </AnimationOnScroll>
                      <label>Delivering peace of mind</label>
                      <p>
                        Never worry about a delivery again with proof of
                        delivery tracking through the portal in real time.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={500}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={500} style={{display:"flex", justifyContent:"center"}}>

                        <S3Image src={"/icons/custom-portal-5.svg"} width={105} height={88}/>
                      {/* </ScrollAnimation> */}
                      </AnimationOnScroll>
                      <label>Easy Reporting</label>
                      <p>
                        Get useful intel to help optimise your merch collection.
                        See what’s flying off the shelves and what’s not and get
                        the low down on which states, locations or departments
                        are ordering the most with quick and easy reports.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6  ">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={600}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={600} style={{display:"flex", justifyContent:"center"}}>

                        <S3Image src={"/icons/custom-portal-6.svg"} width={93} height={88}/>
                      {/* </ScrollAnimation> */}
                      </AnimationOnScroll>
                      <label>Budget Management</label>
                      <p>
                        No more budget surprises at the end of the year. Help
                        manage spend by allocating budgets to each department or
                        territory.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 full-width">
                    <div className="mh_info_block">
                      {/* <ScrollAnimation animateIn="bounceIn" delay={700}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={700} style={{display:"flex", justifyContent:"center"}}>

                        <S3Image src={"/icons/custom-portal-7.svg"} width={100} height={88}/>
                      {/* </ScrollAnimation> */}
                      </AnimationOnScroll>
                      <label>Order and deliver seamlessly</label>
                      <p>
                        Running low on merch? Order a new batch through the
                        portal in just a few clicks. Send in bulk to one address
                        or send single packs to individual addresses. And with
                        credit card or 30 - day account options, paying for
                        merch is too easy.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 text-center mb-0">
                    <a href="/GetAQuote" className="btn_blue">
                      Contact us to find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="proof-in-the-portal-section">
        <div className="container custom_packs_section ">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="merch_title no-border">Proof is in the packs</h1>
              <p className="merch_description col-sm-12 col-lg-6">
                Here are some brands already making the most of the &apos;MyMerch magic&apos;.
                See how we’ve brought their packs to life.
              </p>
            </div>
            <div className="col-sm-12">
              <div className="custom_packs_slider">
                <Carousel autoplay arrows {...CustomiseSettings}>
                  {caseStudies &&
                    caseStudies.length > 0 &&
                    caseStudies.map((cs:any,index:any) => {
                      return (
                        <div key={index}>
                          <div className="custom_slider_info">
                            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
                              <div className="shape6">
                                <ParallaxProvider>
                                  <Parallax translateY={["-50px", "100px"]}>
                                    <S3Image src={"/shape6.svg"} width={251} height={254} />
                                  </Parallax>
                                </ParallaxProvider>
                              </div>
                              <div>
                                <Image width={1031} height={500}
                                alt=""
                                  //src={`${process.env.REACT_APP_STRAPI_API_URL}${cs.image735x325Circular && cs.image735x325Circular.url}`}
                                  src={`${cs.image735x325Circular && cs.image735x325Circular.url}`}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            </div>
            <div className="col-sm-12 text-center mt-0 p-0 pt-4">
              <a
                href="/GetAQuote"
                className="btn_blue mt-5"
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
              <div className="col-sm-7 col-lg-5 d-flex flex-column justify-content-center foot_left_block">
                <MerchTitle
                  title={footerBanners[0].title}
                  className="border-left title-left"
                />
                <a
                  href="/GetAQuote"
                  className="footer_btn_blue mt-0 d-flex ms-0"
                >
                  {footerBanners[0].linkButtonLabel}
                </a>
              </div>
              <div className="col-sm-5 col-lg-7 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
                      <S3Image src={"/footer-bubbles.svg"} width={211} height={223} />
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
      <div>
        {modal ? (
          <section className="modal_bg">
            <div className="modal_align">
              <div className="modal_content" modal={modal}>
                <div className="modal_video-align" onClick={openModal}>
                  <div className="modal_close" onClick={setModal}>
                    <CloseCircleOutlined />
                  </div>
                  <iframe
                    className="modal_video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="100%"
                    height="500"
                    src="https://dev-assets.mymerch.com.au/src/videos/mymerch_portal_v03.mp4"
                    title="Manage your merch with Custom Portal"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "customportal"),
    footerBanners: getFooterBanners(state, "customportal"),
  };
}

export default connect(mapStateToProps, {})(CustomPortal);
