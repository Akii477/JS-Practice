let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".remaining");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const para = document.createElement("p");

let prevGuess = []; // to store the guesses you entered.
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // check the guess should be valid;
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number");
    } else if (guess < 1) {
        alert("Please Enter a Valid Number");
    } else if (guess > 100) {
        alert("Please Enter a Valid Number");
    } else {
        // add into an array
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Randow number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // to return message the value is correct, low or high;
    if (guess === randomNum) {
        displayMessage("You Win! You Guessed it right!");
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is Tooo low`);
    } else if (guess > randomNum) {
        displayMessage(`Number is Tooo High`);
    }
}

function displayGuess(guess) {
    // user input value will be updated with empty string.
    userInput.value = "";
    userGuess.innerHTML += `${guess},`; //show to window
    numGuess++; // update the guesses.
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // to interact with user or DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    para.classList.add("button");
    para.innerHTML = `<button style="backgroundColor:"black";color:"white"; id='newGame'>Start New Game</button>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

function newGame() {
    const newButton = document.querySelector(`#newGame`);
    newButton.addEventListener("click", function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userGuess.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(para);
        playGame = true;
    });
}
