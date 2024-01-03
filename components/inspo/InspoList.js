import React from "react";
import Inspo from "./Inspo";

const InspoList = ({
  inspos
}) => {
  return (
    <>
      <div className="grid_items">
        <div className="inspo_grid_items">
          {inspos && inspos.length > 0
            ? inspos.map((inspo, i) => {
              return <Inspo inspo={inspo} key={i} />;
            })
            : "No inspos available for display"
          }
        </div>
      </div>
    </>
  );
};

export default InspoList;
