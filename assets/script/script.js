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
            {answer: "  {} - Curly brackets", correct: false},
            {answer: "  [] - Square brackets", correct: true},
            {answer: "  () - Parentheses", correct: false},
            {answer: "  // - Double forward slash", correct: false},
        ]
    },
    {
        question: "What does '||' symbolize in javascript?",
        answers: [
            {answer: "  It symbolizes 'or'", correct: true},
            {answer: "  It symbolizes 'and'", correct: false},
            {answer: "  Trick question, it symbolizes nothing", correct: false},
            {answer: "  It symbolizes the division operator", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {answer: "  Hypertext Markdown Language", correct: false},
            {answer: "  High Transfer Markup Language", correct: false},
            {answer: "  Hypertext Markup Language", correct: true},
            {answer: "  None of the above", correct: false},
        ]
    },
    {
        question: "When using a for loop, if you wanted to make i add 1 to itself through each loop, what would you use?",
        answers: [
            {answer: "  i--", correct: false},
            {answer: "  i++", correct: true},
            {answer: "  i**", correct: false},
            {answer: "  None of the above", correct: false},
        ]
    }
];

function displayQuestion() {
    var questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
    
    var question = document.createElement("h3")
    question.textContent = quizData[questionIndex].question;

    questionContainer.appendChild(question);

    for (var i = 0; i < quizData[questionIndex].answers.length; i++) {
        var answerContainer = document.createElement("div");
        answerContainer.classList.add("answer");

        var answer = document.createElement("button");
        answer.textContent = quizData[questionIndex].answers[i].answer;

        answerContainer.appendChild(answer);

        questionContainer.appendChild(answerContainer);

        answer.addEventListener('click', handleAnswerClick);
    }
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionContainer);
    // questionIndex++;
}

function handleAnswerClick() {
    var selectedAnswer = this.value

    questionIndex++;
    score++;

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