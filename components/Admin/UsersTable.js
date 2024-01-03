import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const UsersTable = ({
  users,
  searchText,
  setSearchText,
  pagination,
  handleSearch,
  handleTableChange,
}) => {
  const columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "First Name",
      key: "first_name",
      dataIndex: "first_name",
    },
    {
      title: "Last Name",
      key: "last_name",
      dataIndex: "last_name",
    },
  ];

  return (
    <>
      <div className="order_history_block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8"></div>
            <div className="col-12 col-lg-4">
              <div className="search_bar">
                <Input
                  placeholder="Search Id, Email or Name"
                  prefix={<SearchOutlined className="site-form-item-icon" />}
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="order_history_info">
                <Table
                  columns={columns}
                  dataSource={users}
                  pagination={pagination}
                  onChange={handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
