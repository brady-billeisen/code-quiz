var startBtn = document.querySelector('#start-btn');
var titleEl = document.querySelector('#title');
var questionsEl = document.querySelector('#questions');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timerEl = document.querySelector('#timer');
var initialInput = document.querySelector('#initials');
var timeInterval;
var viewScores = document.querySelector('.nav-scores');
var highScoreEl = document.querySelector('#high-scores');
var scoresBodyEl = document.querySelector('#scores-body');

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
    highScoreEl.style.display = view === 'HIGH-SCORES' ? null : 'none';
}

function buildQuestion() {
    var question = state.questions[state.questionIndex];
    questionsEl.innerHTML = null;
    questionsEl.dataset.correct = question.correct;
    titleEl.textContent = question.title;
    for (var i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i]
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('id', 'answer-btn')
        buttonEl.textContent = choice;
        buttonEl.dataset.value = i;
        questionsEl.appendChild(buttonEl);
    }
}

function updateScore() {
    var initials = initialInput.value;
    var score = state.timeRemaining;
    var entry = {
        initials: initials,
        score: score,
    };
    var scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(entry);

    localStorage.setItem('scores', JSON.stringify(scores));
}

function startTimer() {
    timeInterval = setInterval(function () {
        state.timeRemaining--;

        if (state.timeRemaining === 0) {
            clearInterval(timeInterval);
            setView('END');
        }

        timerEl.textContent = state.timeRemaining;
    }, 1000)
}

function displayHighScores() {
    var scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.sort(function(a, b) {
        return b.score - a.score
    })

    scoresBodyEl.innerHTML = '';

    for (var i = 0; i < scores.length; i++) {
        var score = scores[i]
        var row = document.createElement('tr');
        var initialsContainer = document.createElement('td');
        var scoreContainer = document.createElement('td');

        initialsContainer.textContent = score.initials;
        scoreContainer.textContent = score.score;

        if (initialsContainer.textContent.length === 0) {
            initialsContainer.textContent = 'N/A'
        }

        row.append(initialsContainer);
        row.append(scoreContainer);

        scoresBodyEl.appendChild(row)
    }
}

function init() {
    timerEl.textContent = state.timeRemaining;
}

state.questions = [
    {
        title: "What should be wrapped around an item/items to signify it's an array?",
        choices: [
            "A. {} - Curly brackets",
            "B. [] - Square brackets",
            "C. () - Parentheses",
            "D. // - Double forward slash",
        ],
        correct: 1
    },
    {
        title: "What does '||' symbolize in javascript?",
        choices: [
            "A. It symbolizes 'or'",
            "B. It symbolizes 'and'",
            "C. Trick question, it symbolizes nothing",
            "D. It symbolizes the division operator",
        ],
        correct: 0
    },
    {
        title: "What does HTML stand for?",
        choices: [
            "A. Hypertext Markdown Language",
            "B. High Transfer Markup Language",
            "C. Hypertext Markup Language",
            "D. None of the above",
        ],
        correct: 2
    },
    {
        title: "if you want to increment a variable 'i' by one in javascript, how would you do that?",
        choices: [
            "A. i--",
            "B. i++",
            "C. i**",
            "D. None of the above",
        ],
        correct: 1
    },
];


startBtn.addEventListener('click', function () {
    init();
    setView('QUIZ');
    startTimer();
    buildQuestion();
});
questionsEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        var parent = event.target.parentNode;
        state.questionIndex++;

        if (parent.dataset.correct === event.target.dataset.value) {

        } else {
            state.timeRemaining -= 10;
            timerEl.textContent = state.timeRemaining;
        }

        if (state.questionIndex === state.questions.length) {
            clearInterval(timeInterval);
            setView('END');
        } else {
            buildQuestion();
        }
    }
})
submitBtn.addEventListener('click', function () {
    updateScore();
    state.timeRemaining = 90;
    state.view = 'START';
    state.questionIndex = 0;
    timerEl.textContent = state.timeRemaining;
    setView('START');
});

viewScores.addEventListener('click', function (event) {
    event.preventDefault();
    setView('HIGH-SCORES');
    displayHighScores();
})

init();