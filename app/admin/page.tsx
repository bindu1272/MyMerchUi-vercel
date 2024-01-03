"use client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import Navigator from "@/components/Admin/Navigator";
import Products from "@/components/Admin/Products";
import { getUser } from "@/selectors/authSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const AdminPage = ({
  user,
}:any) => {
  const history = useRouter();

  useEffect(() => {
    trackPageViewInGoogle();
  }, [])

  useEffect(() => {
    if (!user || !user.roles.includes("Admin")) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <GoogleSetup
        title={"Admin - Products"}
        description={""}
      />
      <Navigator active={"products"} />
      <Products />
    </>
  );
}

function mapStateToProps(state:any) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps, {})(AdminPage);