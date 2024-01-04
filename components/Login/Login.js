"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
// import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import FirebaseConfig from "@/Firebase/firebase";
import { notification, Spin } from "antd";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import {
  loginRequest,
  socialLoginRequest,
  forgotPasswordRequest,
} from "../../actions/authActions";
import { trackPageViewInGoogle } from "../../utilities/GoogleSetUp";

// if (!firebase.apps.length) {
//   firebase.initializeApp(FirebaseConfig);
// }
const firebase = initializeApp(FirebaseConfig)

const LoginContainer = ({
  showLogin,
  setShowLogin,
  redirect,
  setShowSignUp,
}) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotPasswordRequestStatus, setShowForgotPasswordRequestStatus] = useState(false);

  // Storage.prototype.getObject = function (key) {
  //   return JSON.parse(this.getItem(key));
  // };

  useEffect(() => {
    // window.scrollTo(0, 0);
    trackPageViewInGoogle();
  }, []);

  const onLoginSubmit = (values) => {
    setLoading(true);
    dispatch(
      loginRequest(
        values,
        onLoginSuccess,
        onLoginFailure,
      ));
  };

  const onLoginSuccess = (loginResponse) => {
    setLoading(false);
    setShowLogin(false);
    notification.success({
      message: `Logged in successfully`,
      placement: "bottomRight",
      bottom: 400,
    });
    localStorage.setItem("access_token", `Bearer ${loginResponse.access_token}`);
    localStorage.setItem("refresh_token", loginResponse.refresh_token);
  };

  const onLoginFailure = (error) => {
    setLoading(false);
    if (error.message) {
      setError(error.message);
    }
  };

  const onClickGoogleBtn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => onSocialLoginSuccess(result))
      .catch();
  };

  const onClickFbBtn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => onSocialLoginSuccess(result))
      .catch();
  };

  const onSocialLoginSuccess = (result) => {
    const { user } = result;
    const data = {};
    user.getIdToken().then(function (FirebaseToken) {
      data["firebaseToken"] = FirebaseToken;
      dispatch(
        socialLoginRequest(data,
          onLoginSuccess,
          onLoginFailure,
        ));
    });
  };

  const onClickContinueAsGuestBtn = () => {
    setShowLogin(false);
    if (redirect == "checkout") {
      history.push("/checkout");
    }
  }

  const onForgotPassword = () => {
    setError("");
    setShowLogin(false);
    setShowForgotPassword(true);
  }

  const onForgotPasswordSubmit = (values) => {
    setLoading(true);
    dispatch(
      forgotPasswordRequest(
        values,
        (response) => {
          setLoading(false);
          setShowForgotPassword(false);
          setShowForgotPasswordRequestStatus(true);
        },
        (error) => {
          setLoading(false);
          setError(error.message && error.message)
        }
      ));
  }

  const onRegisterNowClick = () => {
    setShowLogin(false);
    setError("");
    setShowSignUp(true);
  }

  const onLoginOkClick = () => {
    setShowLogin(false)
    setError("");
  }

  const onLoginCancelClick = () => {
    setShowLogin(false)
    setError("");
  }

  const onForgotPasswordOkClick = () => {
    setShowForgotPassword(false);
    setShowForgotPasswordRequestStatus(false);
    setError("");
  }

  const onForgotPasswordCancelClick = () => {
    setShowForgotPassword(false);
    setShowForgotPasswordRequestStatus(false);
    setError("");
  }

  return (
    <>
      {loading ?
        <Spin /> : ""}
      {showLogin &&
        <LoginForm
          onLoginSubmit={onLoginSubmit}
          onClickGoogleBtn={onClickGoogleBtn}
          onClickFbBtn={onClickFbBtn}
          onClickContinueAsGuestBtn={onClickContinueAsGuestBtn}
          error={error}
          showLogin={showLogin}
          onOk={onLoginOkClick}
          onCancel={onLoginCancelClick}
          title="Login"
          loading={loading}
          onForgotPassword={onForgotPassword}
          onRegisterNowClick={onRegisterNowClick}
        />
      }
      {(showForgotPassword || showForgotPasswordRequestStatus) &&
        <ForgotPassword
          loading={loading}
          showForgotPassword={showForgotPassword}
          showForgotPasswordRequestStatus={showForgotPasswordRequestStatus}
          error={error}
          onSubmit={onForgotPasswordSubmit}
          onOk={onForgotPasswordOkClick}
          onCancel={onForgotPasswordCancelClick}
        />
      }
    </>
  );
};

export default LoginContainer;
