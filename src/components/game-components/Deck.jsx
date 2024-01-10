// Deck.js
import React from 'react';
import Card from './Card';

import cardFlipSound from '../../assets/sounds/card-flip.mp3';

function Deck({ onClick, amountOfCards }) {

    const [playcardFlipSound] = useSound(cardFlipSound);

    const handleOnClick = () => {
        playcardFlipSound();
        onClick();
    }

    if (amountOfCards !== 0) {
        return (
            <div className='deck' onClick={handleOnClick}>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
}



export default Deck;
