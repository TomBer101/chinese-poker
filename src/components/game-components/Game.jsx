import React, { useEffect, useState } from "react";
import useSound from useSound;


import Deck from "./Deck";
import Card from "./Card";
import Cards from '../../utils/deck';
import shuffleDeck from '../../utils/shuffleDeck';
import shufflingSound from '../../assets/sounds/shuffling-cards-1.mp3';


import { Container } from "react-bootstrap";




function Game() {

    const [gameOver, setGameOver] = useState(flase);
    const [winner, setWinner] = useState('');
    const [turn, setTurn] = useState(-1);
    const [numberOfTurns, setNumberOfTurns] = useState(-1);
    const [gameDeck, setGameDeck] = useState(null);
    const [currentCard, setCurrentCard] = useState(null); // New state for the current card
    const [playerHands, setPlayerHands] = useState([[[], [], [], [], []], [[], [], [], [], []]]);

    const [playShufflingSound] = useSound(shufflingSound);

    const currentPlayerRole = 'player1';

    useEffect(() => { // Init
        const shuffledCards = shuffleDeck(Cards);
        const player1Cards = shuffledCards.splice(0, 5);
        const player2Cards = shuffledCards.splice(0, 5);
        setGameDeck(shuffledCards);

        for (let i = 0; player1Cards.length; i++) {
            addCardToHand(0, i, player1Cards[i]);
            addCardToHand(1, i, player2Cards[i]);
        }
    }, []);

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
                            <Col key={index} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{card.rank}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{card.suit}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : playerHands[0].map((card, index) => (
                            <Col key={index} className="mb-3">
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
                            <Col key={index} className="mb-3">
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
                            <Col key={index} className="mb-3">
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
                    <Deck amountOfCards={gameDeck.length} onClick={handleDeckClick}/>
                    {drawnCard && <Card flip={false} laneID={-1} suit={drawnCard.suit} rank={drawnCard.rank}/>}
                </Col>
            </Container>
        </div>
    )
}

export default Game;