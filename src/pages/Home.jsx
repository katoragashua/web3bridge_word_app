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
    scrambledFunction,
    handleGuess,
    nextWord,
    startGame,
  } = useContext(Context);

  return (
    <div className="home">
      <h1>Word Scramble Game</h1>
      <p>Unscramble the word below:</p>
      <button onClick={startGame}>Start Game</button>
      <div className="word-display">{scrambledWord || "Loading..."}</div>
      <input type="text" placeholder="Your guess" onChange={handleGuess} />
      <button
      // onClick={checkGuess}
      >
        Submit Guess
      </button>
      <button onClick={() => setShowHint(!showHint)}>
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>
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
