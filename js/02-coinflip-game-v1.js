let coinFlip = Math.round(Math.random());
let choice = prompt("Heads or Tails?").toLowerCase();
let result = (coinFlip === 0) ? "heads" : "tails";
if (choice === "heads" && result == "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (choice === "tails" && result == "heads") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (choice === "heads" && result == "tails") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (choice === "tails" && result == "tails") {
    alert("The flip was tails and you chose tails...you win!");
}