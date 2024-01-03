import React from "react";
import ReactMarkdown from "react-markdown";

const BlogDetails = ({ blog }) => {
  return (
    <div className="blog_details_section">
      <div className="blog_details_container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="top_border"></div>
              <div className="merch_title">{blog.title}</div>
              <p
                className="merch_description blog_text"
              >
                {blog.description}
              </p>
              <div className="img_block">
                <img
                  src={`${blog.contentImage1030x500 && blog.contentImage1030x500.url}`}
                />
              </div>
              <div className="img_block tablet">
                <img
                  src={`${blog.contentImage660x320 && blog.contentImage660x320.url}`}
                />
              </div>
              <div className="img_block mobile">
                <img
                  src={`${blog.contentImage400x195 && blog.contentImage400x195.url}`}
                />
              </div>
              {blog.contentText &&
                blog.contentText.length > 0 &&
                blog.contentText.map((ct) => {

                  return <ReactMarkdown className={'merch_description'}
                    source={ct.text}
                    escapeHtml={false}
                  />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
