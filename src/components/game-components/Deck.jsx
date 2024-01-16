// Deck.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import cardFlipSound from '../../assets/sounds/card-flip.mp3';

function Deck({ onClick, amountOfCards, currentCard }) {
    const [show, setShow] = useState(false);

    const playCardFlipSong = new Audio(cardFlipSound);

    const handleOnClick = () => {
        /*
        TODO:
            1. check if this client is the current player.
            2. check if there is not a currenCard already.
        */
        if (!currentCard) {
            playCardFlipSong.play();
            onClick();
        } else {
            setShow(true);
        }

    }

    if (amountOfCards !== 0) {
        return (
            <div>
                <div className='deck game-card' onClick={handleOnClick}>
                    <img src='images/cards/BACK.svg' alt='card_back' />

                </div>
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header>
                        <Modal.Title>Oops...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have already picked a card!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}



export default Deck;
