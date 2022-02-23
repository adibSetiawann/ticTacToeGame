const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editPlayerButton = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
//Element Listener
const playerOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const getFormElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const activePlayerElement = document.getElementById("active-player-name");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
const gameOverElement = document.getElementById("game-over");
//Button listener
const editPlayer1btnElement = document.getElementById("edit-player-1-btn");
const editPlayer2btnElement = document.getElementById("edit-player-2-btn");
const cancelButtonElement = document.getElementById("btn-cancel");
const startButtonElement = document.getElementById("start-btn");

editPlayer1btnElement.addEventListener("click", openPlayerConfig);
editPlayer2btnElement.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
getFormElement.addEventListener("submit", displayName);
startButtonElement.addEventListener("click", openGame);
//menggunakan for.. of karena output dari getelement diatas berupa array
// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField);
