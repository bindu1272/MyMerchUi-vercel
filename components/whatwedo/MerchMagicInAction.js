import React from "react";
import { useRouter } from "next/navigation";
import { Carousel } from "antd";
import MerchTitle from "../../components/MerchTitle";

const MerchMagicInAction = ({
  caseStudies
}) => {
  const settings = {
    dots: true,
    className: "slider variable-width",
    centerMode: false,
    variableWidth: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const history = useRouter();

  return (
    <>
      <section
        className="curated_packs_info section_space"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <MerchTitle title="Merch magic in action" className="no-border" />
              <p className="merch_description col-sm-12 col-lg-6">
                See what’s hot in merch right now and check out how
                our clients have been using swag to engage and delight and grow their brands.
              </p>
            </div>
          </div>
          <div className="row mt-xl-4">
            <div className="col-sm-12">
              <div className="merch_magic_action_section">
                <div className="mobile">
                  <div className="row">
                    <div className="col-sm-12 ">
                      <Carousel autoplay {...settings}>
                        {caseStudies &&
                          caseStudies.length > 0 &&
                          caseStudies.map((cs,index) => {
                            return (
                              <img key={index}
                                //src={`${process.env.REACT_APP_STRAPI_API_URL}${cs.image330x330 && cs.image330x330.url}`}
                                src={`${cs.image330x330 && cs.image330x330.url}`}
                                onClick={() =>
                                  history.push(`/caseStudyDetails/${cs.slug}`)
                                }
                              />
                            );
                          })}
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="tablet-view d-none d-sm-block d-lg-none">
                  <div className="row">
                    {caseStudies &&
                      caseStudies.length > 0 &&
                      caseStudies.map((cs,index) => {
                        return (
                          <div className="col-sm-4" key={index}>
                            <img
                              //src={`${process.env.REACT_APP_STRAPI_API_URL}${cs.image330x330 && cs.image330x330.url}`}
                              src={`${cs.image330x330 && cs.image330x330.url}`}
                              onClick={() =>
                                history.push(`/caseStudyDetails/${cs.slug}`)
                              }
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="desktop d-sm-none d-lg-block">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="ma_grid">
                        {caseStudies &&
                          caseStudies.length > 0 &&
                          caseStudies.map((cs, index) => {
                            return (
                              //<div className={`${i == 1 ? 'tall' : i == 6 ? 'wide' : 'ma-grid-item'}`}>
                              <div className="ma-grid-item" key={index}>
                                <img
                                  //src={`${process.env.REACT_APP_STRAPI_API_URL}${cs.image330x330 && cs.image330x330.url}`}
                                  src={`${cs.image330x330 && cs.image330x330.url}`}
                                  onClick={() =>
                                    history.push(`/caseStudyDetails/${cs.slug}`)
                                  }
                                />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 text-center  p-0">
          <a
            href="/WhyMerch"
            className="btn_blue"
            style={{ fontSize: 14, whiteSpace: "nowrap" }}
          >
            Learn why merch works
          </a>
        </div>
      </section>

    </>
  );
};

export default MerchMagicInAction;
