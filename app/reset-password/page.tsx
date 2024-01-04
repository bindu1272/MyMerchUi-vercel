"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";
import ResetPassword from "@/components/ResetPassword";
import {
  validateForgotPasswordTokenRequest,
  resetPasswordRequest,
} from "@/actions/authActions";
import { getQueryParams } from "@/utilities/helpers";
import { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    trackPageViewInGoogle();
  }, []);

  useEffect(() => {
    const queryParams:any = getQueryParams(window.location.href);
    if (queryParams.email && queryParams.token) {
      setLoading(true);
      dispatch(
        validateForgotPasswordTokenRequest(
          {
            email: queryParams.email,
            token: queryParams.token,
          },
          (response:any) => {
            if (response.is_valid) {
              setLoading(false);
              setEmail(queryParams.email);
              setToken(queryParams.token);
            } else {
              setLoading(false);
              history.push("/");
              notification.error({
                message: "Invalid Token.",
                placement: "bottomRight",
                // bottom: 400,
              });
            }
          },
          (error:any) => {
            setLoading(false);
            history.push("/");
            notification.error({
              message: "Something went wrong in Token validation.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          }
        )
      );
    } else {
    }
  }, []);

  const onSubmit = (values:any) => {
    setLoading(true);
    dispatch(
      resetPasswordRequest(
        {
          email: email,
          token: token,
          password: values["password"],
        },
        (response:any) => {
          setLoading(false);
          history.push("/");
          notification.success({
            message: `Your password has been reset.`,
            placement: "bottomRight",
            // bottom: 400,
          });
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: `Something went wrong. Please try again.`,
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  };

  return (
    <>
      {loading ? <Spin /> : ""}
      <ResetPassword onSubmit={onSubmit} />
    </>
  );
};

export default ResetPasswordPage;
