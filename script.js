function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie! ";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You Win!  ${userChoice} beats ${computerChoice}`;
    } else {
        result = `You Lose!  ${computerChoice} beats ${userChoice}`;
    }

    document.getElementById("result").innerText = result;
}
