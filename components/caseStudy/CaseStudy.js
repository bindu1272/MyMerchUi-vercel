import Image from 'next/image';
import React from 'react';

const CaseStudy = ({
    caseStudy,
}) => {
    return (
        <>
            <div className="cs-item-info">
                <Image alt="" width={330} height={330}
                    //src={`${process.env.REACT_APP_STRAPI_API_URL}${caseStudy.image330x330 && caseStudy.image330x330.url}`}
                    src={`${caseStudy.image330x330 && caseStudy.image330x330.url}`}
                />
                <h3 className='cs_title'>{caseStudy.clientName}</h3>
                <div className="overly-info">
                    <h1>{caseStudy.clientName}</h1>
                    <div className="hide-info">
                        <h3>{caseStudy.clientDescription}</h3>
                        <a
                            className="btn_white"
                            href={`/caseStudyDetails/${caseStudy.slug}`}
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CaseStudy;