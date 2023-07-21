var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");

var player = document.getElementById("player");
let grid = document.getElementById("gr");

let turn = 1;
const clicked = (e) => {
  if (turn == 1) {
    e.innerText = "X";
    turn = 2;
  } else if (turn == 2) {
    e.innerText = "O";
    turn = 1;
  }
  e.setAttribute("disabled", "");
  player.innerText = `Player ${turn} turn`;

  if (win() == 1) {
    player.innerText = `Player 1 wins`;
  } else if (win() == 2) {
    player.innerText = `Player 2 wins`;
  }
  if (win() != 0) {
    for (let i = 0; i < grid.children.length; i++) {
      grid.children[i].classList.add("green");
    }
  }

  if (isDraw()) {
    for (let i = 0; i < grid.children.length; i++) {
      grid.children[i].classList.remove("green");
      grid.children[i].classList.add("yellow");
    }
    player.innerText = "Match Draw";
  }
};

const win = () => {
  let result = 0;
  if (b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X") {
    result = 1;
  } else if (
    b4.innerText == "X" &&
    b5.innerText == "X" &&
    b6.innerText == "X"
  ) {
    result = 1;
  } else if (
    b7.innerText == "X" &&
    b8.innerText == "X" &&
    b9.innerText == "X"
  ) {
    result = 1;
  } else if (
    b1.innerText == "X" &&
    b5.innerText == "X" &&
    b9.innerText == "X"
  ) {
    result = 1;
  } else if (
    b3.innerText == "X" &&
    b5.innerText == "X" &&
    b7.innerText == "X"
  ) {
    result = 1;
  } else if (
    b1.innerText == "X" &&
    b4.innerText == "X" &&
    b7.innerText == "X"
  ) {
    result = 1;
  } else if (
    b2.innerText == "X" &&
    b5.innerText == "X" &&
    b8.innerText == "X"
  ) {
    result = 1;
  } else if (
    b3.innerText == "X" &&
    b6.innerText == "X" &&
    b9.innerText == "X"
  ) {
    result = 1;
  }
  if (b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O") {
    result = 2;
  } else if (
    b4.innerText == "O" &&
    b5.innerText == "O" &&
    b6.innerText == "O"
  ) {
    result = 2;
  } else if (
    b7.innerText == "O" &&
    b8.innerText == "O" &&
    b9.innerText == "O"
  ) {
    result = 2;
  } else if (
    b1.innerText == "O" &&
    b5.innerText == "O" &&
    b9.innerText == "O"
  ) {
    result = 2;
  } else if (
    b3.innerText == "O" &&
    b5.innerText == "O" &&
    b7.innerText == "O"
  ) {
    result = 2;
  } else if (
    b1.innerText == "O" &&
    b4.innerText == "O" &&
    b7.innerText == "O"
  ) {
    result = 2;
  } else if (
    b2.innerText == "O" &&
    b5.innerText == "O" &&
    b8.innerText == "O"
  ) {
    result = 2;
  } else if (
    b3.innerText == "O" &&
    b6.innerText == "O" &&
    b9.innerText == "O"
  ) {
    result = 2;
  }
  return result;
};

const isDraw = () => {
  let bool = true;
  for (let i = 0; i < grid.children.length; i++) {
    if (grid.children[i].innerText == "-") {
      bool = false;
      break;
    }
  }
  return bool;
};

const reset = () => {
  let grid = document.getElementById("gr");
  for (let i = 0; i < grid.children.length; i++) {
    grid.children[i].innerText = "-";
    grid.children[i].removeAttribute("disabled");
    turn = 1;
    player.innerText = `Start Game`;
    grid.children[i].classList.remove("green");
    grid.children[i].classList.remove("yellow");
  }
};
