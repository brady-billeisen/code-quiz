var startBtn = document.querySelector('#start-btn');
var answerBtns = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit');
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');

function displayQuestion() {}


startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});
submitBtn.addEventListener('click', function() {
    startEl.style.display = null;
    quizEl.style.display = "none";
    endEl.style.display = "none";
});