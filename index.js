// index.js

// Function to generate a random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get references to the dice image elements
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

// Generate random numbers for Player 1 and Player 2
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

// Construct the paths to the random dice images
var randomDiceImage1 = './images/dice' + randomNumber1 + '.png';
var randomDiceImage2 = './images/dice' + randomNumber2 + '.png';

// Set the src attributes of the dice images for Player 1 and Player 2
img1.setAttribute('src', randomDiceImage1);
img2.setAttribute('src', randomDiceImage2);

// Compare the dice values and update the h1 text accordingly
if (randomNumber1 > randomNumber2) {
    resultText.innerHTML = '🚩Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
    resultText.innerHTML = 'Player 2 Wins!🚩';
} else {
    resultText.innerHTML = 'It\'s a Draw!';
}