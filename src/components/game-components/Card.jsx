// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'
import cardInfo from '../../utils/cardsInfo.json';

function Card({ value, suit, flip, laneID, children }) {

    var name = 'logo';
    var num = 192;

    if (flip) {
        return (
            <div className='game-card'>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
    return (
        <div className={`game-card`} data-testid={`card-${value}-${suit}`}>
                    <img src={`images/cards/${value}${suit}.svg`}  />
          
        </div>
    );
}

export default Card;
