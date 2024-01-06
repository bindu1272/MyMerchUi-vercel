// import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "antd";
import S3Image from "../common/S3Image";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const MerchSimplified = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    centerMode: false,
    variableWidth: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          arrows: true,
        },
      },
    ],
  };
  const sliderSettings = {
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
      <div className="d-none d-sm-block">
        <Carousel autoplay {...settings}>
          <div className="step_item">
            <h1 className="step_active">STEP 1</h1>
            <div className="bottom_info">
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

              {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
                <S3Image src={"/step1.svg"}  className="icon" width={130} height={130} />
              {/* </ScrollAnimation> */}
              </AnimationOnScroll>
            </div>
            {/* <ScrollAnimation animateIn="bounceIn" delay={100}> */}
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} style={{display:"flex", justifyContent:"center"}}>

              <h2 className="step_active">
                Match merch <br /> with your goals
              </h2>
              </AnimationOnScroll>
            {/* </ScrollAnimation> */}
          </div>
          <div className="step_item">
            <h1 className="step_active">STEP 2</h1>
            <div className="bottom_info">
            <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

              {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
                <S3Image src={"/step2.svg"} className="icon" width={130} height={130} />
              {/* </ScrollAnimation> */}
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={200} style={{display:"flex", justifyContent:"center"}}>

            {/* <ScrollAnimation animateIn="bounceIn" delay={200}> */}
              <h2 className="step_active">
                Approve your <br /> bespoke design
              </h2>
              </AnimationOnScroll>
            {/* </ScrollAnimation> */}
          </div>
          <div className="step_item">
            <h1 className="step_active">STEP 3</h1>
            <div className="bottom_info">
            <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

              {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
                <S3Image src={"/step3.svg"} className="icon" width={130} height={130} />
              {/* </ScrollAnimation> */}
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={300} style={{display:"flex", justifyContent:"center"}}>

            {/* <ScrollAnimation animateIn="bounceIn" delay={300}> */}
              <h2 className="step_active">
                Kick back while <br /> we produce it
              </h2>
              </AnimationOnScroll>
            {/* </ScrollAnimation> */}
          </div>
          <div className="step_item">
            <h1 className="step_active">STEP 4</h1>
            <div className="bottom_info">
            <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

              {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
                <S3Image src={"/step4.svg"} className="icon" width={130} height={130}/>
              {/* </ScrollAnimation> */}
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={400} style={{display:"flex", justifyContent:"center"}}>

            {/* <ScrollAnimation animateIn="bounceIn" delay={400}> */}
              <h2 className="step_active">
                Store, send and <br /> manage with MyMerch
              </h2>
              </AnimationOnScroll>
            {/* </ScrollAnimation> */}
          </div>
        </Carousel>
      </div>
      <div className="custom_packs_slider custom_pack_page_slider d-block d-md-none">
        <Carousel
          {...sliderSettings}
        >
          <div>
            <div className="custom_slider_info pt-0">
              <div className="col-sm-5 col-lg-3">
                <div className="packs_info">
                  <h2>STEP 1</h2>
                  <h3>
                    Match merch with your goals
                  </h3>
                </div>
              </div>
              <div className="col-sm-7 col-lg-9 d-flex justify-content-end position-relative">
                <div>
                  <S3Image src={"/curate.svg"} className="img-fluid" width={130} height={130} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="custom_slider_info pt-0">
              <div className="col-sm-5 col-lg-3">
                <div className="packs_info">
                  <h2>STEP 2</h2>
                  <h3>
                    Approve your bespoke design
                  </h3>
                </div>
              </div>
              <div className="col-sm-7 col-lg-9 d-flex justify-content-end position-relative">
                <div>
                  <S3Image
                    src={"/make-it-yours.svg"}
                    className="img-fluid"
                    // style={{ width: "570px" }}
                    width={200} height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="custom_slider_info pt-0">
              <div className="col-sm-5 col-lg-3">
                <div className="packs_info">
                  <h2>STEP 3</h2>
                  <h3>
                    Kick back while we produce it
                  </h3>
                </div>
              </div>
              <div className="col-sm-7 col-lg-9 d-flex justify-content-end position-relative">
                <div>
                  <S3Image src={"/deliver.svg"} className="img-fluid" width={130} height={130} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="custom_slider_info pt-0">
              <div className="col-sm-5 col-lg-3">
                <div className="packs_info">
                  <h2>STEP 4</h2>
                  <h3>
                    Store, send and manage with MyMerch
                  </h3>
                </div>
              </div>
              <div className="col-sm-7 col-lg-9 d-flex justify-content-end position-relative">
                <div>
                  <S3Image src={"/deliver.svg"} className="img-fluid" width={130} height={130}/>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MerchSimplified;
