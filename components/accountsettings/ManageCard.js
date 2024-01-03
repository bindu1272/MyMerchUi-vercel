import React from "react";
import { Button, Typography, } from "antd";
import SavedCardList from "./SavedCardList";
import AddCardForm from "./AddCardForm"

const ManageCard = ({
  cards,
  showAddCardForm,
  onAddCardClick,
  onCancelAddCard,
  onSaveCard,
  onDeleteCard,
}) => {
  return (
    <>
      {showAddCardForm &&
        <AddCardForm
          showForm={showAddCardForm}
          onSave={onSaveCard}
          onCancel={onCancelAddCard}
        />
      }
      {cards && cards.length > 0 ?
        (
          <SavedCardList
            cards={cards}
            showSelection={false}
            onDeleteCard={onDeleteCard}
          />
        ) :
        (
          <Typography.Text
            style={{ fontSize: "20px", marginLeft: "10px" }}
          >
            No Saved Cards
          </Typography.Text>
        )
      }
      <Button
        onClick={() => onAddCardClick()}
        className="mt-4 btn"
      >
        Add Card
     </Button>


    </>
  );
};

export default ManageCard;
