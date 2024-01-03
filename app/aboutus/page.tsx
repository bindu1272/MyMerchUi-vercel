"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const AboutUs = () => {

  useEffect(() => {
    // window.scrollTo(0, 0);
    trackPageViewInGoogle();
  }, [])

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"About Us"}
          description={"We are a full team of creative, sourcing, customer service & production gurus who streamlined your custom merch process without cutting on product quality."}
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
              <h1>About Us</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>About Us</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <h2>At Mymerch, we love merch.</h2>
              <p>
                Of course - that makes perfect sense. Anything promo with a
                brand and we’re there. But in loving it, we also take it super
                seriously.
              </p>
              <p>
                We’ve been doing it for a pretty long time too. Like 18 years
                long and still going strong.
              </p>
              <p>
                Couple that with our infrastructure, tech & resources, and we’ve
                never been more excited or prepped to bring modern merch to the
                next gen! (that’s you).
              </p>
              <h2>Our merch is your merch, as we say.</h2>
              <p>
                So, the Mymerch site you see before you, is the ‘perfect storm’
                culmination of years of discovering, honing, building and
                bridging together our skills and experience.
              </p>
              <p>
                And now - here it is! We’re pretty chuffed to share our range,
                our ideas and our passion with you.
              </p>
              <h2>MyMerch. Your way.</h2>
              <p>
                We get that merchandise and promo gear is all about the
                tangible. You want to get it out there, put it on desks, wear it
                out and show it off – not get stuck trying to order.{" "}
              </p>
              <p>
                That’s why you can choose your merch, add your design & check
                out! Boom.
              </p>
              <p>
                But don’t worry – we’re still super careful! All proofs &
                notifications will be emailed to you at the appropriate times.
                Nothing goes ahead unless we’re happy and you’ve approved it.
                There’s also a dashboard and history of all your merch jobs too.
              </p>
              <p>
                It’s almost like we want you to enjoy the best bits of the
                process!{" "}
              </p>
              <h2>Less management. More merch</h2>
              <p>
                Our aim is to cut out the fluff, so your merch journey is a
                phenomenal one, every time. That’s why we’ve streamlined and
                simplified the whole process, without cutting any corners on
                product or quality.
              </p>
              <p>Like we said – this is next-gen stuff!</p>
              <h2>MyMerch for the modern </h2>
              <p>
                At Mymerch, we’re constantly looking at what’s hot for your
                brand, and the best way to get your logo onto it. Because it’s
                all about fresh, on-trend and new.{" "}
              </p>
              <p>Kudos to us. Major mojo for you. </p>
              <p>
                Whilst we work with some of the most well-known brands, our
                Mymerch capabilities allow us to cater to all companies and
                organisations: big & small. No need to feel intimidated.
              </p>

              <h2>Enough about us. Your turn.</h2>
              <p>
                By now, you’ve gathered that behind Mymerch is a full team of
                creative, sourcing, customer service & production gurus - all
                ready for your order.
              </p>
              <p>
                Whilst the Mymerch.com.au site is intuitive & user friendly,
                we’re still only an email, message or call away if you need us
                or just want to say hey.
              </p>
              <p>
                We’re looking forward to seeing your logo on some great stuff.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
