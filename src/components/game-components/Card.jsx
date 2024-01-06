// Card.js
import React from 'react';
import '../../styles/game-components/Card.className'

function Card({ suit, rank }) {


    return (


        <div className={`card ${(suit == "♣︎" || suit == "♠︎") ? "card-black" : "card-red"}`}>
            <div className="card-tl">
                <div className="card-value">
                    {value}
                </div>
                <div className="card-suit">
                    {suit}
                </div>
            </div>
            <div className="card-br">
                <div className="card-value">
                    {value}
                </div>
                <div className="card-suit">
                    {suit}
                </div>
            </div>
        </div>
    )
}





export default Card;
