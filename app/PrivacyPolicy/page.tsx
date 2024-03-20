"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const PrivacyPolicy = () => {
  
  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  const { Panel } = Collapse;

  function callback(key:any) {
    console.log(key);
  }

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.NEXT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup 
        title={"Privacy Policy"} 
        description={"Learn how we use & disclose the personally identifiable information (\"Personal Information\") that we collect when you use our website www.mymerch.com.au."}
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
              <h1>Privacy Policy</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>Privacy Policy</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <h2>Privacy Policy</h2>
              <br />
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="Effective Date: May 1, 2007" key="1">
                  <p>
                    <strong>Effective Date: May 1, 2007</strong>
                    <br /> My Merch values the users of our website
                    www.mymerch.com.au (the Website ). Your privacy and trust
                    are very important to us. We recognize that you may be
                    concerned about our collection, use, and disclosure of the
                    personally identifiable information (Personal Information)
                    that we collect when you use the Website and the services
                    offered on the Website (My Merch Services). This Privacy
                    Policy describes the information that we collect from you,
                    how we collect this information, and what we do with it
                    after we collect it. By using the website you are accepting
                    the practices described in this Privacy Policy. Our policy
                    and security it authorised and managed by
                    <a href="www.deconetwork.com" target="_blank">

                      www.deconetwork.com
                    </a>
                    <br /> If you have any questions or comments regarding this
                    Privacy Policy, please contact us at
                    <a href="mailto:info@mymerch.com.au">info@mymerch.com.au</a>
                  </p>
                </Panel>
                <Panel
                  header="Does My Merch Ever Make Changes to its Privacy Policy?"
                  key="2"
                >
                  <p>
                    We may make changes to the Privacy Policy from time to time.
                    We will notify you of any changes by sending you an email,
                    posting a notice on the home page of the Website, or posting
                    a notice in your account when you first login after we have
                    made changes. If you receive notification of a change in our
                    Privacy Policy, you must review the new Privacy Policy
                    carefully to make sure you understand our practices and
                    procedures. You may not be able to receive notices from us
                    if your cookies are not set to accept and/or are disabled.
                  </p>
                </Panel>
                <Panel
                  header="What Types of Information Does My Merch Collect?"
                  key="3"
                >
                  <p>
                    Personal Information. We collect Personal Information that
                    you provide to us, such as your name, mailing address, phone
                    number, email address, credit card number, and financial
                    information. Non-Personal Information. We also collect
                    non-personal information from you, such as your browser
                    type, the URL of the previous website you visited, your ISP,
                    operating system, and your Internet protocol (IP) Address
                    Non-Personal Information cannot be easily used to personally
                    identify you.
                  </p>
                </Panel>
                <Panel
                  header="How and When Does My Merch Collect This Information?"
                  key="4"
                >
                  <p>
                    Providing Information to Us. We collect Personal Information
                    from you when you provide it to us. For example, if you
                    purchase a product sold through an affiliate, we may collect
                    your name, mailing address, telephone number, credit card
                    number, and email address. If you create an account, we may
                    collect your name, tax identification number, mailing
                    address, email address, and other information that we
                    request during the registration process, and any information
                    that you provide to My Merch. If you sign up to receive a
                    newsletter, we will collect your email
                    address. Communications with Us. If you communicate with us
                    regarding the Website or the System, we will collect any
                    information that you provide to us in any such
                    communication. Analytic and Reporting Technologies. Like the
                    operators of most websites, we use analytic and reporting
                    technologies to record Non-Personal Information such as
                    Internet domain and host names, Internet protocol (IP)
                    addresses, browser software, operating system types, click
                    stream patterns, and the dates and times that the Website
                    and the System are accessed. We also contract with several
                    online partners to help manage, monitor and optimise our
                    Website and the System and to help us measure the
                    effectiveness of our advertising, communications and how
                    visitors use the Website. To do this, we may use web beacons
                    and cookies.
                  </p>
                </Panel>
                <Panel header="How Does My Merch Use My Information?" key="5">
                  <p>
                    Personal Information. We use Personal Information primarily
                    for our own internal purposes, such as providing,
                    maintaining, evaluating, and improving the Website,
                    fulfilling requests for information, producing and shipping
                    the products that you order, and providing customer support.
                    For example, if you create an Account, we will use the
                    information that you provide us to communicate with you and
                    pay you any commissions that you earn. Similarly, if you
                    sign up to receive a My Merch newsletter, we will use the
                    email address you provide to send you the
                    newsletters. Non-Personal Information. We use Non-Personal
                    Information to track the use of the Website and the System
                    and for other internal purposes, such as providing,
                    maintaining, evaluating, and improving the Website.
                  </p>
                </Panel>
                <Panel
                  header="When Will My Merch Disclose My Information to Third Parties?"
                  key="6"
                >
                  <p>

                    Disclosure to Successors.&nbsp;We will not disclose Personal
                    Information to any other company.&nbsp;
                    <br /> <br /> Disclosure to Unaffiliated Third
                    Parties.&nbsp;We will not disclose your Personal Information
                    to unaffiliated Third Parties.
                    <br /> <br /> Disclosure to Third Party Service Providers
                    and Online Partners.&nbsp;We will not disclose your details
                    to various Third Parties with the exception of Pay Pal who
                    accepts our payments.
                    <br /> <br /> Disclosure to Affiliates.&nbsp;&nbsp;We do not
                    disclose your details to any of our affiliates with the
                    exception of delivery &amp; freight companies.
                    <br /> <br /> Disclosure of Non-Personal
                    Information.&nbsp;We will not disclose Non-Personal
                    Information either to any Third Party.
                  </p>
                </Panel>
                <Panel header="What About Cookies and Web Beacons?" key="7">
                  <p>
                    A cookie is a small file placed on the hard drive of your
                    computer. Most websites use cookies. We use cookies to track
                    your use of the Website and the System, provide you with a
                    more personalized user experience, and to allow you to login
                    and begin use of the Website automatically when you visit
                    the Website. A web beacon is an often-transparent graphic
                    image, usually no larger than a 1x1 pixel that is placed on
                    a web page or in an e-mail that is used to monitor the
                    behaviour of the user visiting the Website or receiving the
                    e-mail. Cookies and web beacons used by My Merch and our
                    online partners are not linked to Personal Information. Some
                    of our Shopkeepers may use cookies or web beacons on our
                    Website. We have no access to or control over these cookies
                    and web beacons. This Privacy Policy covers the use of
                    cookies and web beacons by My Merch and our online partners
                    only and does not cover the use of cookies or web beacons by
                    any other third party.
                  </p>
                </Panel>
                <Panel
                  header="Does My Merch Protect My Personal Information?"
                  key="8"
                >
                  <p>
                    Personal Information. Whenever we obtain your Personal
                    Information, we use commercially reasonable efforts to
                    protect it from unauthorized access or disclosure. However,
                    we are not insurers of the security of your Personal
                    Information. Accordingly, we assume no liability for any
                    disclosure of data due to errors in transmission,
                    unauthorized third party access or other acts of third
                    parties, or acts or omissions beyond our reasonable
                    control. Website Content. The content that you store, post,
                    or transmit on or through the Website, such as message board
                    postings, storefront pages, and images on your Products, may
                    be accessed by other users, including people that you do not
                    know. We are not responsible for the actions of others.
                    Therefore, you should use care in communicating with other
                    users and only disclose your Personal Information to other
                    users that you know to be trustworthy. You should not assume
                    that your content will be kept private.
                  </p>
                </Panel>
                <Panel
                  header="How Can I Review and Make Changes to My Personal Information?"
                  key="9"
                >
                  <p>
                    You can obtain a copy of and request that we correct errors
                    in your Personal Information by emailing us at
                    info@mymerch.com.au For your protection, you will be
                    required to provide proof of your identity to obtain a copy
                    of your Personal Information. If your Personal Information
                    changes or if you no longer want to use the My Merch
                    Services, you may correct, update or deactivate your
                    Personal Information and/or your account through the account
                    management screen. If you would like to deactivate or
                    terminate your account you can also contact our Customer
                    Service.
                  </p>
                </Panel>
                <Panel header="Tell-A-Friend" key="10">
                  <p>
                    If you choose to use our referral service to tell a friend
                    about the Website, we will ask you for your friends name
                    and email address. We will automatically send your friend a
                    one-time email inviting him or her to visit the Website. We
                    store this information for the sole purpose of sending this
                    one-time email and tracking the success of our referral
                    program.
                  </p>
                </Panel>
                <Panel header="Security" key="11">
                  <p>
                    The security of your Personal Information is important to
                    us. When you enter sensitive information such as a credit
                    card number and/or social security number on our
                    registration or order forms, we encrypt that information
                    using secure socket layer technology (SSL). We follow
                    generally accepted industry standards to protect the
                    Personal Information submitted to us, both during
                    transmission and once we receive it. However, no method of
                    transmission over the Internet, or method of electronic
                    storage, is 100% secure. Therefore, while we strive to use
                    commercially acceptable means to protect your Personal
                    Information, we cannot guarantee its absolute security.
                  </p>
                </Panel>
                <Panel
                  header="Does This Privacy Policy Apply When I Access Third Party Websites?"
                  key="12"
                >
                  <p>
                    You may be able to access third party websites directly from
                    the Website. This Privacy Policy does not apply when you
                    access third party websites. We cannot control how third
                    parties may use Personal Information you disclose to them,
                    so you should carefully review the privacy policy of any
                    third party website you visit before using it or disclosing
                    your Personal Information to its provider.
                  </p>
                </Panel>
                <Panel header="What About Children's Privacy?" key="13">
                  <p>
                    Under Thirteen. The Website and the System are intended for
                    users aged 13 and older only. Accordingly, we will not
                    knowingly collect or use any Personal Information from
                    children that we know to be under the age of 13. In
                    addition, we will delete any information in our database
                    that we know originates from a child under the age of 13.
                    Thirteen to Seventeen. Prospective users between the ages of
                    13 and 17 can only use the Website under their parents or
                    legal guardians supervision. If you are between the ages of
                    13 and 17, you, your parent, or your legal guardian may
                    request that we deactivate any of your Personal Information
                    in our database and/or opt-out from receiving communications
                    from us. If you wish to do so, please contact us at
                    <a href="mailto:info@mymerch.com.au">info@mymerch.com.au</a>
                  </p>
                </Panel>
                <Panel
                  header="Can I Opt-Out From Receiving Communications From My Merch?"
                  key="14"
                >
                  <p>
                    We provide you the opportunity to opt-out of having your
                    Personal Information used for certain purposes. For example,
                    if you purchase a product/service but do not wish to receive
                    any additional marketing material from us, you can indicate
                    your preference on our order form. If you no longer wish to
                    receive our newsletters and promotional communications, you
                    may opt-out of receiving them by following the instructions
                    included in each newsletter or communication or by emailing
                    us at info@mymerch.com.au. We also offer you an opportunity
                    to opt-out of certain communications through the account
                    management screen. If you need assistance you may contact us
                    at info@mymerch.com.au. If we disclose your Personal
                    Information to a third party in a manner that is not set
                    forth in this Privacy Policy you will be notified so that
                    you can make an informed choice about sharing your Personal
                    Information with that third party.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
