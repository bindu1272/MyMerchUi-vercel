"use client";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { notification } from "antd";
import S3Image from "@/common/S3Image";
import ContactUs from "@/components/contactus/ContactUs";
import { contactUsRequest } from "@/actions/userActions";
import { fetchContactUsHelpOptionsRequest } from "@/actions/strapiActions";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";
import { getHeaderBanners } from "@/selectors/bannerSelector";
import {
  fetchHeaderBannersRequest,
} from "@/actions/strapiActions";

const GetAQuote = ({ headerBanners }:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [helpOptions, SetHelpOptions] = useState([]);
  const [currentHelpOption, SetCurrentHelpOption]:any = useState({});

  useEffect(() => {
    if(typeof window != 'undefined'){
      trackPageViewInGoogle();
    }
  }, []);

  useEffect(() => {
    dispatch(
      fetchContactUsHelpOptionsRequest(
        (response:any) => {
          SetHelpOptions(response);
          SetCurrentHelpOption(response[0]);
        },
        (error:any) => {
          notification.error({
            message: "Error occurred while fetching quote options.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
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

  const onHelpOptionChange = (value:any) => {
    const selectedHelpOption = helpOptions.find((ho:any) => ho.name == value);
    SetCurrentHelpOption(selectedHelpOption);
  };

  const onSubmit = (values:any) => {
    const dataKeysArray = [
      "first_name",
      "email",
      "phone_number",
      "company",
      "message",
    ];
    const data :any= {};
    const additionalData = [
      { label: "Need Help With", value: currentHelpOption.name },
    ];
    Object.keys(values).forEach((key) => {
      if (dataKeysArray.includes(key)) {
        data[key] = values[key];
      } else {
        const field = currentHelpOption.fields.find((f:any) => f.name == key);
        additionalData.push({
          label: field.label,
          value: values[key],
        });
      }
    });
    data["additional_data"] = JSON.stringify(additionalData);
    setLoading(true);
    dispatch(
      contactUsRequest(
        data,
        (response:any) => {
          setLoading(false);
          history.push("/GetAQuoteSuccess");
        },
        (error:any) => {
          setLoading(false);
          history.push("/GetAQuoteError");
        }
      )
    );
  };

  return (
    <>
      <section
        className="banner-section"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_bubbles">
                <ParallaxProvider>
                  <Parallax translateY={["260px", "0px"]}>
                    <S3Image src={"/production-header-bubble.svg"} width={306} height={284} />
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
                <div className="col-sm-7">
                  <div className="slider_info ">
                    <h1 className="heading">
                      {headerBanners &&
                        headerBanners?.length > 0 &&
                        headerBanners?.[0]?.title}
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
              headerBanners?.length > 0 &&
              headerBanners?.[0]?.desktopImage1580x455 &&
              headerBanners?.[0]?.desktopImage1580x455?.url
              })`,
          }}
        ></div>
        <div
          className="mobile_main_banner"
          style={{
            backgroundImage: `url(${headerBanners &&
              headerBanners?.length > 0 &&
              headerBanners?.[0]?.mobileImage430x260 &&
              headerBanners?.[0]?.mobileImage430x260?.url
              })`,
          }}
        ></div>
      </section>
      <GoogleSetup
        title={"Contact Us | Get a Quote"}
        description={"Ready to order custom merchandise to promote your brand? Or simply want to chat? Fill out the contact form and we'll get back to you asap."}
      />
      <ContactUs
        loading={loading}
        helpOptions={helpOptions}
        currentHelpOption={currentHelpOption}
        onHelpOptionChange={onHelpOptionChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    headerBanners: getHeaderBanners(state, "contactus"),
  };
}

export default connect(mapStateToProps, {})(GetAQuote);
