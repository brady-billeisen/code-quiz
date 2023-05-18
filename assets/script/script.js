var startBtn = document.querySelector('#start-btn');
var titleEl = document.querySelector('#title');
var questionsEl = document.querySelector('#questions');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timerEl = document.querySelector('#timer');

var state = {
    timeRemaining: 90,
    view: 'START',
    questionIndex: 0,
    questions: [],
}

function setView(view) {
    startEl.style.display = view === 'START' ? null : 'none';
    quizEl.style.display = view === 'QUIZ' ? null : 'none';
    endEl.style.display = view === 'END' ? null : 'none';
}

function buildQuestion() {
    var question = state.questions[state.questionIndex];
    questionsEl.innerHTML = null;
    for (var choice of question.choices) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = choice;
        questionsEl.appendChild(buttonEl);
    }
}

function init() {
    timerEl.textContent = state.timeRemaining;
}

state.questions = [
    {
        title: "What should be wrapped around an item/items to signify it's an array?",
        choices: [
            "1. {} - Curly brackets",
            "2. [] - Square brackets",
            "3. () - Parentheses",
            "4. // - Double forward slash",
        ],
        correct: 1
    }
];


startBtn.addEventListener('click', function() {
    setView('QUIZ');
    buildQuestion();
});
questionsEl.addEventListener('click', function() {
    setView('END');
})
submitBtn.addEventListener('click', function() {
    setView('START');
});

init();