/*
let msg = document.querySelector(".message");
console.log(msg); //display the entire tag
console.log(document.querySelector(".message").textContent); //display the innerHTML part of tag
document.querySelector(".message").textContent = "🤩 Correct Number";
*/
let secreatNumber = Math.floor(Math.random() * 20);
let score = 20;
let highScore = 0;
const displayMessage = function (element, message) {
  document.querySelector(`.${element}`).textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    displayMessage("message", "❌ No number!");
  }
  // when player wins
  else if (guess == secreatNumber) {
    displayMessage("message", "Congragulation!!🎉🎊");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    displayMessage("number", secreatNumber);
    if (score > highScore) {
      highScore = score;
      displayMessage("highscore", highScore);
    }
  } 
  // when guess is wrong
  else if (guess != secreatNumber) {
    if (score > 1) {
      displayMessage(
        "message",
        guess < secreatNumber ? "Guess is too low" : "Guess is too high"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("message", "You Lost the game");
      displayMessage("score", 0);
    }
  }
});
// reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secreatNumber = Math.floor(Math.random() * 20);
  displayMessage("score", score);
  displayMessage("message", "Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
