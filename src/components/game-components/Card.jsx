// Card.js
import React from 'react';
import '../../styles/game-components/Card.css'

function Card({ suit, rank, flip, laneID, children }) {

    const isDiamond = suit === '◆';

    return (


        <div className={`card ${suit === "♣︎" || suit === "♠︎" ? "card-black" : "card-red"}`}>
            {flip? (
                <div>
                    <img src='images/cards/BACK.svg' alt='card_back' />
                </div>
            ) : (
                <div className='card-content'>
                    <div className='card-header'>
                        <span>{rank}</span>
                        <span>{suit}</span>
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
    );
};





export default Card;
