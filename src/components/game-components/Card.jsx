// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'
import cardInfo from '../../utils/cardsInfo.json';

function Card({ suit, rank, flip, laneID, children }) {

    const isDiamond = suit === '◆';

    return (

        
            <div className={`game-card`} data-testid={`card-${rank}-${suit}`}>
                {flip ? (
                    <div className='game-card'>
                        <img src='images/cards/BACK.svg' alt='card_back' />
                    </div>
                ) : (
                    <div className='card-content card__rank-left' data-testid={`rank-${rank}`}>
                        {rank}
                        <div className='card__content card__suit-left' data-testid={`suit-${suit}`}> 
                            {cardInfo["symbol"][suit]}
                        </div>
                        <div className='card__content card__suit-right' data-testid={`suit-${suit}`}>
                            {cardInfo["symbol"][suit]}
                        </div>
                        <div className="card__content card__rank-right" data-testid={`rank-${rank}`}>{rank}</div>
                    </div>
                )}
            </div>

    );
};





export default Card;
