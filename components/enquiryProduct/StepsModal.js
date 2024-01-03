import React from "react";
import AllMerchSteps from "./AllMerchSteps";
import CustomPackSteps from "./CustomPackSteps";
import CuratedPackSteps from "./CuratedPackSteps";

const StepsModal = ({
    showStepsModal,
    productsType,
    onOkStepsModal,
    onCancelStepsModal,
}) => {
    return (
        <>
            {showStepsModal &&
                productsType &&
                productsType.toLowerCase() == "all-merch" &&
                <AllMerchSteps
                    showStepsModal={showStepsModal}
                    onOkStepsModal={onOkStepsModal}
                    onCancelStepsModal={onCancelStepsModal}
                />
            }
            {showStepsModal &&
                productsType &&
                productsType.toLowerCase() == "custom-pack" &&
                <CustomPackSteps
                    showStepsModal={showStepsModal}
                    onOkStepsModal={onOkStepsModal}
                    onCancelStepsModal={onCancelStepsModal}
                />
            }
            {showStepsModal &&
                productsType &&
                productsType.toLowerCase() == "curated-pack" &&
                <CuratedPackSteps
                    showStepsModal={showStepsModal}
                    onOkStepsModal={onOkStepsModal}
                    onCancelStepsModal={onCancelStepsModal}
                />
            }
        </>

    );
};

export default StepsModal;