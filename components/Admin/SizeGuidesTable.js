import React from "react";
import  Link  from "next/link";
import { Space, Table, Modal, Form, Input } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const SizeGuidesTable = ({
  sizeGuides,
  pagination,
  searchString,
  showSizeGuidesZipFileBrowseModal,
  setShowSizeGuidesZipFileBrowseModal,
  setSearchString,
  handleTableChange,
  handleSizeGuidesSearch,
  onSelectSizeGuidesZipFile,
  onSizeGuidesZipFileUpload,
}) => {

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    // {
    //   title: "Actions",
    //   key: "actions",
    //   dataIndex: "actions",
    //   render: (text, record) => (
    //     <Space align="center">
    //       <Link to={`/admin/sizeguides/${record.id}?type=view`}>
    //         <EyeOutlined />
    //       </Link>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <>
      <div className="order_history_block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8">
              <ul className="filter_nav">
                <li>
                  <Link href=""
                    className={showSizeGuidesZipFileBrowseModal ? "active" : ""}
                    onClick={() => setShowSizeGuidesZipFileBrowseModal(true)}
                  >
                    Import SizeGuides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <div className="search_bar">
                <Input
                  placeholder="Search by Size Guide Name"
                  prefix={<SearchOutlined className="site-form-item-icon" />}
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSizeGuidesSearch();
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="order_history_info">
                <Table
                  columns={columns}
                  bordered={true}
                  dataSource={sizeGuides}
                  pagination={pagination}
                  onChange={handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSizeGuidesZipFileBrowseModal && (
        <Modal
          visible={showSizeGuidesZipFileBrowseModal}
          title="Import Size Guides"
          onCancel={() => setShowSizeGuidesZipFileBrowseModal(false)}
          onOk={() => onSizeGuidesZipFileUpload()}
          okText={"Upload"}
        >
          <Form {...layout}>
            <Form.Item
              label="SizeGuides Zip File "
              name="sizeGuidesZipFile"
            >
              <input
                type="file"
                onChange={(e) => onSelectSizeGuidesZipFile(e.target.files[0])}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default SizeGuidesTable;
