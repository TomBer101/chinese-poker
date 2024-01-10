// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'

function Card({ suit, rank, flip, laneID, children }) {

    const isDiamond = suit === '◆';

    return (

        <div className='card-container'>
            <div className={`card ${suit === "♣︎" || suit === "♠︎" ? "card-black" : "card-red"}`} data-testid={`card-${rank}-${suit}`}>
                {flip ? (
                    <div>
                        <img src='images/cards/BACK.svg' alt='card_back' />
                    </div>
                ) : (
                    <div className='card-content'>
                        <div className='card-header'>
                            <span data-testid={`rank-${rank}`}>{rank}</span>
                            <span data-testid={`suit-${suit}`}>{suit}</span>
                        </div>
                        <div className='card-body'>
                            <span className={`icon ${isDiamond ? 'diamond' : ''}`}>
                                {suit}
                            </span>
                        </div>
                    </div>
                )}
                {children && <div className='card-child'>{children}</div>}
                {!children && (
                    <div className='card-bucket' />
                )}
            </div>
        </div>

    );
};





export default Card;
