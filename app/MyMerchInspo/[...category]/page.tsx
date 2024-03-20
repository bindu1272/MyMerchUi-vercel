"use client";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Spin, notification, Select } from "antd";
import S3Image from "@/common/S3Image";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { getHeaderBanners } from "@/selectors/bannerSelector";
import InspoList from "@/components/inspo/InspoList";
import {
  fetchInsposRequest,
  fetchInspoCategoriesRequest,
} from "@/actions/strapiActions";
import {
    fetchHeaderBannersRequest,
  } from "@/actions/strapiActions";

const MyMerchInspo = ({ headerBanners,params }:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
//   const params = useParams();
  const [loading, setLoading] = useState(false);
  const [inspos, setInspos] = useState([]);
  const [filteredInspos, setFilteredInspos] = useState([]);
  const [inspoCategories, setInspoCategories] = useState([]);
  const { Option } = Select;

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  useEffect(() => {
    dispatch(
      fetchInspoCategoriesRequest(
        (response:any) => {
          setInspoCategories(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching inspo categories.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  useEffect(() => {
    if (!inspos || inspos.length == 0) {
      setLoading(true);
      const fetchReq = {
        _sort: "published_at:DESC",
      };
      dispatch(
        fetchInsposRequest(
          fetchReq,
          (response:any) => {
            setInspos(response);
            setFilteredInspos(
              filterInsposByCategory(response, params?.category?.[0])
            );
            setLoading(false);
          },
          (error:any) => {
            setLoading(false);
            notification.error({
              message: "Error occurred while fetching inspos.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          }
        )
      );
    } else {
      setFilteredInspos(filterInsposByCategory(inspos, params?.category?.[0]));
    }
  }, [params?.category?.[0]]);

  const filterInsposByCategory = (inspos:any, category:any) => {
    if (!category || category.toLowerCase() === "all") {
      return inspos;
    } else {
      return inspos.filter(
        (b:any) =>
          b.inspo_category != null &&
          b.inspo_category.name.toLowerCase() === category.toLowerCase()
      );
    }
  };

  const handleInspoCategoryChange = (value:any) => {
    history.push(`/MyMerchInspo/${value}`);
  };

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

  return loading ? (
    <Spin />
  ) : (
    <>
      <section
        className="banner-section"
      // style={{ backgroundColor: "#D3D3D3" }}
      >
        <GoogleSetup
          title={"MyMerch Inspo"}
          description={""}
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles">
                <ParallaxProvider>
                  <Parallax translateY={["150px", "0px"]}>
                    <S3Image src={"/inner-banner-shape.svg"} />
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
                <div className="col-sm-8">
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
      <section
        className="inspos_section section_space"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-lg-8 m-auto">
              <div className="row mt-4 mb-5 align-items-center">
                <div className="col-sm-5 col-lg-4 merch_description m-0 mb-3 mb-sm-0">
                  Browse by category:
                </div>
                <div className="col-sm-7 col-lg-8">
                  <Select
                    defaultValue="all"
                    style={{ width: "100%",fontFamily:"Neutra Text" }}
                    size={"large"}
                    onChange={handleInspoCategoryChange}
                  >
                    <Option value="all">View All</Option>
                    {inspoCategories &&
                      inspoCategories.length > 0 &&
                      inspoCategories.map((bc:any,index:any) => {
                        return <Option value={bc.name} key={index}>{bc.name}</Option>;
                      })}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="grid mb-0">
                <InspoList inspos={filteredInspos} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "mymerchinspo"),
  };
}

export default connect(mapStateToProps, {})(MyMerchInspo);
