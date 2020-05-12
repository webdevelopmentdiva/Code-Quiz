// When user loads the page, they see title, description,and a start quiz button
// They're going to click "start quiz"
document.getElementById("quizStart").addEventListener("click", quiz);


//Once we click start, display questions, choice of answers, start timer
function nextQuestion() {
    
    
}

        function quiz() {
            questions(questions, document.getElementById("#quizContainer"));
        console.log(quizTimer);
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
        }

var questions = [
    {
        q1: "1. What year did I graduate?",
        answer1: {
            a: "2019", b: "2011", c: "2013", d: "2015",
        },
        correctAnswer: "2013"
    },
    {
        q2: "2. Which unnatural hair color did I have?",
        answer2: {
            a: "blue", b: "purple", c:"orange", d: "pink",
        },
        correctAnswer: "purple"
    },
    {
        q3: "3. Would I rather travel or dine at the fanciest restaurants?",
        answer2: {
            a: "travel", b: "dine like a queen",
        },
        correctAnswer: "travel"
    },
    {
        q4: "4. What camera do I shoot with?",
        answer2: {
            a: "Canon", b: "Sony", c: "Nikon",
        },
        correctAnswer: "Sony"
    },
    {
        q5: "5. Do I prefer cats or dogs?",
        answer2: {
            a: "dogs", b: "cats",
        },
        correctAnswer: "cats"
    }
]

//keep track of the score of the user
var currentScore = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


questionIndex = 0;// Tucker had these???
var numCorrect = 0;
var time = 100;
var $timer = documentSelector("#timer");
var $startBtn = document.querySelector("#startBtn");
var $ = documentSelector("#");//not sure if I need these




//if user checks correct box, increase correct by 1++  
//function to display the next question

function nextQuestion
for() {
    if (correct === correctAnswer) {
        correctAnswers ++;
        nextQuestion();
    }
}
else if (correct != correctAnswer) {
    incorrectAnswer++;
    nextQuestion()
} 


//if user chooses incorrect box, incorrect by 1++
//function to display the next question

function nextQuestion



// if user runs out of time unanswered, increase by 1++
if
//function to display the next question
function nextQuestion



//Display Results
