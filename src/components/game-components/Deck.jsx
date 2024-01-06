// Deck.js
import React from 'react';
import Card from './Card';

function Deck ({onClick, isDisplayed}) {

    return(
        <div className='deck' onClick={onClick}>
            {
                isDisplayed &&
                <img src='images/cards/BACK.svg' alt='card_back'/>
            }
        </div>
    )
}



export default Deck;
