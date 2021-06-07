//JS Project 1:  Guess the word

//Big Picture Steps
//1.  Select elements and add placeholders (1-3)
//2.  Accept and validate player guesses (4-)

//Steps:
//1.  Create global variables
//2.  Write a function to add placeholders for each letter
//3.  Add an event listener for the button
//4.  Create a function to check player's input
//5.  Validate input in the button event handler
//6.  Add new global variable for player guesses
//7.  Create a function to capture input

//1. CREATE GLOBAL VARIABLES
//Unordered list where guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
//"Guess" button
const guessLetterButton = document.querySelector(".guess");
//Text input box where player will guess a letter
const letterInput = document.querySelector(".letter");
//Empty paragraph where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//Paragraph where the remaining guesses message will display
const remainingGuessesElement = document.querySelector(".remaining");
//Span that holds the remaining guesses number
const remainingGuessesSpan = document.querySelector(".remaining span");
//Empty paragraph where the messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//Hidden play again button
const playAgainButton = document.querySelector(".play-again");

//Create a global variable for the word being guessed and give it a value
const word = "magnolia";
//6.  Global variable for player guesses
const guessedLetter = [];

//2.  ADD PLACEHOLDERS
//Create and name a function to add placeholders for each letter
//loop through mulitple objects but assign the number of dots in the word
//turns an array into a string with .join()
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      //console.log(letter);
      //placeholderLetters.push("☀️");
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };

  placeholder(word);


//3.  ADD EVENT LISTENER FOR THE BUTTON  
//Add event listener for the button
//prevent default behavior of clicking button, form submitting, and then reloading page
//5.  Validate input in button event handler
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    //console.log(guess);
    const goodGuess = validateInput(guess);
    console.log(goodGuess);

    if (goodGuess) {
    makeGuess(guess);
    }

    letterInput.value = "";
    });


  //4.  CHECK PLAYER'S INPUT
  //Create and name a function that accepts input value (letter) as a parameter using a regular expression
  //Make sure input is empty, not more than 1 letter, and is a letter (i.e., matches the accepted letter var).
  const validateInput = function (input) {
    const acceptedLetter = /[a-zA-A]/;
    if (input === "") {
      message.innerText = "Please enter a letter.";
    }
      else if (input.length > 1) {
        message.innerText = "Please enter one letter per guess.";
    }
      else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z."
    }
      else { return input;
    }
  };


  //7.  Create a function to capture input
  //Add guess to guessed letters array if it hasn't been guessed
  const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetter.includes(guess)) {
      message.innerText = "You already guessed that letter. Try again.";
    } else {
      guessedLetter.push(guess);
      console.log(guessedLetter);
    }
  };
