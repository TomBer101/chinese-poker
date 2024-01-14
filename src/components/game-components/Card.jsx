// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'
import cardInfo from '../../utils/cardsInfo.json';

function Card({ flip, laneID, children }) {

    const value = "A";
    const suit = "♣︎";

    if (flip) {
        return (
            <div className='game-card'>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
    return (
        <div className={`game-card ${(suit === "♣︎" || suit === "♠︎") ? 'card-black' : 'card-red'}`} data-testid={`card-${value}-${suit}`}>
            <div className="card-tl">
                <div className="card-value" data-testid={`rank-${value}`}>
                    {value}
                </div><div className="card-suit" data-testid={`suit-${suit}`}>
                    {suit}
                </div>
            </div>
            <div className="card-br">
                <div className="card-value" data-testid={`rank-${value}`}>
                    {value}
                </div>
                <div className="card-suit" data-testid={`suit-${suit}`}>
                    {suit}
                </div>
            </div>
        </div>);    
}


export default Card;
