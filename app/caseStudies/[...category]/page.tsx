"use client";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
import { useRouter } from "next/navigation";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Spin, notification, Select } from "antd";
import S3Image from "@/common/S3Image";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { getHeaderBanners } from "@/selectors/bannerSelector";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import {
  fetchCaseStudiesRequest,
  fetchCaseStudyCategoriesRequest,
} from "@/actions/strapiActions";
import {
    fetchHeaderBannersRequest,
  } from "@/actions/strapiActions";

const CaseStudyPage = ({ headerBanners,params }:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);
  const [caseStudyCategories, setCaseStudyCategories] = useState([]);
  const { Option } = Select;

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
      fetchCaseStudyCategoriesRequest(
        (response:any) => {
          setCaseStudyCategories(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching case study categories.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  useEffect(() => {
    if (!caseStudies || caseStudies.length == 0) {
      setLoading(true);
      const fetchReq = {
        _sort: "published_at:DESC",
      };
      dispatch(
        fetchCaseStudiesRequest(
          fetchReq,
          (response:any) => {
            setCaseStudies(response);
            setFilteredCaseStudies(
              filterCaseStudiesByCategory(response, params?.category?.[0])
            );
            setLoading(false);
          },
          (error:any) => {
            setLoading(false);
            notification.error({
              message: "Error occurred while fetching case studies.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          }
        )
      );
    } else {
      setFilteredCaseStudies(
        filterCaseStudiesByCategory(caseStudies, params.get("category"))
      );
    }
  }, [params?.category?.[0]]);

  const filterCaseStudiesByCategory = (caseStudies:any, category:any) => {
    if (!category || category.toLowerCase() === "all") {
      return caseStudies;
    } else {
      return caseStudies.filter(
        (cs:any) =>
          cs.case_study_category != null &&
          cs.case_study_category.name.toLowerCase() === category.toLowerCase()
      );
    }
  };

  const handleCaseStudyCategoryChange = (value:any) => {
    history.push(`/caseStudies/${value}`);
  };

  return loading ? (
    <Spin />
  ) : (
    <>
      <div className="casy-study-section">
        {/* <GoogleSetup
          title={"Case Studies: Brands We've Worked With"}
          description={"We've provided custom merch solutions for many well known brands in Australia, including Officeworks, Target, Boost Juice, Rebel, Sony, ZIP, Telstra."}
        /> */}
        <section className="banner-section">
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-12">
                <div className="banner_bubbles">
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
                  <div className="col-sm-4">
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
        <section className="case_study_info section_space">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-lg-8 m-auto">
                <div className="row mt-4 mb-5 align-items-center">
                  <div className="col-sm-12 col-lg-4 merch_description m-0 mb-3 mb-sm-0 browse_cat_title">
                    Browse by category:
                  </div>
                  <div className="col-sm-12 col-lg-8">
                    <Select
                      defaultValue="all"
                      style={{ width: "100%",fontFamily:"Neutra Text" }}
                      size={"large"}
                      onChange={handleCaseStudyCategoryChange}
                    >
                      <Option value="all">​View All</Option>
                      {caseStudyCategories &&
                        caseStudyCategories.length > 0 &&
                        caseStudyCategories.map((csc:any,index:any) => {
                          return <Option value={csc.name} key={index}>{csc.name}</Option>;
                        })}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="grid mb-0">
                  <CaseStudyList caseStudies={filteredCaseStudies} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "casestudies"),
  };
}

export default connect(mapStateToProps, {})(CaseStudyPage);
