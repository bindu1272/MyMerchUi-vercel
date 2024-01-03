import React from "react";
import { Modal } from "antd";
import S3Image from "../../common/S3Image";

const AllMerchSteps = ({
    showStepsModal,
    onOkStepsModal,
    onCancelStepsModal,
}) => {
    return (
        <Modal
            className="page_load_modal"
            centered
            footer={false}
            visible={showStepsModal}
            width={1046}
            onOk={onOkStepsModal}
            onCancel={onCancelStepsModal}
        >
            <div>
                <div className="header_title_section">
                    <div class="divider"></div>
                </div>
                <h1 className="title">Get personal with custom merch</h1>
                <p>
                    Whether you’re building your team or community, launching a campaign
                    or boosting customer engagement,{" "}
                    <span>personalised merch</span> will get you there. And with
                    our expert team behind you, it’s easier than ever.
                </p>
                <div className="time_to_get_personal_section ">
                    <div className="simplified-steps">
                        <div className="step_item">
                            <h1 className="step_active">STEP 1</h1>
                            <div className="bottom_info">
                                <S3Image
                                    src={"/icons/curated-pack-step-1.svg"}
                                    className="icon"
                                    width={165} height={155}
                                />
                                <h2>
                                    Choose the merch that’s right for you
                                </h2>
                            </div>
                        </div>
                        <div className="step_item">
                            <h1 className="step_active">STEP 2</h1>
                            <div className="bottom_info">
                                <S3Image
                                    src={"/icons/curated-pack-step-2.svg"}
                                    className="icon"
                                    width={165} height={155}
                                />
                                <h2>
                                    Get a cost estimate instantly
                                </h2>
                            </div>
                        </div>
                        <div className="step_item">
                            <h1 className="step_active">STEP 3</h1>
                            <div className="bottom_info">
                                <S3Image
                                    src={"/icons/curated-pack-step-3.svg"}
                                    className="icon"
                                    width={165} height={155}
                                />
                                <h2>
                                    Send us your deets and we’ll do the rest
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AllMerchSteps;