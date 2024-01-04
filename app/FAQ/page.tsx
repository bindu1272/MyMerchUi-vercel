"use client";
import React, { useEffect } from "react";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Collapse } from "antd";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const { Panel } = Collapse;

function callback(key:any) { }

const FAQ = () => {
  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  return (
    <>
      <div
        className="header_banner"
        style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGES_SRC_URL}/banner.jpg)` }}
      >
        <GoogleSetup
          title={"Frequently Ask Questions"}
          description={"Having questions about ordering custom merchandise for your brand with MyMerch? Check out our frequently asked questions where you might find the answer."}
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
              <h1>FAQ</h1>
              <div className="bread_crumb_nav">
                <Link href="/">Home</Link>
                <span className="arrow">
                  <RightOutlined />
                </span>
                <label>FAQ</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="info_section">
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="How do I get a quote?" key="1">
                  <p>
                    Want to see the price before purchase? Easy done. By
                    choosing the style, uploading the design & entering the
                    quantity, a price will pop up automatically. It’s easy and
                    intuitive. Plus, if you need additional prices or to discuss
                    anything with us, you can do that too.
                  </p>
                </Panel>
                <Panel header="What kind of artwork should I upload?" key="2">
                  <p>
                    Your brand colours, logo, and design are the best bit! So,
                    we want to get that right. You’ll see the option in the
                    editor to upload your files - just remember, the higher the
                    resolution the better. A PNG file at 300dpi is the best
                    option but you can upload a JPG, GIF, AI, or PDF too. If
                    you`&apos;`re uploading a vector file or PDF, make sure it’s in RGB
                    format. If you’re not sure, reach out. We’ve got you.
                  </p>
                </Panel>

                <Panel header="Is designing my merch hard?" key="3">
                  <p>
                    Nope! This is another thing we make super easy with our
                    design editor tool. We set artwork standards such as image
                    quality, print area, and formats to suit each product. You
                    can just click and be done without risking any problems.
                    You’ll also know whether your artwork will work for print or
                    embroidery, or if the sizing and positioning are possible on
                    your chosen product.
                  </p>
                </Panel>
                <Panel header="Will I receive artwork approval?" key="4">
                  <p>
                    Absolutely, so that nothing goes to print without your ok.
                    Before running the job, we check the artwork file and
                    placement and send through a final proof for you to approve.
                  </p>
                </Panel>
                <Panel header="Do you keep my art on file?" key="5">
                  <p>
                    A big yes! We automatically keep your artwork on file so you
                    can reorder faster next time or apply it to other merch. No
                    one wants to keep uploading files – that takes away from the
                    fun of picking and clicking.
                  </p>
                </Panel>
                <Panel
                  header="Can I remove the background on my image?"
                  key="6"
                >
                  <p>
                    Yep. Just click the ‘Remove Background’ button and done -
                    any solid colour background will be gone. If you require the
                    background removed from a photo or complex image, please
                    request this in the note section at checkout. We’ll come
                    back to you.
                  </p>
                </Panel>
                <Panel header="How do I know which colour to use?" key="7">
                  <p>
                    So many beautiful colours! Don’t worry, we provide the
                    official PMS colour chart on the design tool) so you can
                    check that everything matches your brand guidelines.
                  </p>
                </Panel>
                <Panel
                  header="How long does it take to receive my order?"
                  key="8"
                >
                  <p>
                    Everyone hates the wait. We get it. Lead times can vary but
                    it’s generally between 10-15 working days. We can prioritise
                    jobs if they become urgent (or you just can’t wait).
                  </p>
                </Panel>
                <Panel header="What about the merch sizing?" key="9">
                  <p>
                    Sizing all depends on what product you’re after. Just check
                    the page for all specs and measurements. We also have a size
                    and measure chart for each style, so you know what you’re
                    dealing with.
                  </p>
                </Panel>
                <Panel header="Where do you ship merch to? " key="10">
                  <p>
                    We ship everywhere in Australia! We’ll also email you a
                    tracking number once it’s on the way so you can see where it
                    is at all times and sit by the door, all excited!
                  </p>
                </Panel>
                <Panel header="How much does shipping cost?" key="11">
                  <p>
                    Shipping prices are calculated online and included when
                    placing the order. You’ll see that it calculates the price
                    by weight and postcode.
                  </p>
                </Panel>
                <Panel header="How do I pay?" key="12">
                  <p>
                    Easily and securely, that’s for sure! When you check out,
                    you’ll go to a payment gateway called e-way, where you can
                    use any credit card.
                  </p>
                </Panel>
                <Panel header="How do I get a sample?" key="13">
                  <p>
                    Want to try before you buy? No dramas. Choose a product,
                    colour and size, and go straight to the checkout. You’ll see
                    the ‘order a sample’ option there.
                  </p>
                </Panel>
                <Panel header="Can I get a volume-based discount?" key="14">
                  <p>
                    You can! Contact us and we will see what we can do for you.
                  </p>
                </Panel>
                <Panel header="Can I change my order?" key="15">
                  <p>
                    Mind change? Ok, so you can change your order before the
                    artwork proof is sent back to you, but it may cause delays
                    in delivery. However, once you have signed off on the proof,
                    you will not be able to make changes (sorry, but by that
                    time, it’s already on its way to you).{" "}
                  </p>
                </Panel>
                <Panel header="Can I cancel my order?" key="16">
                  <p>
                    You can cancel at any time prior to the order going into
                    production. Once items have been branded with your logo, we
                    can no longer accept a cancellation. If you need to change
                    your order for any reason contact us and we will be happy to
                    assist you.
                  </p>
                </Panel>
                <Panel
                  header="How do I decide what’s best for Mymerch in a box?"
                  key="17"
                >
                  <p>
                    Can’t decide? Too many options? No worries! We have
                    ready-made suggestions that we think are awesome and work
                    well together. However, we’re also here to give you ideas
                    and help you build your own box to suit. Let us know if you
                    get stuck!
                  </p>
                </Panel>
                <Panel
                  header="What’s the minimum quantity order for a product?"
                  key="18"
                >
                  <p>
                    It just depends on what you’re ordering. However, don’t
                    worry - all minimums are stated on the category and product
                    pages.
                  </p>
                </Panel>
                <Panel
                  header="I don’t have a storage facility, can you help?"
                  key="19"
                >
                  <p>
                    We can definitely help! My Merch has the infrastructure and
                    capabilities to store and ship all your merch to one or
                    multiple locations if required. Contact us to find out more
                    about this solution.{" "}
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

export default FAQ;
