var time = 15;
var $timer = document.querySelector("#timer");
var $startQ = document.querySelector("#startBtn");
var $questionContainer = document.querySelector;
var startCont = document.querySelector("#startQuiz");
$("#endscreen").hide();

function startQuiz() {
  var timerInterval = setInterval(function () {
    timer.textContent = time;
    time--;
    if (time <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);

  startQuiz.style.display = "none";

  quiz();
}

(function Quiz() {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // When user loads the page, they see title, description,and a start quiz button
  // They're going to click "start quiz"
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. What year did I graduate?",
      answers: {
        a: "2019",
        b: "2011",
        c: "2013",
        d: "2015",
      },
      correctAnswer: "c",
    },
    {
      question: "2. Which unnatural hair color did I have?",
      answers: {
        a: "blue",
        b: "purple",
        c: "orange",
        d: "pink",
      },
      correctAnswer: "b",
    },
    {
      question: "3. Would I rather travel or dine at the fanciest restaurants?",
      answers: {
        a: "travel",
        b: "dine like a queen",
      },
      correctAnswer: "a",
    },
    {
      question: "4. What camera do I shoot with?",
      answers: {
        a: "Canon",
        b: "Sony",
        c: "Nikon",
      },
      correctAnswer: "b",
    },
    {
      question: "5. Do I prefer cats or dogs?",
      answers: {
        a: "dogs",
        b: "cats",
      },
      correctAnswer: "b",
    },
  ];

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");

    slides[n].classList.add("active-slide");

    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
