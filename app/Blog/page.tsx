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
import BlogList from "@/components/blog/BlogList";
import {
  fetchBlogsRequest,
  fetchBlogCategoriesRequest,
  fetchHeaderBannersRequest
} from "@/actions/strapiActions";

const BlogsPage = ({ headerBanners,params }:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
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
      fetchBlogCategoriesRequest(
        (response:any) => {
          setBlogCategories(response);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching blog categories.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  useEffect(() => {
    if (!blogs || blogs.length == 0) {
      setLoading(true);
      const fetchReq = {
        _sort: "published_at:DESC",
      };
      dispatch(
        fetchBlogsRequest(
          fetchReq,
          (response:any) => {
            setBlogs(response);
            setFilteredBlogs(filterBlogsByCategory(response, params?.category?.[0]));
            setLoading(false);
          },
          (error:any) => {
            setLoading(false);
            notification.error({
              message: "Error occurred while fetching blogs.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          }
        )
      );
    } else {
      setFilteredBlogs(filterBlogsByCategory(blogs, params?.category?.[0]));
    }
  }, [params?.category?.[0]]);

  const filterBlogsByCategory = (blogs:any, category:any) => {
    if (!category || category.toLowerCase() === "all") {
      return blogs;
    } else {
      return blogs.filter(
        (b:any) =>
          b.blog_category != null &&
          b.blog_category.name.toLowerCase() === category.toLowerCase()
      );
    }
  };

  const handleBlogCategoryChange = (value:any) => {
    history.push(`/Blog/${value}`);
  };

  return loading ? (
    <Spin />
  ) : (
    <>
      <section
        className="banner-section"
      // style={{ backgroundColor: "#D3D3D3" }}
      >
        <GoogleSetup
          title={"Blog"}
          description={"Check out our articles for custom merchandise and promotional product ideas during special occasions, or trending merch for each month."}
        />
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
        className="blogs_section section_space"
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
                    style={{ width: "100%" ,fontFamily:"Neutra Text"}}
                    size={"large"}
                    onChange={handleBlogCategoryChange}
                  >
                    <Option value="all">View All</Option>
                    {blogCategories &&
                      blogCategories.length > 0 &&
                      blogCategories.map((bc:any,index:any) => {
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
                <BlogList blogs={filteredBlogs} />
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
    headerBanners: getHeaderBanners(state, "blogs"),
  };
}

export default connect(mapStateToProps, {})(BlogsPage);
