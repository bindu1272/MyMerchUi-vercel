import React from "react";
import CaseStudy from "./CaseStudy";

const CaseStudyList = ({
    caseStudies,
}) => {
    return (
        <>
            <div className="cs-grid_items">
                <div className="cs_list_items">
                    {caseStudies && caseStudies.length > 0
                        ? caseStudies.map((cs, i) => {
                            return (
                                <CaseStudy
                                    key={i}
                                    caseStudy={cs}
                                />
                            );
                        })
                        : "No case studies available for display"
                    }
                </div>
            </div>
        </>
    );
}

export default CaseStudyList;
