import React, { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Board from "./components/Board/Board";

const App = () => {
  const [startPage, setStartPage] = useState(true);

  const clickHandler = () => {
    setStartPage(false);
  };


  return (
    <div className="App">
      {startPage && <LandingPage onClickHandler={clickHandler} />}
      {!startPage && <Board />}
    </div>
  );
}

export default App;
