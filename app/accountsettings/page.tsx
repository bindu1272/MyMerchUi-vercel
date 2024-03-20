"use client";
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";
import { getUser } from "@/selectors/authSelector";
import AccountSettings from "@/components/accountsettings/AccountSettings";
import {
  fetchUserRequest,
  updateUserProfileRequest,
  fetchUserAddressesRequest,
  saveUserAddressRequest,
  deleteUserAddressRequest,
  fetchUserCardsRequest,
  saveUserCardRequest,
  deleteUserCardRequest,
  updateUserPasswordRequest,
} from "@/actions/userActions"
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const AccountSettingsPage = ({
  user
}:any) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    trackPageViewInGoogle();
  }, [])

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);

  const onTabChange = (tabKey:any) => {
    switch (tabKey) {
      case "1":
        setActiveTabKey("1");
        break;
      case "2":
        setActiveTabKey("2");
        setLoading(true);
        dispatch(
          fetchUserAddressesRequest(
            (data:any) => {
              setAddresses(data.data);
              setLoading(false);
            },
            (error:any) => {
              setLoading(false);
              notification.error({
                message: "Error occurred while fetching addresses.",
                placement: "bottomRight",
                // bottom: 400,
              });
            })
        );
        break;
      case "3":
        setActiveTabKey("3");
        setLoading(true);
        dispatch(
          fetchUserCardsRequest(
            (data:any) => {
              setCards(data);
              setLoading(false);
            },
            (error:any) => {
              setLoading(false);
              notification.error({
                message: "Error occurred while fetching cards.",
                placement: "bottomRight",
                // bottom: 400,
              });
            })
        );
        break;
      case "4":
        setActiveTabKey("4");
        break;
      default:
        setActiveTabKey("1");
    }
  }

  const onUpdateProfile = (values:any) => {
    setLoading(true);
    dispatch(
      updateUserProfileRequest(
        values,
        user.id,
        (response:any) => {
          dispatch(
            fetchUserRequest(
              user.id,
              (response:any) => {
                setLoading(false);
                notification.success({
                  message: "Profile updated successfully.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              },
              (error:any) => {
                setLoading(false);
                notification.error({
                  message: "Error occurred while fetching user details.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              }
            )
          )
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while updating profil.e",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  };

  const onAddAddressClick = () => {
    setShowAddAddressForm(true);
  }

  const onCancelAddAddress = () => {
    setShowAddAddressForm(false);
  }

  const onSaveAddress = (values:any) => {
    values["country"] = "AU";
    setLoading(true);
    dispatch(
      saveUserAddressRequest(values,
        (data:any) => {
          dispatch(
            fetchUserAddressesRequest(
              (data:any) => {
                setAddresses(data.data);
                setShowAddAddressForm(false);
                setLoading(false);
                notification.success({
                  message: "Address added successfully.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              },
              (error:any) => {
                setLoading(false);
                notification.error({
                  message: "Error occurred while fetching addresses.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              })
          );
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while saving address.",
            placement: "bottomRight",
            // bottom: 400,
          });
        })
    );
  }

  const onDeleteAddress = (addressId:any) => {
    setLoading(true);
    dispatch(
      deleteUserAddressRequest(addressId,
        (data:any) => {
          dispatch(
            fetchUserAddressesRequest(
              (data:any) => {
                setAddresses(data.data);
                setLoading(false);
                notification.success({
                  message: "Address deleted successfully.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              },
              (error:any) => {
                setLoading(false);
                notification.error({
                  message: "Error occurred while fetching addresses.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              })
          );
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while deleting address.",
            placement: "bottomRight",
            // bottom: 400,
          });
        })
    );
  }

  const onAddCardClick = () => {
    setShowAddCardForm(true);
  }

  const onCancelAddCard = () => {
    setShowAddCardForm(false);
  }

  const onSaveCard = (values:any) => {
    values["cardNumber"] = window.eCrypt.encryptValue(
      values["cardNumber"],
      process.env.REACT_APP_MERCHANT_CLIENT_ENC_KEY
    );
    values["cvn"] = window.eCrypt.encryptValue(
      values["cvn"],
      process.env.REACT_APP_MERCHANT_CLIENT_ENC_KEY
    );
    setLoading(true);
    dispatch(
      saveUserCardRequest(
        values,
        (response:any) => {
          dispatch(
            fetchUserCardsRequest(
              (data:any) => {
                setCards(data);
                setShowAddCardForm(false);
                setLoading(false);
                notification.success({
                  message: "Card added successfully.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              },
              (error:any) => {
                setLoading(false);
                notification.error({
                  message: "Error while fetching cards.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              })
          );
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error while saving card.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  };

  const onDeleteCard = (cardId:any) => {
    setLoading(true);
    dispatch(
      deleteUserCardRequest(cardId,
        (data:any) => {
          dispatch(
            fetchUserCardsRequest(
              (data:any) => {
                setCards(data);
                setLoading(false);
                notification.success({
                  message: "Card deleted successfully.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              },
              (error:any) => {
                setLoading(false);
                notification.error({
                  message: "Error while fetching cards.",
                  placement: "bottomRight",
                //   bottom: 400,
                });
              })
          );
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error while deleting card.",
            placement: "bottomRight",
            // bottom: 400,
          });
        })
    );
  }

  const onUpdatePassword = (values:any) => {
    setLoading(true);
    dispatch(
      updateUserPasswordRequest(
        values,
        (response:any) => {
          if (response.token.access_token && response.token.refresh_token) {
            localStorage.setItem("access_token", `Bearer ${response.token.access_token}`);
            localStorage.setItem("refresh_token", response.token.refresh_token);
            setLoading(false);
            notification.success({
              message: "Password updated successfully.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          } else {
            setLoading(false);
            notification.error({
              message: "Error occurred while updating password.",
              placement: "bottomRight",
            //   bottom: 400,
            });
          }
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while updating password.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }

  return (
    loading ? (
      <Spin />
    ) : (
      <>
        <AccountSettings
          user={user}
          activeTabKey={activeTabKey}
          addresses={addresses}
          showAddAddressForm={showAddAddressForm}
          onTabChange={onTabChange}
          onUpdateProfile={onUpdateProfile}
          onAddAddressClick={onAddAddressClick}
          onCancelAddAddress={onCancelAddAddress}
          onSaveAddress={onSaveAddress}
          onDeleteAddress={onDeleteAddress}
          cards={cards}
          showAddCardForm={showAddCardForm}
          onAddCardClick={onAddCardClick}
          onCancelAddCard={onCancelAddCard}
          onSaveCard={onSaveCard}
          onDeleteCard={onDeleteCard}
          onUpdatePassword={onUpdatePassword}
        />
          )
      </>
    )
  );
};

function mapStateToProps(state:any) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps, {})(AccountSettingsPage);
