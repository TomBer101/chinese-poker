// Card.js
import React from 'react';

function Card ({ suit, rank })  {


    return (
        
        <div className="card">
          {rank} of {suit}
        </div>
    )
}





export default Card;
