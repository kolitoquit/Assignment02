let coinFlip;

do {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
        document.write("Heads");
    } else {
        document.write("Tails");
    }

} while (coinFlip === 0);
