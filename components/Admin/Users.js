"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, connect } from "react-redux";
import { Spin, notification } from "antd";
import { fetchUsersRequest } from "../../actions/userActions";
import UsersTable from "./UsersTable";
import { getUser } from "../../selectors/authSelector";
import Navigator from "./Navigator";
import GoogleSetup, { trackPageViewInGoogle } from "../../utilities/GoogleSetUp";

const Users = ({
  user,
}) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsersCount, setTotalUsersCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    // window.scrollTo(0, 0);
    trackPageViewInGoogle();
  }, [])

  useEffect(() => {
    if (!user || !user.roles.includes("Admin")) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(
      fetchUsersRequest(
        {
          page: 1,
        },
        (response) => {
          setTotalUsersCount(response.total);
          const users =
            response.data &&
            response.data.map((item) => {
              item.key = item.id;
            });
          setUsers(response.data);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching users",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  }, []);

  const handleSearch = () => {
    setLoading(true);
    dispatch(
      fetchUsersRequest(
        {
          search_string: searchText,
          size: usersPerPage
        },
        (response) => {
          setCurrentPage(response.current_page);
          setTotalUsersCount(response.total);
          const users =
            response.data &&
            response.data.map((item) => {
              item.key = item.id;
            });
          setUsers(response.data);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while searching users",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  };

  const handleTableChange = (page) => {
    setCurrentPage(page.current);
    setUsersPerPage(page.pageSize);
    setLoading(true);
    dispatch(
      fetchUsersRequest(
        {
          search_string: searchText,
          page: page.current,
          size: page.pageSize
        },
        (response) => {
          setTotalUsersCount(response.total);
          const users =
            response.data &&
            response.data.map((item) => {
              item.key = item.id;
            });
          setUsers(response.data);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching users",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          <GoogleSetup
            title={"Admin - Users"}
            description={""}
          />
          <Navigator active={"users"} />
          <UsersTable
            users={users}
            searchText={searchText}
            setSearchText={setSearchText}
            pagination={{
              current: currentPage,
              pageSize: usersPerPage,
              total: totalUsersCount,
              showSizeChanger: true
            }}
            handleSearch={handleSearch}
            handleTableChange={handleTableChange}
          />
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps, {})(Users);
