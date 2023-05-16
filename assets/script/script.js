var startBtn = document.querySelector('#start-btn');
var answerBtns = document.querySelectorAll('.answer input');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var quizContainer = document.getElementById("quiz");
questionIndex = 0;
var score = 0;
var quizData = [
    {
        question: "What should be wrapped around an item/items to signify it's an array?",
        answers: [
            {answer: "1. {} - Curly brackets", correct: false},
            {answer: "2. [] - Square brackets", correct: true},
            {answer: "3. () - Parentheses", correct: false},
            {answer: "4. // - Double forward slash", correct: false},
        ]
    },
    {
        question: "What does '||' symbolize in javascript?",
        answers: [
            {answer: "1. It symbolizes 'or'", correct: true},
            {answer: "2. It symbolizes 'and'", correct: false},
            {answer: "3. Trick question, it symbolizes nothing", correct: false},
            {answer: "4. It symbolizes the division operator", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {answer: "1. Hypertext Markdown Language", correct: false},
            {answer: "2. High Transfer Markup Length", correct: false},
            {answer: "3. Hypertext Markup Language", correct: true},
            {answer: "4. None of the above", correct: false},
        ]
    },
    {
        question: "If you wanted to increment variable 'i' by 1, how would you do that?",
        answers: [
            {answer: "1. i--", correct: false},
            {answer: "2. i++", correct: true},
            {answer: "3. i**", correct: false},
            {answer: "4. None of the above", correct: false},
        ]
    }
];

function displayQuestion() {
    var questionContainer = document.createElement("div");
    questionContainer.setAttribute("style", "width: 50%;")
    questionContainer.classList.add("question");
    
    var question = document.createElement("h3")
    question.setAttribute("style", "margin-bottom: 20px; margin-left: 20px; margin-right: 20px; font-size: 25px; font-weight: bold")
    question.textContent = quizData[questionIndex].question;

    questionContainer.appendChild(question);

    for (var i = 0; i < quizData[questionIndex].answers.length; i++) {
        var answerContainer = document.createElement("div");
        answerContainer.classList.add("answer");

        var answer = document.createElement("button");
        answer.setAttribute("style", "background-color: #5a189a; border-radius: 10px; color: white; margin: 2px; cursor: pointer; padding-top: 2px; padding-bottom: 2px; padding-left: 10px; padding-right: 10px; font-size: 15px;")
        answer.textContent = quizData[questionIndex].answers[i].answer;

        answerContainer.appendChild(answer);

        questionContainer.appendChild(answerContainer);

        answer.addEventListener('click', handleAnswerClick);
    }
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionContainer);
}

function handleAnswerClick() {
    var selectedAnswer = this.value

    questionIndex++;
    score++

    if (questionIndex < quizData.length) {
        displayQuestion();
    } else {
        startEl.style.display = null;
        quizEl.style.display = "none";
        endEl.style.display = null;
        console.log("Your score: " + score)
    }
}


startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
    displayQuestion();
});
submitBtn.addEventListener('click', function() {
    startEl.style.display = null;
    quizEl.style.display = "none";
    endEl.style.display = "none";
});