import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


import Deck from "./Deck";
import {default as GameCard} from "./Card";
// import cards from '../../utils/deck';
//import shuffleDeck from '../../utils/shuffleDeck';
import shufflingSound from '../../assets/sounds/shuffling-cards-1.mp3';
import '../../styles/game-components/Game.css'



function Game() {

    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const [turn, setTurn] = useState(-1);
    const [numberOfTurns, setNumberOfTurns] = useState(-1);
    const [gameDeck, setGameDeck] = useState(null);
    const [currentCard, setCurrentCard] = useState(null); // New state for the current card
    const [playerHands, setPlayerHands] = useState([[[], [], [], [], []], [[], [], [], [], []]]);

    const playShufflingSound = new Audio(shufflingSound);

    const currentPlayerRole = 'player1';

    // useEffect(() => { // Init
    //     //const shuffledCards = shuffleDeck(cards);
    //     //const player1Cards = shuffledCards.splice(0, 5);
    //     //const player2Cards = shuffledCards.splice(0, 5);
    //     setGameDeck(shuffledCards);

    //     for (let i = 0; player1Cards.length; i++) {
    //         addCardToHand(0, i, player1Cards[i]);
    //         addCardToHand(1, i, player2Cards[i]);
    //     }
    // }, []);

    const addCardToHand = (playerIndex, handIndex, card) => {
        setPlayerHands(prevHands => {
            const newHands = [...prevHands];
            newHands[playerIndex][handIndex].push(card);
            return newHands;
        });
    };

    const handleDeckClick = () => {

        const updatedGameDeck = [...gameDeck];
        const drawnCard = updatedGameDeck.pop();
        setCurrentCard(drawnCard);
        setGameDeck(updatedGameDeck);
    }


    return (
        <div className="game-container">
            <Container fluid>
                {/* Top row - Opponent's cards */}
                <Row className="mt-4">
                    {currentPlayerRole === 'player1'
                        ? playerHands[1].map((card, index) => (
                            <Col key={index} className="mb-3 card-slot">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{card.rank}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{card.suit}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : playerHands[0].map((card, index) => (
                            <Col key={index} className="mb-3 card-slot">
                                <Card>
                                    {/* Render your card content here */}
                                    <Card.Body>
                                        <Card.Title>{card.rank}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{card.suit}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>

                {/* Bottom row - Current player's cards */}
                <Row>
                    {currentPlayerRole === 'player1'
                        ? playerHands[0].map((card, index) => (
                            <Col key={index} className="mb-3 card-slot">
                                <Card>
                                    {/* Render your card content here */}
                                    <Card.Body>
                                        <Card.Title>{card.rank}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{card.suit}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : playerHands[1].map((card, index) => (
                            <Col key={index} className="mb-3 card-slot">
                                <Card>
                                    {/* Render your card content here */}
                                    <Card.Body>
                                        <Card.Title>{card.rank}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{card.suit}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>

                {/* Right column - Deck of cards */}
                <Col md="auto" className="float-right">
                    {gameDeck && <Deck amountOfCards={gameDeck.length} onClick={handleDeckClick}/>}
                    {currentCard && <GameCard flip={false} laneID={-1} suit={currentCard.suit} rank={currentCard.rank}/>}
                </Col>
            </Container>
        </div>
    )
}

export default Game;