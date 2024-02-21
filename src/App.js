import React, { useState } from 'react';
import './App.css';

const choices = ["ROCK", "PAPER", "SCISSOR"];

const App = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [gameInProgress, setGameInProgress] = useState(false);

  const computerAction = (buttonSelected) => {
    if (!gameInProgress) {
      // Start a new game
      setOutcome(null);
      setScore({ player: 0, computer: 0 });
      setGameInProgress(true);
    }

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    setPlayerChoice(buttonSelected);
    determineWinner(buttonSelected, randomChoice);
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setOutcome("Tie");
    } else if (
      (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
      (playerChoice === "PAPER" && computerChoice === "ROCK") ||
      (playerChoice === "SCISSOR" && computerChoice === "PAPER")
    ) {
      setOutcome("Player wins!");
      setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
    } else {
      setOutcome("Computer wins!");
      setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
    }
  };

  const resetGame = () => {
    setComputerChoice(null);
    setPlayerChoice(null);
    setOutcome(null);
    setGameInProgress(false);
    setScore(0,0)
  };

  return (
    <div className="app-container">
      <h1>Rock Paper Scissors</h1>

      <div className="game-container">
        <UserChoices onSelect={computerAction}/>
        <div className="col">
          <h2>{computerChoice}</h2>
        </div>
      </div>

      <div className="container">
        <h2>{outcome}</h2>
        <h3>Score: Player {score.player} - {score.computer} Computer</h3>
      </div>
      
      <StartButton onClick={resetGame} text={gameInProgress ? 'Reset Game' : 'Start Game'} />
    </div>
  );
};

const UserChoices = ({ onSelect}) => (
  <div className="col">
    {choices.map(choice => (
      <button key={choice} onClick={() => onSelect(choice)}>
        {choice}
      </button>
    ))}
  </div>
);

const StartButton = ({ onClick, text }) => (
  <div className="col">
    <button onClick={onClick}>
      {text}
    </button>
  </div>
);

export default App;
