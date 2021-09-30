import React from 'react';
import './GameActionButtons.css';

const GameActionButtons = () => {
    return (
        <div className="actions-buttons-box">
            <button className="button-bet">Bet</button>
            <button className="button-raise">Raise</button>
            <button className="button-check">Check</button>
            <button className="button-pass">Pass</button>
        </div>
    )
}

export default GameActionButtons;
