// Deck.js
import React from 'react';

import cardFlipSound from '../../assets/sounds/card-flip.mp3';

function Deck({ onClick, amountOfCards }) {

    //const [playcardFlipSound] = useSound(cardFlipSound);
    const playCardFlipSong = new Audio(cardFlipSound);

    const handleOnClick = () => {
        playCardFlipSong.play();
        onClick();
    }

    if (amountOfCards !== 0) {
        return (
            <div className='deck game-card' onClick={handleOnClick}>
                <img src='images/cards/BACK.svg' alt='card_back' />
            </div>
        )
    }
}



export default Deck;
