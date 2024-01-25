import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

const CaseStudyDetails = ({
  caseStudy,
}) => {
  return (
    <div className="blog_details_section">
      <div className="blog_details_container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="top_border"></div>
              <div className="merch_title">{caseStudy.clientName}</div>
              <p className="merch_description blog_text">{caseStudy.clientDescription}</p>
              <div className="img_block">
                {caseStudy.contentHeaderImage1030x500 ?
                <Image alt="" width={1050} height={509}
                  src={`${caseStudy.contentHeaderImage1030x500 && caseStudy.contentHeaderImage1030x500.url}`}
                /> : null
}
              </div>
              <div className="img_block tablet">
                {caseStudy.contentHeaderImage660x330 ? 
              <Image alt=""   width={20} height={10}
                            src={`${caseStudy.contentHeaderImage660x330 && caseStudy.contentHeaderImage660x330.url}`}
                           
                />
                :null}
              </div>
              <div className="img_block mobile">
                {caseStudy.contentHeaderImage400x195?
                <Image alt="" width={20} height={10}
                  src={`${caseStudy.contentHeaderImage400x195 && caseStudy.contentHeaderImage400x195.url}`}
                />:null
}
              </div>
              {caseStudy.contentText &&
                caseStudy.contentText.length > 0 &&
                caseStudy.contentText.map((ct,index) => {
                  return  <ReactMarkdown className={'merch_description'} key={index}>
                    {ct?.text}
                    </ReactMarkdown>
                })
              }
              <div className="row cs_img_section">
                <div className="col-sm-6">
                  <div className="img_block">
                    {caseStudy.contentImage500x325_1 ?
                    <Image alt="" width={510} height={333}
                      src={`${caseStudy.contentImage500x325_1 && caseStudy.contentImage500x325_1.url}`}
                    />
                    :null}
                  </div>
                  <div className="img_block tablet">
                    {caseStudy.contentImage320x210_1 ?
                    <Image alt="" width={20} height={10}
                      src={`${caseStudy.contentImage320x210_1 && caseStudy.contentImage320x210_1.url}`}
                    /> : null
}
                  </div>
                  <div className="img_block mobile">
                    {caseStudy.contentImage400x265_1 ?
                    <Image alt="" width={20} height={10}
                      src={`${caseStudy.contentImage400x265_1 && caseStudy.contentImage400x265_1.url}`}
                    />:null}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="img_block">
                    { caseStudy.contentImage500x325_2 ?
                    <Image alt="" width={510} height={334}
                      src={`${caseStudy.contentImage500x325_2 && caseStudy.contentImage500x325_2.url}`}
                    />:null
}
                  </div>
                  <div className="img_block tablet">
                    {caseStudy.contentImage320x210_2 ?
                    <Image alt="" width={20} height={10}
                      src={`${caseStudy.contentImage320x210_2 && caseStudy.contentImage320x210_2.url}`}
                    />
                    :null}
                  </div>
                  <div className="img_block mobile">
                    {caseStudy.contentImage400x265_2?
                    <Image alt="" width={20} height={10}
                      src={`${caseStudy.contentImage400x265_2 && caseStudy.contentImage400x265_2.url}`}
                    />:null
}
                  </div>
                </div>

              </div>
              <div className="row bottom_full_img cs_img_section">
                <div className="col-sm-12">
                  {caseStudy.contentFooterImage1030x380 && caseStudy.contentFooterImage1030x380.url &&
                    <div className="img_block">
                      <Image alt="" width={1050} height={386}
                        src={`${caseStudy.contentFooterImage1030x380 && caseStudy.contentFooterImage1030x380.url}`}
                      />
                    </div>}
                  {caseStudy.contentFooterImage660x240 && caseStudy.contentFooterImage660x240.url &&
                    <div className="img_block tablet">
                      <Image alt="" width={20} height={10}
                        src={`${caseStudy.contentFooterImage660x240 && caseStudy.contentFooterImage660x240.url}`}
                      />
                    </div>}
                  {caseStudy.contentFooterImage400x145 && caseStudy.contentFooterImage400x145.url &&
                    <div className="img_block mobile">
                      <Image alt="" width={20} height={10}
                        src={`${caseStudy.contentFooterImage400x145 && caseStudy.contentFooterImage400x145.url}`}
                      />
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_list_items">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 cs_bottom_list">
              <p>{`The ${caseStudy.kit && caseStudy.kit.name} included:`}</p>
              <ul>
                {caseStudy.kit &&
                  caseStudy.kit.inclusions &&
                  caseStudy.kit.inclusions.length > 0 &&
                  caseStudy.kit.inclusions.map((i,index) => {
                    return <li key={index}><span></span>{i.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;