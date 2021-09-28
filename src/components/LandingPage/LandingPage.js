import React from 'react';
import './landingPage.css';

const LandingPage = ({ onClickHandler }) => {

    return (
        <div className="landing-page">
            <div className="greeting">
                <h1 className="greeting-msg">Welcome to Poker Game</h1>
            </div>
            <div className="button-box">
                <button className="button-start-game"
                    onClick={onClickHandler}>Enter Game</button>
            </div>
        </div>
    )
}

export default LandingPage;
