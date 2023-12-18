'use strict';

// generate random number first
let secretNumber = Math.floor(Math.random() * 20 + 1);
// console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', (e)=>{
    const guess = Number(document.querySelector('.guess').value);

    // typeof guess
    // check with: console.log(typeof guess);
    // primitive -- number, boolean, string, undefined, null, symbol (ES6), BigInt (ES2015/ES6)

    // complex data type: object

    // do validation check
    if(!guess){
        displayMessage('No number!');
    }
    else if(guess === secretNumber){
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high':'Too low');
            score--; // score = score - 1
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//activate "gain" btn

document.querySelector('.again').addEventListener('click', (e)=>{
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);

    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});