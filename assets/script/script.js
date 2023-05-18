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
    questionsEl.dataset.correct = question.correct;
    titleEl.textContent = question.title;
    for (var i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i]
        var buttonEl = document.createElement('button');
        buttonEl.textContent = choice;
        buttonEl.dataset.value = i;
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
    },
    {
        title: "What should be wrapped around an item/items to signify it's an array?",
        choices: [
            "1. {} - Curly brackets",
            "2. [] - Square brackets",
            "3. () - Parentheses",
            "4. // - Double forward slash",
        ],
        correct: 1
    },
];


startBtn.addEventListener('click', function() {
    setView('QUIZ');
    buildQuestion();
});
questionsEl.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        var parent = event.target.parentNode;
        state.questionIndex++;
        console.log('isCorrect', parent.dataset.correct === event.target.dataset.value);
        if (state.questionIndex === state.questions.length) {
            setView('END');
        } else {
            buildQuestion();
        }
    }
})
submitBtn.addEventListener('click', function() {
    state.timeRemaining = 90;
    state.view = 'START';
    state.questionIndex = 0;
    setView('START');
});

init();