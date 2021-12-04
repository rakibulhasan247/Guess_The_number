'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

let startGuess = function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when user no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    // when user wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#1F1C4B";
        document.body.style.color = "white";
        document.querySelector('.number').style.backgroundColor = "#ffdb0e";
        document.querySelector('.number').style.width = "25rem";

    }

    // when guess too high
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '💹 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😿 You lost the game!';
        }

    }
    //when guess too low
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '💹 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😿 You lost the game!';
        }
    }
}
document.querySelector('.check').addEventListener('click', startGuess);