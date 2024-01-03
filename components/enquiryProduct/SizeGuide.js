import React from "react";
import { Modal } from "antd";

const SizeGuide = ({
  sizeGuide,
  visible,
  onOk,
  onCancel,
}) => {
  return (
    <>
      <Modal
        visible={visible}
        onOk={onOk}
        width={1072}
        onCancel={onCancel}
        wrapClassName="size_guide_modal"
        maskStyle={{ zIndex: 999999 }}
        centered
        footer={null}
      >
        <>
          <div className="header_title_section">
            <div class="divider"></div>
          </div>
          <div className="d-flex align-items-center">
            <h1 className="title">Size Guide</h1>
            <p>All sizes are listed in centimetres.</p>
          </div>
          <div className="size_info">
            <table>
              <thead>
                <tr>
                  <th>Sizes</th>
                  <th>Width(A)</th>
                  <th>Length(A)</th>
                  <th>Sleeve(D2)</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide &&
                  sizeGuide.data &&
                  sizeGuide.data.map(d => {
                    return (
                      <tr>
                        <td>{d.size}</td>
                        <td>{d.width}</td>
                        <td>{d.height}</td>
                        <td>{d.sleeve}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
          <img src={sizeGuide && sizeGuide.image_url} />
        </>
      </Modal>
    </>
  );
}

export default SizeGuide;
