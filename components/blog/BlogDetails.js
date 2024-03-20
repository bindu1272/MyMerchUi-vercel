import Image from "next/image";
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
                <Image alt="" width={1050} height={510}
                  src={`${blog?.contentImage1030x500 && blog?.contentImage1030x500?.url}`}
                />
              </div>
              <div className="img_block tablet">
                <Image alt="" width={500} height={200}
                  src={`${blog?.contentImage660x320 && blog?.contentImage660x320?.url}`}
                />
              </div>
              <div className="img_block mobile">
             {blog?.contentImage400x195 ?
                <Image alt="" width={40} height={40}
                  src={`${blog?.contentImage400x195 && blog?.contentImage400x195?.url}`}
                />
                :null}
              </div>
              {blog.contentText &&
                blog.contentText.length > 0 &&
                blog.contentText.map((ct,index) => {
                  return <ReactMarkdown className={'merch_description'} key={index}>{ct.text}</ReactMarkdown>
                    // children={ct.text}
                    // escapeHtml={false}
                  // />
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
