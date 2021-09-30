import React, { useState } from 'react'
import GameActionButtons from '../GameActionButtons/GameActionButtons'
import Hand from '../Hand/Hand';
import './Board.css'

const Board = () => {
    const [hand, setHand] = useState([Array(5).fill(null)])
    const [pot, setPot] = useState(0);
    const [action, setAction] = useState('Bet');

    return (
        <div className="boardContainer">
            <div className="box-hand-1">
                <h3>Box One</h3>
                <p>This is the box for hand1</p>
            </div>
            <div className="box-pot">
                <h3>Pot Box</h3>
                <p>This is the box for Pot</p>
            </div>
            <div className="box-hand-2">
                <h3>Box Two</h3>
                <p>This is the box for hand 2</p>
            </div>
            <div className="box-action-buttons">
                <GameActionButtons />
            </div>
        </div>

    )
}

export default Board;
