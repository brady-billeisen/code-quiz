var startBtn = document.querySelector('#start-btn');
var answerBtns = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start')
var quizEl = document.querySelector('#quiz')
var endEl = document.querySelector('#end')
var quizData = [
    {
        question: "What should be wrapped around an item/items to signify it's an array?",
        answers: [
            {answer: "A. {} - Curly brackets", correct: false},
            {answer: "B. [] - Square brackets", correct: true},
            {answer: "C. () - Parentheses", correct: false},
            {answer: "D. // - Double forward slash", correct: false},
        ]
    },
    {
        question: "what does '||' symbolize in javascript?",
        answers: [
            {answer: "A. It symbolizes 'or'", correct: true},
            {answer: "B. It symbolizes 'and'", correct: false},
            {answer: "C. Trick question, it symbolizes nothing", correct: false},
            {answer: "D. It symbolizes the division operator", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {answer: "A. Hypertext Markdown Language", correct: false},
            {answer: "B. High Transfer Markup Language", correct: false},
            {answer: "C. Hypertext Markup Language", correct: true},
            {answer: "D. None of the above", correct: false},
        ]
    },
    {
        question: "When using a for loop, if you wanted to make i add 1 to itself through each loop, what would you use?",
        answers: [
            {answer: "A. i--", correct: false},
            {answer: "B. i++", correct: true},
            {answer: "C. i**", correct: false},
            {answer: "D. None of the above", correct: false},
        ]
    }
]
var score = 0

function createQuiz() {
    var quizContainer = document.getElementById("quiz");

    for (var i = 0; i < quizData.length; i++) {
        var questionContainer = document.createElement("div");
        questionContainer.classList.add("question");
        var question = document.createElement("h3")
        question.textContent = quizData[i].question;

        questionContainer.appendChild(question);

        for (var x = 0; x < quizData[i].answers.length; x++) {
            var answerContainer = document.createElement("div");
            answerContainer.classList.add("answer");

            var answer = document.createElement("input");
            answer.type = "radio";
            answer.name = "question" + i;
            answer.value = quizData[i].answers[x].answer;

            var answerLabel = document.createElement("label");
            answerLabel.textContent = quizData[i].answers[x].answer

            answerContainer.appendChild(answer);
            answerContainer.appendChild(answerLabel);

            questionContainer.appendChild(answerContainer);
        }
        quizContainer.appendChild(questionContainer);
    }
}


startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});
answerBtns.forEach(function(answerBtn) {
    answerBtn.addEventListener('click', function() {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = null;
    })
})
submitBtn.addEventListener('click', function() {
    startEl.style.display = null;
    quizEl.style.display = "none";
    endEl.style.display = "none";
});

createQuiz();