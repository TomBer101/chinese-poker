// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'
import cardInfo from '../../utils/cardsInfo.json';

function Card({ value, suit, flip, laneID, children }) {

    if (flip) {
        return (
            <div className='game-card'>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
    return (
        <div className={`game-card`} data-testid={`card-${value}-${suit}`}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                    <image href={`${process.env.PUBLIC_URL}/images/cards/${value}${suit}.svg`} width="100%" height="100%" />
                </svg>
            </span>
        </div>
    );
}

export default Card;
