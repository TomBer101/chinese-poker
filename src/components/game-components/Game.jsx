import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


import Deck from "./Deck";
import { default as GameCard } from "./Card";
import Player from './Player';
import populateCards from '../../utils/populateCards';
import cardsInfo from '../../utils/cardsInfo.json';
import shufflingSound from '../../assets/sounds/shuffling-cards-1.mp3';
import '../../styles/game-components/Game.css'



function Game() {

    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const [turn, setTurn] = useState(-1);
    const [numberOfTurns, setNumberOfTurns] = useState(-1);
    const [gameDeck, setGameDeck] = useState([]);
    const [currentCard, setCurrentCard] = useState(null); // New state for the current card
    const [playerHands, setPlayerHands] = useState([[[], [], [], [], []], [[], [], [], [], []]]);
    const playShufflingSound = new Audio(shufflingSound);

    const currentPlayerRole = 'player1'; // the player at this client.



    useEffect(() => {
        if (gameDeck.length === 0) {
            const cards = populateCards();
            const player1Cards = cards.splice(0, 5);
            const player2Cards = cards.splice(0, 5);

            setPlayerHands(prevHands => {
                const newHands = prevHands.map((playerHands, playerIndex) =>
                    playerHands.map((hand, handIndex) => {
                        const card = (playerIndex === 0) ? player1Cards[handIndex] : player2Cards[handIndex];
                        return [card]; // Each most inner array contains one card
                    })
                );
                return newHands;
            });
            setGameDeck(cards);
        }


    }, []);


    const handleDeckClick = () => {
        const updatedGameDeck = [...gameDeck];
        const drawnCard = updatedGameDeck.pop();
        setCurrentCard(drawnCard);
        setGameDeck(updatedGameDeck);
    }


    return (
        <div className="game-container">
            <Container fluid>
                <Row className="mb-3 component">
                    <Col style={{transform: 'rotate(180deg)'}}>
                        {currentPlayerRole === 'player1' ? <Player hands={playerHands[1]} key={1} /> 
                            : <Player hands={playerHands[0]} key={1} />}
                    </Col>
                    <Col className="float-end" style={{transform: 'rotate(180deg)'}}>
                        {gameDeck && <Deck amountOfCards={gameDeck.length} onClick={handleDeckClick} currentCard={currentCard}/>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {currentPlayerRole === 'player1' ? <Player hands={playerHands[0]} key={0} /> :
                            <Player hands={playerHands[1]} key={0} />}
                    </Col>
                    <Col className="float-end ">
                            {/* currentCard is displayed to current client! */}
                          {currentCard?  <GameCard flip={false} laneID={-1} suit={currentCard.suit} value={currentCard.value} /> :<div className={`card-placeholder`}></div> }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Game;