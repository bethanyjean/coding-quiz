var timerEl = document.getElementById('timer');
var endgameCont = document.getElementById("endgame");
var Welcome = document.getElementById('welcome');
var quizList = document.getElementById('quiz');
var header = document.getElementById('header');
var highScoreList = document.getElementById('highScore')
var initialInputValue = document.querySelector("#initials")
var timeLeft = 75;
var currentQuestion = [];
var pageContentEl = document.querySelector("#page-content");
var highScore = [];
var scoreIdCounter = 0;
var currentScore = 0;
var score = {};
var i = 0;
var answerEvalEl = document.getElementById("answerEval")
const questions = [
    {
        ask: "Inside which HTML element do we put the JavaScript?",
        answer1: "<script>",
        answer2: "<js>",
        answer3: "<javascript>",
        answer4: "<scripting>",
        correct: "answer1",
    },
    {
        ask: 'How do you write "Hello World" in an alert box?',
        answer1: 'alertBox(“Hello World”)',
        answer2: 'msgBox(“Hello World”)',
        answer3: 'alert(“Hello World”)',
        answer4: 'msg(“Hello World”)',
        correct: "answer3",  
    },
    {
        ask: 'How do you call a function named "myFunction"?',
        answer1: 'myFunction()',
        answer2: 'call function myFunction()',
        answer3: 'call myFunction()',
        answer4: 'myFunction(call)',
        correct: "answer1",
    },
    {
        ask: 'How to write an IF statement in JavaScript?',
        answer1: 'if (i === 5)',
        answer2: 'if i===5 then',
        answer3: 'if (i=5)',
        answer4: 'if i=5 then',
        correct: "answer1", 
    },
    {
        ask: 'How to write an IF statement for executing some code if “i” is NOT equal to 5?',
        answer1: 'if (i != 5)',
        answer2: 'if (i <> 5)',
        answer3: 'if i =! 5',
        answer4: 'if i<>5',
        correct: "answer1",
    },
    {
        ask: 'Which event occurs when the user clicks on an HTML element?',
        answer1: 'onchange',
        answer2: 'onmouseover',
        answer3: 'onmouseclick',
        answer4: 'onclick',
        correct: "answer4",
    },
]


// Create timer that counts down from 75 to 0, after each question time may be subtracted 
function timer() {
     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //stop timer at end of questions
    
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Timer: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      endgame();
    }
  }, 1000);
}

viewHighScore = function() {
    Welcome.classList.add("hidden");
    endgameCont.classList.add("hidden");
    quizList.classList.add("hidden");
    header.classList.add("hidden");
    highScoreList.classList.remove("hidden");
}

var evaluateClick = function(event) {
    var targetEl = event.target;
    if (targetEl.value === "startQuiz"){
        takeQuiz();
    }
    else if (targetEl.value === "submit") {
        console.log(initialInputValue);
        score.setAttribute("name", initialInputValue);
        score.setAttribute("score", currentScore);
        createHighScoreEl(score);
        viewHighScore();
    }
    else if (targetEl.value === "goBack") {
        takeQuiz();
    }
    else if (targetEl.value === "clearScore") {
        highScore = [];
    }
    else if (targetEl.value === currentQuestion.correct){
        currentScore = currentScore + 10;
        answerEvalEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 25;
        answerEvalEl.textContent = "Wrong!";
    }
    //increase i
    i = i + 1;
    askQuestion();
}

// Loop through the quiz questions
function askQuestion() {
    if(i < questions.length) {
        //display question
        
        currentQuestion = questions[i];
        var questionEl = document.querySelector("#ask");
        var btnanswer1 = document.querySelector("#answer1");
        var btnanswer2 = document.querySelector("#answer2");
        var btnanswer3 = document.querySelector("#answer3");
        var btnanswer4 = document.querySelector("#answer4");
        questionEl.textContent = currentQuestion.ask;
        btnanswer1.textContent = currentQuestion.answer1;
        btnanswer2.textContent = currentQuestion.answer2;
        btnanswer3.textContent = currentQuestion.answer3;
        btnanswer4.textContent = currentQuestion.answer4;
    }
    else {endgame();}
}

var saveHighScore = function() {
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

var createHighScoreEl = function(highScoreDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "highScoreList";

    listItemEl.setAttribute("highScore-id", scoreIdCounter);

    var highScoreInfoEl = document.createElement("div");
    highScoreInfoEl.className = "highScoreList";
    highScoreInfoEl.innerHTML = "<h2>" + highScoreDataObj.name + "</h2><span>" + highScoreDataObj.score + "</span>";
    listItemEl.appendChild(highScoreInfoEl);

    highScoreDataObj.id = scoreIdCounter;

    highScore.push(highScoreDataObj);

    saveHighScore();

    scoreIdCounter++;
};

var loadHighScore = function() {
    var savedSore = localStorage.getItem("highScore");
    if (!savedSore) {
        return false;
    }
    console.log("No High Scores Found");

    savedSore = JSON.parse(savedSore);

    for (var i = 0; i < savedSore.length; i++) {
        createHighScoreEl(savedSore[i]);
    }
};

//Display the welcome message and load high scores
function takeQuiz(){
    timer();
    Welcome.classList.add("hidden");
    quizList.classList.remove("hidden");
    highScoreList.classList.add("hidden");
    
    askQuestion();
}

function showScores() {
    highScoreList.classList.remove("hidden");
    endgameCont.classList.add("hidden");
}

// End Game Funtion - Display score and request initials
function endgame() { 
    quizList.classList.add("hidden");
    endgameCont.classList.remove("hidden");
    var finalScoreEl = document.getElementById("finalScore");
    finalScoreEl.textContent = "Your final score is: " + currentScore;
    score.user = initials.value.trim();
    score.score = currentScore;
}

document.addEventListener("click", evaluateClick);
loadHighScore();

// takeQuiz();