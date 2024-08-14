console.log("welcome to tic tac toe");
//initial turn

let turn = "X";
let gameover = false;
let reset = "";

//function for change turn//
const changeTurn = (turn) => {
  return turn === "X" ? "0" : "X";
};
//function for check win//
const CheckWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "won";
      gameover = true;
    }
  });
};
//game logic//
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn(turn);
      console.log(turn);
      CheckWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

function resetEverything() {
  let boxtexts = document.querySelectorAll(".boxtext");

  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}

//logic for reset button//
const resetbtn = document.getElementById("reset");
resetbtn.addEventListener("click", resetEverything);
