let coinFlip;
let numFlips = parseInt(prompt("How many times do you want to flip the coin?"));

for (let i = 0; i < numFlips; i++) {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
        document.write("Heads");
    } else {
        document.write("Tails")
    }
}