let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let compCount = 0;
let userCount = 0;
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function genCompChoice() {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function playGame(userChoice) {
  let compChoice = genCompChoice();
  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    msg.innerHTML = `You Win! your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
    userCount++;
    userScore.innerHTML = userCount;
  } else {
    msg.innerHTML = `You Lose computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compCount++;
    compScore.innerHTML = compCount;
  }
}

function drawGame() {
  msg.innerHTML = "The Game Is Draw";
  msg.style.backgroundColor = "rgb(8, 27, 49)";
}
