'use strict';

let secretNumber;
let guess;
function rand() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

rand();
let score = 20;

// DOM Manipulation for Guess
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔⛔⛔';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent =
      'Correct Number 🎉🎉🎉😊😊';
    document.querySelector('body').style.backgroundColor = 'rgb(42, 172, 9)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High 📈📈📈';
    score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low 📉📉📉';
    score--;
  }

  if (score < 0) {
    document.querySelector('.message').textContent =
      'You Lose, Please Try Again 👾👾👾👾';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'rgb(107, 7, 7)';
  } else {
    document.querySelector('.score').textContent = score;
  }
});

// DOM Mainpulation for again Button
document.querySelector('.again').addEventListener('click', function () {
  if (
    Number(document.querySelector('.highscore').textContent) < score &&
    guess == secretNumber
  ) {
    document.querySelector('.highscore').textContent = score;
  }
  score = 20;
  document.querySelector('.score').textContent = score;
  rand();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '11rem';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
});
