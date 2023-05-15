var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('.answer');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start')
var quizEl = document.querySelector('#quiz')
var endEl = document.querySelector('#end')
var quizData = [
    {
        question: "What should be wrapped around an item/items to signify it's an array?",
        answers: [
            {answer: "{} - Curly brackets", correct: false},
            {answer: "[] - Square brackets", correct: true},
            {answer: "() - Parentheses", correct: false},
            {answer: "// - Double forward slash", correct: false},
        ]
    },
    {
        question: "what does '||' symbolize in javascript?",
        answers: [
            {answer: "It symbolizes 'or'", correct: true},
            {answer: "It symbolizes 'and'", correct: false},
            {answer: "Trick question, it symbolizes nothing", correct: false},
            {answer: "It symbolizes the division operator", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {answer: "Hypertext Markdown Language", correct: false},
            {answer: "High Transfer Markup Language", correct: false},
            {answer: "Hypertext Markup Language", correct: true},
            {answer: "None of the above", correct: false},
        ]
    },
    {
        question: "When using a for loop, if you wanted to make i add 1 to itself through each loop, what would you use?",
        answers: [
            {answer: "i--", correct: false},
            {answer: "i++", correct: true},
            {answer: "i**", correct: false},
            {answer: "None of the above", correct: false},
        ]
    }
]
var score = 0


startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});
answerBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = null;
});
submitBtn.addEventListener('click', function() {
    startEl.style.display = null;
    quizEl.style.display = "none";
    endEl.style.display = "none";
});