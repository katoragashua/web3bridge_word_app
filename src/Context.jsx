import React, { useEffect, useState } from "react";
export const Context = React.createContext();
const { Provider } = Context;
import data from "./data.json";
import { nanoid } from "nanoid";
import { use } from "react";
export const ContextProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [words, setWords] = useState([]);
  const [scrambledWord, setScrambledWord] = useState("");
  const [hint, setHint] = useState("");
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);

  const scrambledFunction = (word) => {
    let shuffled = "";
    let chars = word.split("");

    while (chars.length > 0) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      shuffled += chars.splice(randomIndex, 1);
    }
    return shuffled;
  };

  useEffect(() => {
    setWords(data || []);
  }, []);

  // useEffect(() => {
  //   // Initialize the game with a random word
  //   if (data.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * data.length);
  //     const wordData = data[randomIndex];
  //     setCurrentWord(wordData.word);
  //     setScrambledWord(scrambledFunction(wordData.word));
  //     // setHint(wordData.hint);
  //     // data.splice(randomIndex, 1); // Remove the word from the list
  //   }
  // }, []);

  const nextWord = () => {
    if (words.length === 0) {
      setMessage("No more words available.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    const wordData = words[randomIndex];
    setCurrentWord(wordData.word);
    setScrambledWord(scrambledFunction(wordData.word));
    setHint(wordData.hint);
    setGuess("");
    setShowHint(false);
    words.splice(randomIndex, 1); // Remove the word from the list
  };

  const handleHint = () => {
    if (showHint) {
      setShowHint(false);
    } else {
      setShowHint(true);
    }
  };

  const handleInputChange = (e) => setGuess(e.target.value);

  const handleGuess = () => {
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      setCorrectGuesses((prev) => prev + 1);
      setScore((prev) => prev + 10);
      nextWord();
    } else {
      setMessage("Incorrect guess. Try again!");
    }
    setGuess("");
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCorrectGuesses(0);
    setTimeLeft(60);
    setMessage("");
    setShowHint(false);
    nextWord();
  };

  console.log("Current Word:", currentWord);
  console.log("Scrambled Word:", scrambledWord);
  console.log("Hint:", hint);
  console.log(gameActive ? "Game is active" : "Game is not active");
  console.log("Score:", score);

  return (
    <Provider
      value={{
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
        scrambledFunction,
        handleGuess,
        nextWord,
        startGame,
        handleHint,
      }}
    >
      {children}
    </Provider>
  );
};

export default ContextProvider;
