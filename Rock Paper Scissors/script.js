const displayStatus = document.querySelector(".display_notifications");
const images = document.querySelectorAll(".images");

const choices = ["Rock", "Paper", "Scissors"];
// computer choice function
const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "Draw";
  const winConditions = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  return winConditions[playerChoice] === computerChoice ? "Win" : "Lose";
};

document.querySelector(".play_game").addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    const playerChoice =
      e.target.alt.charAt(0).toUpperCase() + e.target.alt.slice(1); // Ensure correct case
    displayStatus.textContent = "Wait...";

    // Disable all images
    images.forEach((img) => img.classList.add("disabled"));
    document.querySelector(".left").classList.add("left_animation");
    document.querySelector(".right").classList.add("right_animation");

    setTimeout(() => {
      document.querySelector(".left").classList.remove("left_animation");
      document.querySelector(".right").classList.remove("right_animation");
      const computerChoice = getComputerChoice();
      const result = getWinner(playerChoice, computerChoice);

      // Debugging: Log choices and result
      console.log(
        `Player: ${playerChoice}, Computer: ${computerChoice}, Result: ${result}`
      );

      // Display result
      displayStatus.textContent =
        result === "Draw"
          ? "It's a Draw!"
          : result === "Win"
          ? "You Won!"
          : "Computer Won!";
      images.forEach((img) => img.classList.remove("disabled"));
    }, 2000);
  }
});
