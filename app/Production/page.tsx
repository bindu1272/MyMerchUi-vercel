"use client";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
// import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Carousel, notification } from "antd";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
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
import "animate.css/animate.min.css";


const Production = ({ headerBanners, footerBanners }:any) => {
  const settings = {
    dots: true,
    className: "slider variable-width",
    centerMode: false,
    variableWidth: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPrev: true,
  };
  const CustomiseSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const history = useRouter();
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

  return (
    <>
      <section className="banner-section production_banner">
        <GoogleSetup
          title={"Custom Merchandise Design & Production"}
          description={"Design your own merchandise to promote your brand with MyMerch today. We are the leading company in custom merchandise design and production in Australia."}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles">
                <ParallaxProvider>
                  <Parallax translateY={["260px", "0px"]}>
                    <S3Image src={"/production-header-bubble.svg"} width={306} height={284}/>
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
      <section className="csq_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle
                title="Creative. Strategic. Quality. "
                className="no-border"
              />
              <p className="merch_description col-sm-12 col-lg-8">
                With bespoke designs that are unique to your brand, people will
                be lining up to get their hands on your merch. And with
                first-rate quality controls through our in-house production
                team, they’ll stay engaged long after the moment of unboxing.
              </p>
              <p className="merch_description col-sm-12 col-lg-8">
                Leverage our team’s experience and expertise to design and
                produce merch that looks and feels amazing, and is based on
                strategic insights, designed to engage your audiences.
              </p>
            </div>
            <div className="col-sm-12">
              <div className="cqa_our_commitement_section">
                <div className="mobile mobile_cqa_section">
                  <div className="row">
                    <div className="col-sm-12 ">
                      <div className="cqa_info_section">
                        <div className="cqa_our_commitement_info">
                          {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>
                            <S3Image
                              src={"/icons/access-to-insider-intel.svg"}
                            />
                          {/* </ScrollAnimation> */}
                          </AnimationOnScroll>
                          <label>Access to insider intel</label>
                          <p>
                            With over two decades in the biz, we’ve become
                            experts in every step of the merch process. We have
                            the knowledge and skills you need to grow your brand
                            with merch.
                          </p>
                        </div>
                        <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

                          {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
                            <S3Image src={"/icons/elevate-your-brand.svg"} />
                          {/* </ScrollAnimation> */}
                          </AnimationOnScroll>
                          <label>Elevate your brand</label>
                          <p>
                            Our in-house designers specialise in creating
                            beautiful on-trend merch that gets people excited.
                            They are masters in bespoke design that’s true to
                            your brand and gets your message across.
                          </p>
                        </div>
                        <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                          {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
                            <S3Image
                              src={"/icons/always-deliver-on-quality.svg"}
                            />
                          {/* </ScrollAnimation> */}
                          </AnimationOnScroll>
                          <label>Always deliver on quality</label>
                          <p>
                            Our in - house team manages every step of the
                            production process with stringent quality controls –
                            and mean time management skill . So you know your
                            merch is in the right hands and will be ready on
                            time.
                          </p>
                        </div>
                        <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                          {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                            <S3Image src={"/icons/merch-with-confidence.svg"}  />
                          {/* </ScrollAnimation> */}
                          </AnimationOnScroll>
                          <label>Merch with confidence</label>
                          <p>
                            Experienced and tried and tested supply partners
                            mean we bring you the best products at the best
                            prices and brand results, every time. And our
                            trusted manufacturers in Australia and offshore
                            offer full traceability , so you can be confident
                            your merch meets your standards.
                          </p>
                        </div>
                        <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                          {/* <ScrollAnimation animateIn="bounceIn" delay={500}> */}
                            <S3Image src={"/icons/good-for-your-brand.svg"}  />
                          {/* </ScrollAnimation> */}
                          </AnimationOnScroll>
                          <label>Good for your brand, good for the world</label>
                          <p>
                            Our products are responsibly sourced and
                            sustainable, which means they not only help your
                            business grow – they also make the world a littl e
                            better . All our factories are Sedex approved and
                            our supply chain is accredited with: WRAP, Fair
                            Labour Association, EKO Sustainable Textiles and
                            Confidence in Textiles.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-12 text-center p-0">
                        <a
                          href="/GetAQuote"
                          className="btn_blue mt-3"
                          style={{ fontSize: 14, whiteSpace: "nowrap" }}
                        >
                          Get started now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desktop">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                        {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
                          <S3Image src={"/icons/access-to-insider-intel.svg"} width={112} height={80}/>
                        {/* </ScrollAnimation> */}
                        </AnimationOnScroll>
                        <label>Access to insider intel</label>
                        <p>
                          With over two decades in the biz, we’ve become experts
                          in every step of the merch process. We have the
                          knowledge and skills you need to grow your brand with
                          merch.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

                        {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
                          <S3Image src={"/icons/elevate-your-brand.svg"} width={67} height={80}/>
                        {/* </ScrollAnimation> */}
                        </AnimationOnScroll>
                        <label>Elevate your brand</label>

                        <p>
                          Our in-house designers specialise in creating
                          beautiful on-trend merch that gets people excited.
                          They are masters in bespoke design that’s true to your
                          brand and gets your message across.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

                        {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
                          <S3Image
                            src={"/icons/always-deliver-on-quality.svg"} width={77} height={80}
                          />
                        {/* </ScrollAnimation> */}
                        </AnimationOnScroll>
                        <label>Always deliver on quality</label>

                        <p>
                          Our in - house team manages every step of the
                          production process with stringent quality controls –
                          and mean time management skill . So you know your
                          merch is in the right hands and will be ready on time.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

                        {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                          <S3Image src={"/icons/merch-with-confidence.svg"} width={79} height={80}/>
                        {/* </ScrollAnimation> */}
                        </AnimationOnScroll>
                        <label>Merch with confidence</label>

                        <p>
                          Experienced and tried and tested supply partners mean
                          we bring you the best products at the best prices and
                          brand results, every time. And our trusted
                          manufacturers in Australia and offshore offer full
                          traceability , so you can be confident your merch
                          meets your standards.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cqa_our_commitement_info">
                      <AnimationOnScroll animateIn="animate__bounceIn" delay={500} style={{display:"flex", justifyContent:"center"}}>

                        {/* <ScrollAnimation animateIn="bounceIn" delay={500}> */}
                          <S3Image src={"/icons/good-for-your-brand.svg"} width={86} height={80}/>
                        {/* </ScrollAnimation> */}
                        </AnimationOnScroll>
                        <label>Good for your brand, good for the world</label>

                        <p>
                          Our products are responsibly sourced and sustainable,
                          which means they not only help your business grow –
                          they also make the world a littl e better . All our
                          factories are Sedex approved and our supply chain is
                          accredited with: WRAP, Fair Labour Association, EKO
                          Sustainable Textiles and Confidence in Textiles.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 text-center">
                      <a href="/GetAQuote" className="btn_blue">
                        Get started now
                      </a>
                    </div>
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
              <MerchTitle title="Merch magic in action" className="no-border" />
              <p className="merch_description col-sm-12 col-lg-8">
                See what’s hot in merch right now and check out how our clients
                have been using swag to engage and delight their audiences and
                grow their brands.
              </p>
            </div>
            <div className="col-sm-12">
              <div className="custom_packs_slider">
                <Carousel {...CustomiseSettings}>
                  {caseStudies &&
                    caseStudies.length > 0 &&
                    caseStudies.map((cs:any,index:any) => {
                      return (
                        <div key={index}>
                          <div className="custom_slider_info">
                            <div className="col-sm-12 col-lg-12 d-flex justify-content-center">
                              <div className="shape6">
                                <ParallaxProvider>
                                  <Parallax translateY={["-50px", "50px"]}>
                                    <S3Image src={"/shape6.svg"} width={251} height={254}/>
                                  </Parallax>
                                </ParallaxProvider>
                              </div>
                              <div>
                                <Image alt="" width={cs.image735x325Circular?.width} height={cs.image735x325Circular?.height}
                                  //src={`${process.env.REACT_APP_STRAPI_API_URL}${cs.image735x325Circular && cs.image735x325Circular.url}`}
                                  src={`${cs.image735x325Circular && cs.image735x325Circular.url}`}
                                  className="img-fluid"
                                  onClick={() =>
                                    history.push(`/caseStudyDetails/${cs.slug}`)
                                  }
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
            <div className="col-sm-12 text-center mt-5 p-0">
              <a
                href="/caseStudies"
                className="btn_blue"
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
                  href={footerBanners[0].linkButtonURL}
                  className="footer_btn_blue mt-0 d-flex ms-0"
                >
                  {footerBanners[0].linkButtonLabel}
                </a>
              </div>
              <div className="col-sm-5 col-lg-7 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-20", "20"]}>
                      <S3Image src={"/footer-bubbles.svg"} width={211} height={223}/>
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
    headerBanners: getHeaderBanners(state, "creativeandproduction"),
    footerBanners: getFooterBanners(state, "creativeandproduction"),
  };
}

export default connect(mapStateToProps, {})(Production);
