"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tabs } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { getQueryParams } from "@/utilities/helpers";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const { TabPane } = Tabs;

const YourResources = () => {
  const history = useRouter();
  const [activeTabKey, setActiveTabKey] = useState("1");

  useEffect(() => {
    const queryParams:any = getQueryParams(window.location.href);
    switch (queryParams.tabIndex) {
      case "1":
        setActiveTabKey("1");
        break;
      case "2":
        setActiveTabKey("2");
        break;
      case "3":
        setActiveTabKey("3");
        break;
      case "4":
        setActiveTabKey("4");
        break;
      case "5":
        setActiveTabKey("5");
        break;
      default:
        setActiveTabKey("1");
    }
  });

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  const onTabClick = (key:any) => {
    history.push(`/YourResources?tabIndex=${key}`);
  }

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"Your Merchandise Printing Resources"}
          description={"From artwork requirements, artwork approvals through to branding methods, sample policy, learn more about merchandise printing with MyMerch."}
        />
        <div className="container-fluid">
          <div
            className="row bread_crumb"
            style={{
              border: 0,
              backgroundColor: "transparent",
              position: "relative",
              zIndex: 99,
            }}
          >
            <div className="col-sm-12">
              <h1>Your Merchandise Printing Resources</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>Your Merchandise Printing Resources</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section p-0">
              <Tabs
                tabPosition={"left"}
                activeKey={activeTabKey}
                onTabClick={onTabClick}
              >
                <TabPane tab="Artwork Requirements" key="1">
                  <h2 className="mt-0">Artwork Requirements</h2>
                  <p>
                    Your brand colours, logo, and design are the best bit! So,
                    we want to get that right. You’ll see the option in the
                    editor to upload your files - just remember, the higher the
                    resolution the better. A PNG file at 300dpi is the best
                    option but you can upload a JPG, GIF, AI, or PDF too. If
                    you`&apos;`re uploading a vector file or PDF, make sure it’s in RGB
                    format. If you’re not sure, reach out. We’ve got you.
                  </p>
                  <p>
                    We set artwork standards such as image quality (resolution),
                    print area, file formats and maximum sizes to suit our
                    branding method or the product. You will know whether your
                    artwork will work for print or embroidery, or if the sizing
                    and positioning is possible on your chosen product.
                  </p>
                </TabPane>
                <TabPane tab="Artwork Approvals" key="2">
                  <h2 className="mt-0">Artwork Approvals</h2>
                  <p>
                    Absolutely, nothing goes to print without your approval.
                    Before running the job, we check the artwork file and
                    placement and send through a final proof for you to approve.
                  </p>
                  <p>
                    We also automatically keep your artwork on file so you can
                    reorder faster next time or apply it to other merch. No one
                    wants to keep uploading files.
                  </p>
                </TabPane>
                <TabPane tab="Branding Methods" key="3">
                  <h2 className="mt-0">Branding Methods</h2>
                  <p>
                    We offer all the latest branding options with modern
                    technology. And we match it up to suit the product & brand
                  </p>
                  <ul>
                    <li>
                      On apparel it’s mostly - Screen printing, Embroidery and
                      Direct to Garment (DTG) printing. DTG is a digital print &
                      ideal for smaller quantities with many colours.
                    </li>
                    <li>
                      On all other merch, it will vary between Printing, Laser
                      Engraving, Embossing & Digital Transfers. This too will
                      depend on the product, design & desired effect.
                    </li>
                  </ul>
                  <p>
                    The Mymerch website will give you the options available when
                    selecting your product. Our team is also here to discuss &
                    work through the options for best results.
                  </p>
                </TabPane>
                <TabPane tab="Sample Policy" key="4">
                  <h2 className="mt-0">Sample Policy</h2>
                  <p>
                    Yeah, samples can be ordered. Choose a product, colour &
                    size and go to the checkout. We sometimes ship direct from
                    our 3rd party supplier network so it can take a few days.
                    Tracking details will be emailed to you.{" "}
                  </p>
                </TabPane>
                <TabPane tab="PMS Colour Chart" key="5">
                  <h2 className="mt-0">PMS Colour Chart</h2>
                  <p>
                    The PMS colour chart below may vary slightly depending on
                    monitors and is intended as a reference guide only. If you
                    need additional help using this colour chart, feel free to
                    contact our sales team
                  </p>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourResources;
