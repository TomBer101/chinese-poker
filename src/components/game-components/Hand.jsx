import React from "react";
import Card from "./Card";

function Hand({cards, listID}) {

    if (!cards.length) {
        return <Card suit='' rank='' />
    }

    const [first, ...rest] = cards;

    return (
        <div className="card-list">
            <Card key={index} suit={card.suit} laneID={listID} rank={card.rank} flip={index === 4? true : false} >
                {!!rest.length && <Hand cards={rest} listID={listID}/> }
            </Card>
        </div>
    )
}

export default Hand;