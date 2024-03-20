"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import ScrollAnimation from "react-animate-on-scroll";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Carousel } from "antd";
import S3Image from "@/common/S3Image";
import {useDispatch } from "react-redux";

import MerchTitle from "@/components/MerchTitle";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import {
    fetchHeaderBannersRequest,
    fetchFooterBannersRequest,
  } from "@/actions/strapiActions";
import { notification } from "antd";
import Image from "next/image";
import "animate.css/animate.min.css";



const Warehouse = ({ headerBanners, footerBanners }:any) => {
  useEffect(() => {
    trackPageViewInGoogle();
  }, []);
  const dispatch = useDispatch();


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
    <>
      <section className="banner-section">
        <GoogleSetup
          title={"Merchandise Warehouse & Distributor"}
          description={"We can store your branded merchandise for all your locations – and send them out at a click of a button. Exclusive shipping rates & save on delivery."}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles ware_house_banner">
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
                <div className="col-sm-6 col-lg-5">
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
      <section className="section_space" style={{backgroundColor:"white"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Store. Send. Save." className="no-border" />
              <p className="merch_description col-sm-12 col-lg-9">
                Don’t let space limit your brand. We can store your gear for all
                your locations – and send them out at a click of a button. Plus,
                you get exclusive shipping rates, so you also save on delivery.
                Sweet as!
              </p>
            </div>
            <div className="col-sm-7 col-lg-9 m-auto mt-lg-4 sss_section">
              <div className="store_send_save_section">
                <div>
                  <h1>
                    10<span className="span_item_10k">K</span>
                  </h1>
                </div>
                <div>
                  <p>
                    Number of items we ship from our MyMerch warehouse every day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="heavy_lifting_section section_space">
        <div className="container hl_info_section">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="No heavy lifting" className="no-border" />
              <p className="merch_description col-sm-12 col-lg-12 pb-4">
                Leave the hassle of storage and delivery to us. We’ll do the
                hard work while you reap the benefits. We’re good like that.
              </p>
            </div>
          </div>
          <div className="grid_info_section mt-sm-4">
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-1.svg"} width={71} height={88} />
                </AnimationOnScroll>
                <h1>Store your merch securely</h1>
              {/* </ScrollAnimation> */}
              <p>
                Save space and store all your merch in one of our two secure
                warehouse facilities . With monthly inventory control and all
                your gear palletised and packed to specifications, your merch is
                in save hands.
              </p>
            </div>
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-2.svg"} width={107} height={86}/>
                </AnimationOnScroll>
                <h1>Saving you time</h1>
              {/* </ScrollAnimation> */}
              <p>
                With us taking care of the logistics, you have more time to
                spend on nurturing your brand. Or playing ping-pong. Your
                choice.
              </p>
            </div>
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-3.svg"} width={72} height={88} />
                </AnimationOnScroll>
                <h1>Feel wrapped in confidence</h1>
              {/* </ScrollAnimation> */}
              <p>
                We carefully pick and pack your curated packs, special campaigns
                and bulk order to make sure everything arrives safe and sound,
                ready to delight.
              </p>
            </div>
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-4.svg"}  width={72} height={88}/>
                </AnimationOnScroll>
                <h1>Save on shipping</h1>
              {/* </ScrollAnimation> */}
              <p>
                With exclusive shipping rates, you save even more with every
                delivery.
              </p>
            </div>
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={500}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={500} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-5.svg"} width={89} height={88}/>
                </AnimationOnScroll>
                <h1>Stretch your budget</h1>
              {/* </ScrollAnimation> */}
              <p>
                Storing your merch in our warehouse means more room for that
                ping-pong table. But you can also save through economies of
                scale by buying bulk. Win-win.
              </p>
            </div>
            <div className="info_block">
              {/* <ScrollAnimation animateIn="bounceIn" delay={600}> */}
              <AnimationOnScroll animateIn="animate__bounceIn" delay={600} style={{display:"flex", justifyContent:"center"}}>

                <S3Image src={"/icons/warehouse-6.svg"} width={74} height={88}/>
                </AnimationOnScroll>
                <h1>Deliver anywhere</h1>
              {/* </ScrollAnimation> */}
              <p>
                We can send your merch to one person or to multiple locations in
                Australia or anywhere in the world.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 text-center mt-4 p-0">
              <a
                href="/GetAQuote"
                className="btn_blue mt-0"
                style={{ fontSize: 14, whiteSpace: "nowrap" }}
              >
                Get in touch for special rates now
              </a>
            </div>
          </div>
        </div>
      </section>
      {footerBanners && footerBanners.length > 0 && (
        <div className="footer_block section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-lg-6 d-flex flex-column justify-content-center foot_left_block">
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
              <div className="col-sm-5 col-lg-6 position-relative foot_right_block">
                <div className="footer_bubbles">
                  <ParallaxProvider>
                    <Parallax translateY={["-50", "50"]}>
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
    headerBanners: getHeaderBanners(state, "warehouseanddistribution"),
    footerBanners: getFooterBanners(state, "warehouseanddistribution"),
  };
}

export default connect(mapStateToProps, {})(Warehouse);
