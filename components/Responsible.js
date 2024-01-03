import { Carousel } from "antd";
import S3Image from '../common/S3Image';

const Responsible = () => {
  const settings = {
    dots: true,
    className: "slider variable-width",
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <section className="testimonials-block responsible-section" style={{ backgroundColor: "#D1DDE6" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title" style={{ color: "#fff" }}>Responsible Sourcing and Eco Friendly</h1>
          </div>
          <div className="col-sm-12">
            <Carousel autoplay {...settings}>
              <S3Image src={"/clients/rs1.svg"} alt="mymerch" width="80" />
              <S3Image src={"/clients/rs2.svg"} alt="mymerch" width="80" />
              <S3Image src={"/clients/rs3.svg"} alt="mymerch" width="80" />
              <S3Image src={"/clients/rs4.svg"} alt="mymerch" width="80" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Responsible;
