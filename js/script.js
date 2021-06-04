//JS Project 1:  Guess the word

//Steps:
//1.  Create global variables
//2.  Write a function to add placeholders for each letter
//3.  Add an event listener for the button

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


//Create and name a function to add placeholders for each letter
//loop through mulitple objects but assign the number of dots in the word
//turns an array into a string with .join()
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("☀️");
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };

  placeholder(word);

//Add event listener for the button
//prevent default behavior of clicking button, form submitting, and then reloading page
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
  });