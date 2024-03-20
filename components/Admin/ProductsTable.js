import React from "react";
import  Link  from "next/link";
import { Space, Table, Modal, Form, Input } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const ProductsTable = ({
  products,
  pagination,
  searchString,
  showProductsZipFileBrowseModal,
  setShowProductsZipFileBrowseModal,
  setSearchString,
  handleTableChange,
  handleProductsSearch,
  onSelectProductsZipFile,
  onProductsZipFileUpload,
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
    {
      title: "Supplier",
      key: "supplier",
      dataIndex: "supplier",
    },
    {
      title: "Branding Type",
      key: "branding_type",
      dataIndex: "branding_type",
    },
    {
      title: "Is Curated Pack?",
      key: "curated_pack",
      dataIndex: "curated_pack",
      render: (text, record) => (
        `${record.curated_pack ? "Yes" : "No"}`
      ),
    },
    {
      title: "Is Deleted?",
      key: "deleted",
      dataIndex: "deleted",
      render: (text, record) => (
        `${record.deleted_at ? "Yes" : "No"}`
      ),
    },
    // {
    //   title: "Actions",
    //   key: "actions",
    //   dataIndex: "actions",
    //   render: (text, record) => (
    //     <Space align="center">
    //       <Link to={`/admin/product/${record.id}?type=view`}>
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
                    className={showProductsZipFileBrowseModal ? "active" : ""}
                    onClick={() => setShowProductsZipFileBrowseModal(true)}
                  >
                    Import Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <div className="search_bar">
                <Input
                  placeholder="Search by Product Name"
                  prefix={<SearchOutlined className="site-form-item-icon" />}
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleProductsSearch();
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="order_history_info" style={{fontFamily:"Neutra Text"}}>
                <Table style={{fontFamily:"Neutra Text"}}
                  columns={columns}
                  bordered={true}
                  dataSource={products}
                  pagination={pagination}
                  onChange={handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showProductsZipFileBrowseModal && (
        <Modal
          visible={showProductsZipFileBrowseModal}
          title="Import Products"
          onCancel={() => setShowProductsZipFileBrowseModal(false)}
          onOk={() => onProductsZipFileUpload()}
          okText={"Upload"}
        >
          <Form {...layout}>
            <Form.Item
              label="Products Zip File "
              name="productsZipFile"
            >
              <input
                type="file"
                onChange={(e) => onSelectProductsZipFile(e.target.files[0])}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ProductsTable;
