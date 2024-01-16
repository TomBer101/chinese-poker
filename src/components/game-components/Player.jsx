import React from 'react';
import Hand from './Hand';
import '../../styles/game-components/Player.css';

import { Stack } from 'react-bootstrap';

function Player({ hands }) {


    return (
        <div className='player-hands'>

                <Stack direction="horizontal" gap={3}>
                    {
                        hands.map((hand, index) => {
                            return <Hand listID={index} cards={hand} key={index} />
                        })
                    }
                </Stack>


        </div>
    )
}

export default Player;