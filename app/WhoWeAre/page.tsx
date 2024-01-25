"use client";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// import ScrollAnimation from "react-animate-on-scroll";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Carousel, notification } from "antd";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import { fetchMerchTeamMembersRequest } from "@/actions/strapiActions";
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
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const WhoWeAre = ({ headerBanners, footerBanners }:any) => {
  const settings = {
    dots: false,
    className: "slider variable-width",
    centerMode: false,
    variableWidth: false,
    infinite: false,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const [teamMembers, SetTeamMembers] = useState([]);

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
      _sort: "displayOrder:ASC",
    };
    dispatch(
      fetchMerchTeamMembersRequest(
        fetchReq,
        (response:any) => {
          SetTeamMembers(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching merch team members.",
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
          title={"Who We Are"}
          description={"MyMerch has been supplying custom merchandise & promotional products to brands in Australia for 18 years. Explore more about the team behind the merch."}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles">
                <ParallaxProvider>
                  <Parallax translateY={["150px", "0px"]}>
                    <S3Image src={"/who-we-are-header-bubble.svg"} width={305} height={277}/>
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
                <div className="col-sm-6 col-lg-6">
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
      <section className="we_love_merch_section section_space pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <MerchTitle
                title=" We love merch"
                className="no-border title-left d-none d-sm-block"
              />
            </div>
            <div className="col-sm-5 col-lg-6 position-relative d-flex justify-content-center">
              <S3Image src={"/we-love-shape.svg"} className="img-fluid"  width={436} height={429}/>
              <div className="team_bubble">
                <ParallaxProvider>
                  <Parallax translateY={["-0px", "-300px"]}>
                    <S3Image src={"/we-love-bubble.svg"} width={296} height={187}/>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="col-sm-7 col-lg-6">
              <MerchTitle
                title="We love merch"
                className="no-border title-left d-block d-sm-none"
              />
              <p className="merch_description text-left">
                18 years. That’s how long we’ve been obsessed with matching the
                right merch with brands and their goals. We’ve picked up a thing
                or two over the years and decided to put an end to boring and
                complicated merch once and for all.
              </p>
              <p className="merch_description text-left">
                Today we offer a refined, thoughtfully selected and regularly
                updated range of quality, on-trend products to make sure you
                always deliver on delight.
              </p>
              <p className="merch_description text-left">
                Our simplified process saves you time so you can focus on what
                really matters: building your brand. And our easy-to-use
                platform makes managing your merch super efficient and
                effective. We can’t wait to make your brand goals come to life
                through merch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our_values_section section_space pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Our values" />
              <p className="merch_description ov_intro_copy">
                Making a lasting impression through merch doesn’t have to be
                hard. With quality, hand-picked items and the mad skills of our
                expert team behind you, it can be as easy as four little steps.
              </p>
            </div>
            <div className="col-sm-12 text-center">
              <div className="our_values_info_block">
                <div className="ov_details">
                  {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                    <S3Image src={"/simplicity.svg"} width={106} height={126}/>
                  {/* </ScrollAnimation> */}
                  </AnimationOnScroll>
                  <label>Simplicity</label>
                  <p>
                    We ’re all about making things simpler in today’s complex
                    world
                  </p>
                </div>
                <div className="ov_details">
                  {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

                    <S3Image src={"/obsessed.svg"} width={124} height={124} />
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label>Obsessed</label>
                  <p>
                    With quality, our craft, customers, nailing briefs and
                    making merch magic happen.
                  </p>
                </div>
              </div>
              <div className="our_values_info_block">
                <div className="ov_details">
                  {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

                    <S3Image src={"/customer-first.svg"} width={113} height={122}/>
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label>Customer-first </label>
                  <p>
                    As an extension of our customers, we put your needs first,
                    guiding you to make strategic decisions that will lead to
                    succeed.
                  </p>
                </div>
                <div className="ov_details">
              <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

                  {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                    <S3Image src={"/thoughtful.svg"} width={97} height={122}/>
                  {/* </ScrollAnimation> */}
                  </AnimationOnScroll>
                  <label>Thoughtful</label>
                  <p>
                    We carefully consider every detail to make sure we get it
                    right – from creating memorable moments to building lasting
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="we_put_the_merch_section section_space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="We put the ‘Mmmm’ in merch" />
              <p className="merch_description col-sm-12 col-lg-8 mb-2">
                From quality products to memorable moments, making merch magic
                is easy with MyMerch.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="curated_packs_item">
                <S3Image src={"/who-we-are-mmm-1.svg"} width={329} height={329}/>
                <label>Merch that delivers. Every time.</label>
                <div className="overly-info">
                  <div className="hide-info">
                    <span>Merch that delivers. Every time.</span>
                    <p>
                      Excite and engage your customers with on-trend, quality
                      merch – individually selected for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="curated_packs_item">
                <S3Image src={"/who-we-are-mmm-2.svg"} width={329} height={329}/>
                <label>Great merch, made easy</label>
                <div className="overly-info">
                  <div className="hide-info">
                    <span>Great merch, made easy</span>
                    <p>
                      All your merch needs in one place. From design and
                      production to warehousing and distribution, we take care
                      of any or every step of the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="curated_packs_item">
                <S3Image src={"/who-we-are-mmm-3.svg"} width={329} height={329}/>
                <label>Make merch a no-brainer</label>
                <div className="overly-info">
                  <div className="hide-info">
                    <span>Make merch a no-brainer</span>
                    <p>
                      Drive measurable impact through swag by leveraging the mad
                      skills of our in-house design and production team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team_members_section section_space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-10 m-auto">
              <Carousel {...settings}>
                {teamMembers &&
                  teamMembers.length > 0 &&
                  teamMembers.map((tm:any,index:any) => {
                    return (
                      <div className="team_details" key={index}>
                        <Image alt="" width={160} height={160}
                          //src={`${process.env.REACT_APP_STRAPI_API_URL}${tm.profilePicture160x160.url}`}
                          src={`${tm.profilePicture160x160.url}`}
                        />
                        <h1>{tm.name}</h1>
                        <h2>{tm.jobTitle}</h2>
                        <p>{tm.jobDescription}</p>
                        <div className="social_media">
                          {tm.linkedInProfileURL && <a
                            href={tm.linkedInProfileURL}
                          >
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                          }
                          {/* {tm.twitterProfileURL && <a
                            href={tm.twitterProfileURL}
                          >
                            <i
                              className="fa fa-twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                          } */}
                          {tm.email && <a href={`mailto:${tm.email}`}>
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>
                          </a>
                          }
                        </div>
                      </div>
                    );
                  })}
              </Carousel>
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
                  href={footerBanners[0].linkButtonURL}
                  className="footer_btn_blue mt-0 d-flex ms-0"
                >
                  {footerBanners[0].linkButtonLabel}
                </a>
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
    headerBanners: getHeaderBanners(state, "whoweare"),
    footerBanners: getFooterBanners(state, "whoweare"),
  };
}

export default connect(mapStateToProps, {})(WhoWeAre);
