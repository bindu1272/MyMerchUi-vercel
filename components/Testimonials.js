import { Carousel } from "antd";
import S3Image from '../common/S3Image';

const Testimonials = () => {
  const settings = {
    dots: true,
    className: "slider variable-width",
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <section className="testimonials-block" style={{ backgroundColor: "#D1DDE6" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title" style={{ color: "#fff" }}>Who we work with</h1>
          </div>
          <div className="col-sm-12">
            <Carousel autoplay {...settings}>
              <S3Image src={"/clients/CoatesHire.png"} alt="mymerch" />
              <S3Image src={"/clients/gyg.png"} alt="mymerch" />
              <S3Image src={"/clients/lego.png"} alt="mymerch" />
              <S3Image src={"/clients/NewBalance.png"} alt="mymerch" />
              <S3Image src={"/clients/NHFood.png"} alt="mymerch" />
              <S3Image src={"/clients/sony.png"} alt="mymerch" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
