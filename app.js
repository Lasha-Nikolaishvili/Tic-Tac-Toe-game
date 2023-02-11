const squares = document.querySelectorAll(".square");
const pls = document.querySelectorAll('.pl');
const howToPlay = document.querySelector(".how-btn");
const popupContainer = document.querySelector(".popup-container");
const controlsPopup = document.querySelector(".controls-popup");
const controlsOverlay = document.querySelector(".controls-overlay");
const closeBtn = document.querySelector(".close-btn");

controlsOverlay.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);
howToPlay.addEventListener("click", togglePopup);

function togglePopup() {
  controlsPopup.classList.toggle("active");
  controlsOverlay.classList.toggle("active");
}

let gameOver = false;
let plTurn = "O";
pls[1].style.visibility = 'hidden';

function displayResult(winner) {
  const winPopup = document.querySelector(".win-popup");
  const winOverlay = document.querySelector('win-overlay');
  const winMessage = document.querySelector(".win-message");
  const playAgainBtn = document.querySelector(".play-again-btn");

  if (winner != "draw") winMessage.innerHTML = `Player ${winner} has won!`;
  else winMessage.innerHTML = `The game is a draw!`;
  winPopup.style.display = "block";

  playAgainBtn.addEventListener("click", () => {
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerHTML = "";
    }
    winPopup.style.display = "none";
    pls[0].style.visibility = 'visible';
    pls[1].style.visibility = 'hidden';
    gameOver = false;
    plTurn = "O";
  });
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[a].innerHTML === squares[c].innerHTML &&
      squares[a].innerHTML !== ""
    ) {
      gameOver = true;
      displayResult(squares[a].innerHTML);
      break;
    }
  }

  if (!gameOver) {
    let emptySquares = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML === "") emptySquares++;
    }
    if (emptySquares === 0) {
      gameOver = true;
      displayResult("draw");
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].innerHTML === "" && !gameOver) {      
      if(plTurn === 'O') {
        pls[0].style.visibility = 'hidden';
        pls[1].style.visibility = 'visible';
      } else {
        pls[0].style.visibility = 'visible';
        pls[1].style.visibility = 'hidden';
      }
      squares[i].innerHTML = plTurn;
      checkForWin();
      plTurn = plTurn === "O" ? "X" : "O";
    }
  });
}
