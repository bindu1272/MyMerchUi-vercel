"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useDispatch } from "react-redux";
// import ScrollAnimation from "react-animate-on-scroll";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Carousel } from "antd";
import S3Image from "@/common/S3Image";
import MerchTitle from "@/components/MerchTitle";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import {
  getHeaderBanners,
  getFooterBanners,
} from "@/selectors/bannerSelector";
import {
    fetchHeaderBannersRequest,
    fetchFooterBannersRequest,
  } from "@/actions/strapiActions";
import { notification } from "antd";
import Image from "next/image";
import "animate.css/animate.min.css";



const Sustainability = ({ headerBanners, footerBanners }:any) => {
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
      <div>
        <GoogleSetup
          title={"Sustainability"}
          description={"MyMerch is committed to sustainability with eco-friendly printing, sustainable supply chain, paper & cardboard recycling, and power consumption reduction."}
        />
        <section className="banner-section">
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-12">
                <div className="banner_bubbles sustainability_bubble">
                  <ParallaxProvider>
                    <Parallax translateY={["150px", "0px"]}>
                      <S3Image src={"/inner-banner-shape.svg"} width={308} height={292}/>
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
                  <div className="col-sm-5">
                    <div className="slider_info ">
                      <h1 className="heading sustainability_title">
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
        <section className="sustainability_section section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <MerchTitle
                  title="Minimising our impact"
                  className="no-border"
                />
                <p className="merch_description col-sm-12 col-lg-8 mb-0">
                  At MyMerch, we understand our role in looking after the planet
                  and its inhabitants. That’s why we want to improve every part
                  of our operations to minimise our impact, and make the world a
                  better place for everyone.
                </p>
              </div>
            </div>
            <div className="row">
              <MerchTitle title="Our commitment" />
            </div>
            <div className="our_commitement_section">
              <div className="our_commitement_info">
                <div className="img_title">
                <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                  {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
                    <S3Image
                      src={"/sustainability/Eco-friendly-products.svg"}
                      width={136} height={80}
                    />
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label className="max-width">Eco-friendly products</label>
                </div>
                <p>
                  We offer high quality, environmentally friendly and ethically
                  responsible products, so you can rest easy knowing your merch
                  is safe for the planet – and people.
                </p>
              </div>
              <div className="our_commitement_info">
                <div className="img_title">
                  {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
                  <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                    <S3Image src={"/sustainability/Reducing-waste.svg"} width={135} height={80}/>
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label className="max-width">Reducing waste</label>
                </div>
                <p>
                  We reduce the amount of space our waste takes up with our
                  onsite compactor - reducing collection requirements and CO2
                  emissions.
                </p>
              </div>
              <div className="our_commitement_info full-width">
                <div className="img_title">
                <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                  {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
                    <S3Image
                      src={"/sustainability/Paper-and-cardboard-recycling.svg"}
                      width={114} height={80}
                    />
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label>Paper and cardboard recycling</label>
                </div>
                <p>
                  Local paper mills recycle our paper waste, which gets a second
                  (or third) life as Premium Paper Products. We also shred our
                  waste cardboard and turn it into two types of packaging
                  fillers.
                </p>
              </div>
              <div className="our_commitement_info w-sm-50">
                <div className="img_title">
                <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                  {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                    <S3Image
                      src={"/sustainability/Sustainable-supply-chain.svg"}
                      width={136} height={80}
                    />
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label>Sustainable supply chain</label>
                </div>
                <p>
                  We actively seek out partners that share our values around
                  quality, sustainability and social responsibility. Through
                  these partnerships we’re working towards creating a fully
                  sustainable supply chain.
                </p>
              </div>
              <div className="our_commitement_info w-sm-50 w-xs-100">
                <div className="img_title">
                  {/* <ScrollAnimation animateIn="bounceIn" delay={500}> */}
                  <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                    <S3Image src={"/sustainability/Cutting-down-kWh.svg"} width={114} height={80}/>
                    </AnimationOnScroll>
                  {/* </ScrollAnimation> */}
                  <label style={{ whiteSpace: "nowrap" }}>
                    Cutting down kWh
                  </label>
                </div>
                <p>
                  Using industry leading LED curing technology during production
                  reduces our power consumption from 10kWh to 2.9kWh. While our
                  low power lighting program throughout our warehouses and
                  offices means our lighting is 65% more efficient than
                  standard.
                </p>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <a href="/category/eco" className="btn_blue">
                Check out our range of sustainable merch
              </a>
            </div>
            <div className="row">
              <MerchTitle title="Responsible partners" />
            </div>
            <div className="row responsible_partners">
              <div className="col-sm-6 text-center d-flex flex-column align-items-center">
                <div className="rp_img">
                  <S3Image src={"/partners/partner1.svg"} width={242} height={60}/>
                </div>
                <label>Quality, responsible apparel</label>
                <p>
                  Doing the right thing doesn’t mean we have to compromise on
                  quality. That’s why we’ve partnered with AS Colour for our
                  apparel. With exceptional quality, sustainable materials and a
                  strong commitment to ethical practices and processes across
                  every step of production, it takes social responsibility as
                  seriously as we do.{" "}
                </p>
              </div>
              <div className="col-sm-6 text-center d-flex flex-column align-items-center">
                <div className="rp_img">
                  <S3Image src={"/partners/partner2.svg"} width={313} height={105}/>
                </div>
                <label>Ethical manufacturing practices</label>
                <p>
                  By producing timeless, quality apparel in a way that cares for
                  people, conserves the environment and creates stronger
                  communities, Genuine Responsibility improves the world one
                  item at a time. And with control over almost the entire
                  manufacturing process, it applies responsible practices across
                  their supply chain. That’s why we love working with them.{" "}
                </p>
              </div>
              <div className="col-sm-6 text-center d-flex flex-column align-items-center">
                <div className="rp_img">
                  <S3Image src={"/partners/partner3.svg"} width={270} height={50} />
                </div>
                <label>Eco-friendly printing</label>
                <p>
                  Getting printing right is super important for us. So being
                  able to partner with a quality printer that not only takes
                  pride in their work, but does it with minimal impact on the
                  environment has been a game-changer. From water-based inks and
                  responsible packaging to reducing plastic waste and an
                  impressive array of upcycled/recycled office furniture, Screen
                  Print is the perfect eco-friendly partner.{" "}
                </p>
              </div>
              <div className="col-sm-6 text-center d-flex flex-column align-items-center">
                <div className="rp_img">
                  <S3Image src={"/partners/partner4.svg"} width={189} height={92}/>
                </div>
                <label>Offsetting carbon and rebuilding forests</label>
                <p>
                  Delivering quality merch doesn’t have to come at a cost – an
                  environmental one, that is. GreenFleet is Australia’s first
                  carbon offset provider, replanting forests in Australia and
                  New Zealand to restore critical ecosystems and capture carbon
                  emissions. Through our partnership, you can make your delivery
                  carbon neutral and contribute to restoring our forests.
                  <br />
                  Win-win.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="responsible_merch_action section_space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle
                title="Responsible merch in action"
                className="no-border"
              />
              <p className="merch_description col-sm-12 col-lg-6">
                Check out what our sustainable practices mean for your merch.
              </p>
            </div>
            <div className="merch_action_info">
              <div className="action-item-info">
                <S3Image src={"/responsible-merch-in-action-1.svg"} width={509} height={334} />
                <div className="overly-info">
                  <h1>Ethical apparel</h1>
                  <label>
                    Order an ethically made, sustainable Staple Organic Tee
                  </label>
                  <div className="hide-info">
                    <h3>
                      Made of 100% organic combed cotton grown without the use
                      of herbicides or pesticides - GOTS (Global Organic Textile
                      Standard) certified. Produced in Bangladesh in a factory
                      that meets international standards of quality, health and
                      safety.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="action-item-info">
                <S3Image src={"/responsible-merch-in-action-2.svg"} width={509} height={334}/>
                <div className="overly-info">
                  <h1>Eco-friendly printing</h1>
                  <label>Print your creative with minimal impact</label>
                  <div className="hide-info">
                    <h3>
                      Local Australian printer to reduce carbon footprint Using
                      water-based inks, free of harmful chemicals and plastics
                      Zero-waste-to-landfill commitment for ink cans and ink
                      tubes
                    </h3>
                  </div>
                </div>
              </div>
              <div className="action-item-info">
                <S3Image src={"/responsible-merch-in-action-3.svg"} width={509} height={334}/>
                <div className="overly-info">
                  <h1>Recycled packaging</h1>
                  <label>Wrap it up in recycled materials</label>
                  <div className="hide-info">
                    <h3>
                      Using recycled packaging fillers made from our own
                      cardboard waste
                    </h3>
                  </div>
                </div>
              </div>
              <div className="action-item-info">
                <S3Image src={"/responsible-merch-in-action-4.svg"} width={509} height={334}/>
                <div className="overly-info">
                  <h1>Carbon neutral delivery</h1>
                  <label>Send it with zero emissions</label>
                  <div className="hide-info">
                    <h3>
                      Offset your carbon and restore our forests through
                      Greenfleet
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Stronger Communities" />
              <p className="merch_description col-sm-12 col-lg-10">
                We’re proud to support organisations that help our community and
                protect the environment.
              </p>
            </div>
            <div className="col-sm-12">
              <div className="stronger_communities_brands">
                <div>
                  <S3Image src={"/Greenfleet.png"} width={231} height={116}/>
                </div>
                <div>
                  <S3Image src={"/Thread-Together.png"} width={231} height={72} />
                </div>
                <div>
                  <S3Image src={"/Eat-Up.png"} width={231} height={154} />
                </div>
                <div>
                  <S3Image src={"/Clean-Up.png"} width={206} height={175} />
                </div>
              </div>
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
                      <S3Image src={"/footer-bubbles.svg"}  width={211} height={223}/>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="footer_shape">
                  <Image alt="" src={footerBanners[0].footerImage450x250 && footerBanners[0].footerImage450x250.url} width={450} height={279} />
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
    headerBanners: getHeaderBanners(state, "sustainability"),
    footerBanners: getFooterBanners(state, "sustainability"),
  };
}

export default connect(mapStateToProps, {})(Sustainability);
