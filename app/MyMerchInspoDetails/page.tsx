"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spin, notification, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";

import GoogleSetup from "@/utilities/GoogleSetUp";
import InspoDetails from "@/components/inspo/InspoDetails";
import {
  fetchInsposRequest,
  fetchInspoCategoriesRequest,
} from "@/actions/strapiActions";

const MyMerchInspoDetails = ({params}:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(true);
  const [inspoCategories, setInspoCategories] = useState([]);
  const [inspos, setInspos] = useState([]);
  const [currentInspo, setCurrentInspo]:any = useState({});
  const [currentInspoIndex, setCurrentInspoIndex] = useState(0);
  const [enablePreviousButton, setEnablePreviousButton] = useState(false);
  const [enableNextButton, setEnableNextButton] = useState(false);

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
    setLoading(true);
    const fetchReq = {
      _sort: "published_at:DESC",
    };
    dispatch(
      fetchInsposRequest(
        fetchReq,
        (response:any) => {
          const currentInspoIndex = response.findIndex(
            (b:any) => b.slug == params?.slug?.[0]
          );
          if (response.length == 1) {
            setEnablePreviousButton(false);
            setEnableNextButton(false);
          } else if (currentInspoIndex === 0) {
            setEnablePreviousButton(false);
            setEnableNextButton(true);
          } else if (currentInspoIndex === response.length - 1) {
            setEnablePreviousButton(true);
            setEnableNextButton(false);
          } else {
            setEnablePreviousButton(true);
            setEnableNextButton(true);
          }
          setCurrentInspoIndex(currentInspoIndex);
          setCurrentInspo(response[currentInspoIndex]);
          setInspos(response);
          setLoading(false);
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching inspos.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, [params.slug]);

  const onPreviousButtonClick = () => {
    const previousInspo:any = inspos[currentInspoIndex - 1];
    history.push(`/MyMerchInspoDetails/${previousInspo.slug}`);
  };

  const onNextButtonClick = () => {
    const nextInspo:any = inspos[currentInspoIndex + 1];
    history.push(`/MyMerchInspoDetails/${nextInspo.slug}`);
  };

  const onGetInTouchCick = () => {
    history.push("/GetAQuote");
  };
  const { Option } = Select;
  const handleInspoCategoryChange = (value:any) => {
    history.push(`/MyMerchInspo/${value}`);
  };
  return loading ? (
    <Spin />
  ) : (
    <>
      <div
        className="casy-study-inner-banner"
        style={{
          backgroundImage: `url(${process.env.NEXT_APP_IMAGES_SRC_URL}/inspo-bg.jpg)`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1>MyMerch Inspos</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="bread_crumb mt-0">
        <GoogleSetup
          title={"MyMerch Inspo Details"}
          description={""}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7">
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href="/MyMerchInspo">MyMerch Inspo</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <Link href={`/MyMerchInspoDetails/${currentInspo.slug}`}>
                  {currentInspo.title}
                </Link>
              </div>
            </div>
            <div className="col-sm-5">
              <div
                className="bread_crumb_nav right-bread-crumb"
                style={{ justifyContent: "flex-end" }}
              >
                {/* <label style={{ color: "#0072ce" }}>Browse by category:</label>
                <div className="bc-links">
                  <Link href="/MyMerchInspo/all">​View All</Link>
                  {inspoCategories &&
                    inspoCategories.length > 0 &&
                    inspoCategories.map((bc) => {
                      return (
                        <Link href={`/MyMerchInspo/${bc.name}`}>{bc.name}</Link>
                      );
                    })}
                </div> */}
                <label style={{ color: "#0072ce", whiteSpace: "nowrap" }}>
                  Browse by category:
                </label>
                <Select
                  defaultValue="all"
                //   size={"medium"}
                  className="blog_dropdown"
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
      </section>
      <section
        className="case_study_info pt-5"
        style={{ backgroundColor: "#fff" }}
      >
        <InspoDetails
          inspo={currentInspo}
          enablePreviousButton={enablePreviousButton}
          enableNextButton={enableNextButton}
          onPreviousButtonClick={onPreviousButtonClick}
          onNextButtonClick={onNextButtonClick}
          onGetInTouchCick={onGetInTouchCick}
        />
      </section>
    </>
  );
};

export default MyMerchInspoDetails;
