// import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";
import S3Image from "../../common/S3Image";
import MerchTitle from "../../components/MerchTitle";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const MerchMadeEasyAs = ({ activeStep, beforeChangeStepCarousel }) => {
  const customiseSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="custom_pack_steps_section section_space pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Merch made easy as" />
            </div>
          </div>
          <div className="row d-none d-sm-block">
            <div className="col-lg-12 col-sm-11 m-auto">
              <div className="simplified-steps">
                <div className="step_item">
                  <h1 className={activeStep === 0 ? "step_active" : ""}>
                    STEP 1
                  </h1>
                  <div className="bottom_info">
                    {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

                      <S3Image
                        src={
                          activeStep === 0
                            ? "/icons/merch-made-easy-as-step1-active.svg"
                            : "/icons/merch-made-easy-as-step1.svg"
                        }
                        className="icon"
                        width={132} height={132}
                      />
                      
                      </AnimationOnScroll>
                      <h2 className={activeStep === 0 ? "step_active" : ""}>
                        Match merch <br /> with your goals
                      </h2>
                    {/* </ScrollAnimation> */}
                  </div>
                </div>
                <div className="step_item">
                  <h1 className={activeStep === 1 ? "step_active" : ""}>
                    STEP 2
                  </h1>
                  <div className="bottom_info">
                    {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
            <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

                      <S3Image
                        src={
                          activeStep === 1
                            ? "/icons/merch-made-easy-as-step2-active.svg"
                            : "/icons/merch-made-easy-as-step2.svg"
                        }
                        className="icon"
                        width={132} height={132}
                      />
                     
                      </AnimationOnScroll>
                      <h2 className={activeStep === 1 ? "step_active" : ""}>
                        Approve your <br /> bespoke design
                      </h2>
                    {/* </ScrollAnimation> */}
                  </div>
                </div>
                <div className="step_item">
                  <h1 className={activeStep === 2 ? "step_active" : ""}>
                    STEP 3
                  </h1>
                  <div className="bottom_info">
                    {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
            <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

                      <S3Image
                        src={
                          activeStep === 2
                            ? "/icons/merch-made-easy-as-step3-active.svg"
                            : "/icons/merch-made-easy-as-step3.svg"
                        }
                        className="icon"
                        width={138} height={130}
                      />
                    {/* </ScrollAnimation> */}
                    </AnimationOnScroll>
                    <h2 className={activeStep === 2 ? "step_active" : ""}>
                        Kick back while <br /> we produce it
                      </h2>
                  </div>
                </div>
                <div className="step_item">
                  <h1 className={activeStep === 3 ? "step_active" : ""}>
                    STEP 4
                  </h1>
                  <div className="bottom_info">
                    {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
            <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

                      <S3Image
                        src={
                          activeStep === 3
                            ? "/icons/merch-made-easy-as-step4-active.svg"
                            : "/icons/merch-made-easy-as-step4.svg"
                        }
                        className="icon"
                        width={138} height={130}
                      />
                      </AnimationOnScroll>
                      <h2 className={activeStep === 3 ? "step_active" : ""}>
                        Store, send and <br /> manage with MyMerch
                      </h2>
                    {/* </ScrollAnimation> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row custom_packs_section mme_section">
            <div className="col-sm-12">
              <div className="custom_packs_slider custom_pack_page_slider mt-md-5">
                <Carousel
                  beforeChange={beforeChangeStepCarousel}
                  {...customiseSettings}
                >
                  <div>
                    <div className="custom_slider_info pt-0">
                      <div className="col-sm-5 col-lg-4">
                        <div className="packs_info">
                          <h2>STEP 1</h2>
                          <h3>
                            Match merch <br /> with your goals
                          </h3>
                          <p>
                            Already know what you want? Nice. Move on to step 2.
                          </p>
                          <p>
                            Not sure what you need? We’ll make sure your merch
                            is on-point with brand objectives.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-7 col-lg-8 d-flex justify-content-end position-relative">
                        <div className="shape4">
                          <S3Image
                            src={"/merch-made-as-easy-step1-bubble.svg"}
                            width={134} height={125}
                          />
                        </div>
                        <div>
                          <S3Image
                            src={"/merch-made-easy-as-slider-step1.png"}
                            className="img-fluid"
                            width={472} height={243}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="custom_slider_info pt-0">
                      <div className="col-sm-5 col-lg-4">
                        <div className="packs_info">
                          <h2>STEP 2</h2>
                          <h3>
                            Approve <br /> your design
                          </h3>
                          <p>
                            Next, we’ll create your custom design. Our creative
                            design crew works with you to get it just right for
                            your brand. Because we’re happy when you are.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-7 col-lg-8 d-flex justify-content-end position-relative">
                        <div className="shape4">
                          <S3Image
                            src={"/merch-made-as-easy-step2-bubble.svg"}
                            width={134} height={125}
                          />
                        </div>
                        <div>
                          <S3Image
                            src={"/merch-made-easy-as-slider-step2.png"}
                            className="img-fluid"
                            width={457} height={245}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="custom_slider_info pt-0">
                      <div className="col-sm-5 col-lg-4">
                        <div className="packs_info">
                          <h2>STEP 3</h2>
                          <h3>
                            Kick back while <br /> we make it happen
                          </h3>
                          <p>
                            Our expert in-house production team gets to work.
                            With top-notch quality controls and years of
                            experience, you can relax knowing your merch is in
                            good hands.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-7 col-lg-8 d-flex justify-content-end position-relative">
                        <div className="shape4">
                          <S3Image
                            src={"/merch-made-as-easy-step3-bubble.svg"}
                            width={134} height={125}
                          />
                        </div>
                        <div>
                          <S3Image
                            src={"/merch-made-easy-as-slider-step3.png"}
                            className="img-fluid"
                            width={470} height={246}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="custom_slider_info pt-0">
                      <div className="col-sm-5 col-lg-5">
                        <div className="packs_info">
                          <h2>STEP 4</h2>
                          <h3>
                            Store, send and <br /> manage with MyMerch
                          </h3>
                          <p>
                            Eep! Your merch is ready and on its way! Short on
                            space? We can store and send your gear through our
                            warehouse, and manage all your merch through the
                            Custom Portal.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-7 col-lg-7 d-flex justify-content-end position-relative">
                        <div className="shape4">
                          <S3Image
                            src={"/merch-made-as-easy-step4-bubble.svg"}
                            width={134} height={125}
                          />
                        </div>
                        <div>
                          <S3Image
                            src={"/merch-made-easy-as-slider-step4.png"}
                            className="img-fluid"
                            width={462} height={244}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MerchMadeEasyAs;
