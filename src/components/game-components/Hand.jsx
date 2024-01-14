import React from "react";
import Card from "./Card";
import { Stack } from "react-bootstrap";

function Hand({cards, listID}) {

    if (!cards.length) {
        return <Card key='none' suit='' rank='' />
    }

    const [first, ...rest] = cards;

    return (
        <Stack className="cards-list">
            {
                cards.map((card, index) => {
                    return (<div key={index} className="card-holder" style={{top: `${-22 * index}px`}}>
                        <Card flip={index==4} laneID={listID} value={card.value} suit={card.suit} key={index} />
                    </div>
                    )
                })
            }
        </Stack>
    )
}

export default Hand;