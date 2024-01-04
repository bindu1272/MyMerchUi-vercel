import React from 'react';
import SavedCard from './SavedCard';

const SavedCardList = ({
    cards,
    showSelection,
    selectedCardId,
    onSelectCard,
    onDeleteCard,
}) => {
    return (
        cards && cards.length > 0 && cards.map((card,index) => {
            return (
                <SavedCard key={index}
                    card={card}
                    selectedCardId={selectedCardId}
                    showSelection={showSelection}
                    onSelect={onSelectCard}
                    onDelete={onDeleteCard}
                />
            );
        })
    )
};

export default SavedCardList;