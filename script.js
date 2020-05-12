function buildQuiz(){}
function showResults(){}

// When user loads the page, they see title, description,and a start quiz button
// They're going to click "start quiz"
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


//displaying quiz questions
    const myQuestions = [
        {
            question: "1. What year did I graduate?",
            answers: {
                a: "2019", b: "2011", c: "2013", d: "2015",
            },
            correctAnswer: "c"
        },
        {
            question: "2. Which unnatural hair color did I have?",
            answers: {
                a: "blue", b: "purple", c:"orange", d: "pink",
            },
            correctAnswer: "b"
        },
        {
            question: "3. Would I rather travel or dine at the fanciest restaurants?",
            answers: {
                a: "travel", b: "dine like a queen",
            },
            correctAnswer: "a"
        },
        {
            question: "4. What camera do I shoot with?",
            answers: {
                a: "Canon", b: "Sony", c: "Nikon",
            },
            correctAnswer: "b"
        },
        {
            question: "5. Do I prefer cats or dogs?",
            answers: {
                a: "dogs", b: "cats",
            },
            correctAnswer: "b"
        }
    ];

    

//display quiz right away
buildQuiz();

//on Submit, show results
submitButton.addEventListener("click", showResults);


    //display the list of questions on the page
    function buildQuiz(){
        // variable to store the HTML output
        const output = [];

        // for each question 
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                //variable to store the list of possible answers
                const answers = [];

                //and for each available answer
                for(letter in currentQuestion.answers){

                    //add an HTML radio button
                    answers.push(
                        <label>
                            <input type="radio" name="question"${questionNumber}" value="${letter}"/>
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                            </label>
                    );
                }
                // add this question and its answers to the output
                output.push(
                    <div class="question">${currentQuestion.question}</div>
                    <div class="answers">${answers.join("")}</div>
                );
            }
        );

        //finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    //start building the HTML for each question
    // we'll need to loops through each question

    myQuestions.forEach((currentQuestion, questionNumber) => {
        //the code we want to run for each question goes here
    });
