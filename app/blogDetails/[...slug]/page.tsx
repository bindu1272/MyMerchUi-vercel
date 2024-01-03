"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Link, useHistory, useParams } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spin, notification, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";

import GoogleSetup from "@/utilities/GoogleSetUp";
import BlogDetails from "@/components/blog/BlogDetails";
import {
  fetchBlogsRequest,
} from "@/actions/strapiActions";

const BlogDetailsPage = ({params}:any) => {
  const dispatch = useDispatch();
  // const params = useParams();
  const history = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentBlog, setCurrentBlog] :any= useState({});

  useEffect(() => {
    setLoading(true);
    const fetchReq = {
      _sort: "published_at:DESC",
    };
    dispatch(
      fetchBlogsRequest(
        fetchReq,
        (response:any) => {
          const currentBlogIndex = response.findIndex(
            (b:any) => b.slug == params.slug
          );
          setCurrentBlog(response[currentBlogIndex]);
          setLoading(false);
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching blogs.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [params.slug]);

  const onGetInTouchCick = () => {
    history.push("/GetAQuote");
  };

  return loading ? (
    <Spin />
  ) : (
    <>
      <section className="bread_crumb">
        <GoogleSetup
          title={`${currentBlog.seoTitle}`}
          description={`${currentBlog.seoDescription}`}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href="/Blog">Blog</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href={`/BlogDetails/${currentBlog.slug}`}>
                  {currentBlog.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="case_study_info pt-5"
        style={{ backgroundColor: "#fff" }}
      >
        <BlogDetails
          blog={currentBlog}
        />
      </section>
    </>
  );
};

export default BlogDetailsPage;
