import React from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "antd";

const InspoDetails = ({
  inspo,
  enablePreviousButton,
  enableNextButton,
  onPreviousButtonClick,
  onNextButtonClick,
  onGetInTouchCick,
}) => {
  let encodedURL = encodeURI(window.location.href);
  return (
    <div>
      <div className="container-fluid inspo-details-block">
        <div className="row">
          <div className="col-sm-12">
            <div className="grid">
              <ReactMarkdown>{inspo?.content}</ReactMarkdown>
                {/* children={inspo.content} */}
                {/* // escapeHtml={false} */}
              {/* /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="prev-next-btns inspos-btns">
        <Button
          disabled={!enablePreviousButton}
          onClick={() => onPreviousButtonClick()}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          Back{" "}
        </Button>
        <Button
          disabled={!enableNextButton}
          onClick={() => onNextButtonClick()}
        >
          Next
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Button>
      </div>
      <div className="cs-footer pl-0 pr-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="d-flex">
                <label style={{ color: "#fff" }}>Share this Inspo</label>
                <ul className="cs-social-media">
                  <li>
                    <a href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href={`https://www.linkedin.com/shareArticle?url=${encodedURL}`}>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href={`https://twitter.com/intent/tweet?url=${encodedURL}`}>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center">
              <label style={{ color: "#fff" }}>Keen to chat? </label>
              <Button onClick={onGetInTouchCick}>
                Get in Touch
              </Button>
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-end">
              <ul className="tags-links">
                <li><a href="#">Tags: {inspo.tags} </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspoDetails;
