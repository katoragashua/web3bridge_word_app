import React, { useContext } from "react";
import { Context } from "../Context";
import { nanoid } from "nanoid";
import data from "../data.json";

console.log(data);

const Home = () => {
  const {
    words,
    currentWord,
    scrambledWord,
    hint,
    guess,
    score,
    correctGuesses,
    showHint,
    message,
    timeLeft,
    gameActive,
    handleInputChange,
    handleGuess,
    nextWord,
    startGame,
    handleHint,
  } = useContext(Context);

  return (
    <div className="home">
      <h1>Word Scramble Game</h1>
      <p>Unscramble the word below:</p>
      <button onClick={startGame}>Start Game</button>
      <div className="timer-display">
        {gameActive ? `Time Left: ${timeLeft}s` : "Game not started"}
      </div>
      <div className="word-display">{scrambledWord || "Loading..."}</div>
      <input type="text" placeholder="Your guess" onChange={handleInputChange} />
      <button
      onClick={handleGuess}
      >
        Submit Guess
      </button>
      <button onClick={handleHint}>
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>
      {showHint && <div className="hint-display">Hint: {hint}</div>}
      {message && <div className="message-display" style={{color: "red"}}>{message}</div>}
      <button onClick={nextWord}>Next Word</button>
      <div className="score-display">
        {/* Display score and other game stats here */}
        <p>Score: {score}</p>
        <p>Correct Guesses: {correctGuesses}</p>
      </div>
    </div>
  );
};

export default Home;
