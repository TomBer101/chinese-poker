// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'
import cardInfo from '../../utils/cardsInfo.json';

function Card({ flip, laneID, children }) {

    const rank = "A";
    const suit = "heart";

    if (flip) {
        return (
            <div className='game-card'>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
    return (
        <div className={`game-card ${suit}`} data-testid={`card-${rank}-${suit}`}>
            <div className='card-content card__rank-left' data-testid={`rank-${rank}`}>
                {rank}
            </div>
            <div className='card__content card__suit-left' data-testid={`suit-${suit}`}>
                {cardInfo["symbol"][suit]}
            </div>
            <div className='card__content card__suit-right' data-testid={`suit-${suit}`}>
                {cardInfo["symbol"][suit]}
            </div>
            <div className="card__content card__rank-right" data-testid={`rank-${rank}`}>
                {rank}
            </div>
        </div>
    )
}







export default Card;
