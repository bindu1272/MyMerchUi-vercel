import React from "react";
import { Typography, Card, Tooltip, Radio } from "antd";
import { CreditCardOutlined, DeleteOutlined } from "@ant-design/icons";

const SavedCard = ({
  card,
  selectedCardId,
  showSelection,
  onSelect,
  onDelete
}) => {

  return (
    <Card hoverable style={{ margin: "10px", borderRadius: '6px' }}>
      {showSelection &&
        <Radio
          checked={selectedCardId ?
            selectedCardId == card.id ? true : false
            : card.is_default ? true : false}
          onClick={() => onSelect(card.id)}
        ></Radio>}
      <CreditCardOutlined style={{ paddingRight: 10, paddingLeft: 20 }} />
      <Typography.Text strong="true">
        {card.card_number}
      </Typography.Text>
      <Tooltip title="Delete card">
        <DeleteOutlined
          style={{ float: "right", clear: "right" }}
          onClick={() => onDelete(card.id)} />
      </Tooltip>
    </Card>
  );
};
export default SavedCard;
