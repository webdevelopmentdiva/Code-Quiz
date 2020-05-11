// When user loads the page, they see title, description,and a start quiz button
// They're going to click "start quiz"
var button = document.querySelector("#quizStart");
button.addEventListener.apply("click", quiz);

function quiz() {
questions(questions, document.getElementById("#quizContainer"));
console.log.quizTimer
}
var time = 90 ;
function quizTimer() {
    var timeLeft = 90;
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
    }, 1000);

var questions = [
    {
        q1: "What year did I graduate?",
        answer1: {
            a: "2019", b: "2011", c: "2013", d: "2015",
        },
        correctAnswer: "c"
    },
    {
        q2: "Which unnatural hair color did I have?",
        answer2: {
            a: "blue", b: "purple", c:"orange", d: "pink",
        },
        correctAnswer: "a"
    },
    {
        q2: "Would I rather travel or dine at the fanciest restaurants?",
        answer2: {
            a: "travel", b: "dine like a queen",
        },
        correctAnswer: "a"
    },
    {
        q2: "What camera do I shoot with?",
        answer2: {
            a: "Canon", b: "Sony", c: "Nikon",
        },
        correctAnswer: "b"
    },
    {
        q2: "Do I prefer cats or dogs?",
        answer2: {
            a: "dogs", b: "cats",
        },
        correctAnswer: "b"
    },
]
// Now we show them question 1
// They choose an answer


// Create a function to show whether or not true or false for the answer
// All would be false except A (if A is correct answer)
// If they choose A, they're right
// else if they choose anything else, they're wrong and deduct 10 seconds
// seconds left should be a global variable
// Move on to the next question
// Repeat 3 more times
// They finish the quiz, give them form for initials
// When they enter initials, save them in local storage to be pulled up later
// when user starts quiz, trigger timer to start countdown
// if timer reaches 0, end time (activity 8)
// Whatever time is left becomes score
// var q1 = document.querySelector(".q1");
// var example = document.querySelector("#a1");
// document.getElementById("a1");