"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Link, useHistory, useParams } from "react-router-dom";
import Link from "next/link";
import { useRouter,useSearchParams,usePathname } from "next/navigation";
import { Spin, notification, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";

import GoogleSetup from "@/utilities/GoogleSetUp";
import CaseStudyDetails from "@/components/caseStudy/CaseStudyDetails";
import {
  fetchCaseStudiesRequest,
} from "@/actions/strapiActions";

const CaseStudyDetailsPage = ({params}:any) => {
  const dispatch = useDispatch();
  // const params = usePathname();
  const history = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentCaseStudy, setCurrentCaseStudy]:any = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchReq = {
      _sort: "published_at:DESC",
    };
    dispatch(
      fetchCaseStudiesRequest(
        fetchReq,
        (response:any) => {
          const currentCaseStudyIndex = response.findIndex(
            (b:any) => b.slug == params?.slug?.[0]
          );
          setCurrentCaseStudy(response[currentCaseStudyIndex]);
          setLoading(false);
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching casestudies.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [params?.slug]);

  const onGetInTouchCick = () => {
    history.push("/GetAQuote");
  };

  return loading ? (
    <Spin />
  ) : (
    <>
      <section className="bread_crumb">
        {/* <GoogleSetup
          title={`${currentCaseStudy.seoTitle}`}
          description={`${currentCaseStudy.seoDescription}`}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-7 d-flex">
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href="/caseStudies">Case Studies</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href={`/caseStudyDetails/${currentCaseStudy.slug}`}>
                  {currentCaseStudy.clientName}
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
        <CaseStudyDetails
          caseStudy={currentCaseStudy}
        />
      </section>
    </>
  );
};

export default CaseStudyDetailsPage;