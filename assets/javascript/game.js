// Define all variables in HTML

var computerChoiceSpan = document.getElementById("computerChoice");
var userGuessSpan = document.getElementById("userGuess");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var guessLeftSpan = document.getElementById("guessLeft")
var guessSoFarSpan = document.getElementById("guessSoFar");
var alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessSoFar = [];
var wins = 0
var losses = 0
var guessLeft = 10

// When the user presses on the key and releases from the keyboard...

document.onkeyup = function (event) {
    console.log(event.key);
    var userGuess = event.key;
    var computerChoice = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("User guess equals", userGuess)
    console.log("Computer guess equals", computerChoice)

    if (userGuess === computerChoice) {
        wins++;
        winsSpan.innerText = wins;
        guessLeft = 10;
        guessSoFarSpan.innerText = " ";
    } else if (guessLeft === 0) {
        losses++;
        guessLeft = 10;
        lossesSpan.innerText = losses;
        guessSoFarSpan.innerText = " ";
    } else {
        guessLeft--;
        guessLeftSpan.innerText = guessLeft;
        guessSoFarSpan.innerText += (userGuess + ", ");
    }
}