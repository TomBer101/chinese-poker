// Deck.js
import React from 'react';
import Card from './Card';

function Deck ({onClick, isDisplayed}) {

    return(
        <div className='deck' onClick={onclick}>
            {
                isDisplayed &&
                <img src='images/cards/card_back.png' alt='card_back'/>
            }
        </div>
    )
}



export default Deck;
