import React from 'react';
import SavedAddress from './SavedAddress';

const SavedAddressList = ({
    addresses,
    showSelection,
    selectedAddressId,
    onSelectAddress,
    onDeleteAddress
}) => {
    return (
        addresses && addresses.length > 0 && addresses.map((address) => {
            return (
                <SavedAddress
                    address={address}
                    selectedAddressId={selectedAddressId}
                    showSelection={showSelection}
                    onSelect={onSelectAddress}
                    onDelete={onDeleteAddress}
                />
            );
        })
    )
};

export default SavedAddressList;