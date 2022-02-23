function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML = 'You won <span id="winner-game">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardindex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardindex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardindex++;
    }
  }
}

function openGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set player name!");
    return;
  }
  //menampilkan function reset game data
  resetGameStatus();
  activePlayerElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  // console.log(gameData);
  const winnerId = checkForGameOver();
  // console.log(winnerId);
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // check for row and column
  for (i = 0; i < 3; i++) {
    if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
      return gameData[i][0];
      // return "row";
    }
  }

  for (i = 0; i < 3; i++) {
    if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]) {
      return gameData[0][i];
      // return "column";
    }
  }
  // check for top left to bottom right
  if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
    return gameData[0][0];
  }
  // check for top right to bottom left
  if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";
  gameIsOver = true;
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
