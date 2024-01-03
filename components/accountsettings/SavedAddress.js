import React from "react";
import { Typography, Card, Tooltip, Radio } from "antd";
import { CreditCardOutlined, DeleteOutlined } from "@ant-design/icons";

const SavedAddress = ({
    address,
    selectedAddressId,
    showSelection,
    onSelect,
    onDelete }) => {

    return (
        <Card hoverable style={{ margin: "10px", borderRadius: '6px' }}>
            {showSelection &&
                <Radio
                    checked={selectedAddressId ?
                        selectedAddressId == address.id ? true : false
                        : address.is_default ? true : false}
                    onClick={() => onSelect(address.id)}
                ></Radio>
            }
            <CreditCardOutlined style={{ paddingRight: 10, paddingLeft: 20 }} />
            <Typography.Text strong="true">
                {address.name}
            </Typography.Text>
            <Tooltip title="Delete Address">
                <DeleteOutlined style={{ float: "right", clear: "right" }} onClick={() => onDelete(address.id)} />
            </Tooltip>
        </Card>
    );
};
export default SavedAddress;
