let firstNum = parseInt(prompt("Enter a number between 1 and 10"));
let secondNum = parseInt(prompt("Enter a another number between 1 and 10"));

let result;
if (firstNum > secondNum) {
    result = firstNum;
} else if (secondNum > firstNum) {
    result = secondNum;
} else {
    result = "Both numbers are equal";
}

alert(result);