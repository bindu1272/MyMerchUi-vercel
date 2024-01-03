import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";
import { registerRequest } from "../actions/authActions";
import RegistrationForm from "./RegistrationForm";
// import { trackPageViewInGoogle } from "../utilities/GoogleSetUp";

const Registration = ({
  showSignUp,
  setShowSignUp,
}) => {
  const history = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   trackPageViewInGoogle();
  // }, []);

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      registerRequest(
        values,
        (response) => {
          setLoading(false)
          setShowSignUp(false)
          localStorage.setItem("access_token", `Bearer ${response.access_token}`);
          localStorage.setItem("refresh_token", response.refresh_token);
          notification.success({
            message: `Registered successfully`,
            placement: "bottomRight",
            bottom: 400,
          });
          history.push("/");
        },
        (error) => {
          setLoading(false)
          setErrors(error);
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
          {showSignUp &&
            <RegistrationForm
              onSubmit={onSubmit}
              errors={errors}
              showSignUp={showSignUp}
              onOk={() => setShowSignUp(false)}
              onCancel={() => setShowSignUp(false)}
              loading={loading}
            />
          }
        </>
      )
      }
    </>
  );
};

export default Registration;
