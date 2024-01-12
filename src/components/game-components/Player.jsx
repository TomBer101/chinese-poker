import React from 'react';
import Hand from './Hand';
import '../../styles/game-components/Player.css';

import { Stack } from 'react-bootstrap';

function Player({ hands }) {


    return (
        <div className='player-hands'>

                <Stack direction="horizontal" gap={3}>
                    <Hand listID={0} cards={hands[0]} key={0}/>
                    <Hand listID={1} cards={hands[1]} key={1}/>
                    <Hand listID={2} cards={hands[2]} key={2}/>
                    <Hand listID={3} cards={hands[3]} key={3}/>
                    <Hand listID={4} cards={hands[4]} key={4}/>
                </Stack>


        </div>
    )
}

export default Player;