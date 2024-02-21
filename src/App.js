import './App.css';
import React,{ useState } from 'react';


const choices = ["ROCK", "PAPER", "SCISSOR"]

const App = () => {

const [computerChoice,setComputerChoice] = useState(null);
const [playerChoice, setPlayerChoice] = useState(null)
const [outCome, setOutCome] = useState(null)

function computerAction(buttonSelected) {
  const randomChoice = choices[Math.floor(Math.random()*choices.length)]
  setComputerChoice(randomChoice)
  setPlayerChoice(buttonSelected)
  console.log("Computer's Choice " , computerChoice);
  console.log("You Selected ", buttonSelected);
  determineWinner(buttonSelected, randomChoice)
}

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    setOutCome("Tie")
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER")
  ) {
    setOutCome("Player wins!");
  } else {
    setOutCome("Computer wins!");
  }
}


return (
  <div className="app-container">
    <h1>Rock Paper Scissor</h1>

    <div className="game-container">
      <UserChoices onSelect={computerAction} />
      <div className="col">
        <h2>{computerChoice}</h2>
      </div>
    </div>

    <div className="container">
      <h2>{outCome}</h2>
    </div>
  </div>
);
}

const UserChoices = ({ onSelect }) => (
<div className="col">
  {choices.map(choice => (
    <button key={choice} onClick={() => onSelect(choice)}>
      {choice}
    </button>
  ))}
</div>
);

export default App;