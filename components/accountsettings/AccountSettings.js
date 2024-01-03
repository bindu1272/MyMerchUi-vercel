import React from "react";
import { Tabs } from "antd";
import ManageProfile from "./ManageProfile"
import ManageCard from "./ManageCard";
import ManagePassword from "./ManagePassword";
import ManageAddress from "./ManageAddress";
import GoogleSetup from "../../utilities/GoogleSetUp";

const { TabPane } = Tabs;

const AccountSettings = ({
  user,
  activeTabKey,
  onTabChange,
  onUpdateProfile,
  addresses,
  showAddAddressForm,
  onAddAddressClick,
  onCancelAddAddress,
  onSaveAddress,
  onDeleteAddress,
  cards,
  showAddCardForm,
  onAddCardClick,
  onCancelAddCard,
  onSaveCard,
  onDeleteCard,
  onUpdatePassword,
}) => {

  return (
    <>
      <div className="profile_settings_block">
        <GoogleSetup
          title={'Account Settings'}
          description={""}
        />
        <div className="top_title_bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h1>Account Settings</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="profile_info">
                <Tabs
                  defaultActiveKey={"1"}
                  activeKey={activeTabKey}
                  onChange={onTabChange}
                >
                  <TabPane tab="Profile" key="1">
                    <ManageProfile
                      user={user}
                      onUpdateProfile={onUpdateProfile}
                    />
                  </TabPane>
                  <TabPane tab="Addresses" key="2">
                    <ManageAddress
                      addresses={addresses}
                      showAddAddressForm={showAddAddressForm}
                      onAddAddressClick={onAddAddressClick}
                      onCancelAddAddress={onCancelAddAddress}
                      onSaveAddress={onSaveAddress}
                      onDeleteAddress={onDeleteAddress}
                    />
                  </TabPane>
                  <TabPane tab="Cards" key="3">
                    <ManageCard
                      cards={cards}
                      showAddCardForm={showAddCardForm}
                      onAddCardClick={onAddCardClick}
                      onCancelAddCard={onCancelAddCard}
                      onSaveCard={onSaveCard}
                      onDeleteCard={onDeleteCard}
                    />
                  </TabPane>
                  {user && !user.firebase_uuid &&
                    <TabPane tab="Password" key="4">
                      <ManagePassword
                        onUpdatePassword={onUpdatePassword}
                      />
                    </TabPane>
                  }
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
