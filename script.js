'use strict';

const generateSecretNumber = function () {
  Math.floor(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setGuessValue = function (value) {
  document.querySelector('.guess').value = value;
};

const setHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

let secretNumber = generateSecretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score === 1) {
    score--;
    displayMessage('💥 You lost the game!');
    displayScore(score);
    return;
  }

  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    setBodyBackground('#60b347');
    setNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      setHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    score--;
    displayScore(score);
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  setGuessValue('');
  setBodyBackground('#222');
  setNumberWidth('15rem');
});
