import React from "react";
import { Button, Typography, } from "antd";
import SavedAddressList from "./SavedAddressList";
import AddAddressForm from "./AddAddressForm"

const ManageAddress = ({
    addresses,
    showAddAddressForm,
    onAddAddressClick,
    onCancelAddAddress,
    onSaveAddress,
    onDeleteAddress,
}) => {

    return (
        <>
            {showAddAddressForm &&
                <AddAddressForm
                    showForm={showAddAddressForm}
                    onSave={onSaveAddress}
                    onCancel={onCancelAddAddress}
                />
            }
            {addresses && addresses.length > 0 ?
                (
                    <SavedAddressList
                        addresses={addresses}
                        showSelection={false}
                        onDeleteAddress={onDeleteAddress}
                    />
                ) :
                (
                    <Typography.Text
                        style={{ fontSize: "20px", marginLeft: "10px" }}
                    >
                        No Saved Addresses
                    </Typography.Text>
                )
            }
            <Button
                onClick={() => onAddAddressClick()}
                className="mt-4 btn"
            >
                Add Address
     </Button>
        </>
    );
};

export default ManageAddress;
