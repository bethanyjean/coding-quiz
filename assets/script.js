var timerE1 = document.getElementById('timer');
var timeLeft = 75;
var container = document.querySelector(".container");
var highScore = [];
var startEl = document.querySelector("#startQuiz");
var currentScore = 0;
var questions = {
    0: {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<script>",
        answer2: "<js>",
        answer3: "<javascript>",
        answer4: "<scripting>",
        correct: 1,
    },
    1: {
        question: 'How do you write "Hello World" in an alert box?',
        answer1: 'alertBox(“Hello World”)',
        answer2: 'msgBox(“Hello World”)',
        answer3: 'alert(“Hello World”)',
        answer4: 'msg(“Hello World”)',
        correct: 3,  
    },
    2: {
        question: 'How do you call a function named "myFunction"?',
        answer1: 'myFunction()',
        answer2: 'call function myFunction()',
        answer3: 'call myFunction()',
        answer4: 'myFunction(call)',
        correct: 1,
    },
    3: {
        question: 'How to write an IF statement in JavaScript?',
        answer1: 'if (i === 5)',
        answer2: 'if i===5 then',
        answer3: 'if (i=5)',
        answer4: 'if i=5 then',
        correct: 1, 
    },
    4: {
        question: 'How to write an IF statement for executing some code if “i” is NOT equal to 5?',
        answer1: 'if (i != 5)',
        answer2: 'if (i <> 5)',
        answer3: 'if i =! 5',
        answer4: 'if i<>5',
        correct: 1,
    },
    5: {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answer1: 'onchange',
        answer2: 'onmouseover',
        answer3: 'onmouseclick',
        answer4: 'onclick',
        correct: 4,
    },
}


// Create timer that counts down from 75 to 0, after each question time may be subtracted 
funtion timer() {
     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
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
      endGame();
    }
  }, 1000);
}

// // When start button is pressed, loop through questions.
// startEl.addEventListener("click", funtion() {
//     timer();
//     startQuiz();
// });

// // Loop through the quiz questions
// function startQuiz() {
//     var i = 0;
//     do {
//         //display question

//         //validate answer
//         //adjust timer if needed
//         //increase i
    
//     } while (i < questions.length && timeLeft > 0);
// }

var saveHighScore = function() {
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

var createHighScoreEl = function(highScoreDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "highScoreList";

    listItemEl.setAttribute("highScore-id", scoreIdCounter);

    var highScoreInfoEl = document.createElement("div");
    highScoreInfoEl.className = "highScoreList";
    highScoreInfoEl.innerHTML = "<h2>" + highScoreDataObj.name + "</h2><h2>" + highScoreDataObj.score + "</h2>";
    listItemEl.appendChild(highScoreInfoEl);

    highScoreDataObj.id = scoreIdCounter;

    highScore.push(highScoreDataObj);

    saveHighScore();
}

var loadHighScore = function() {
    var highSore = localStorage.getItem("highScore");
    if (!highScore) {
        return false;
    }
    console.log("No High Scores Found");

    highScore = JSON.parse(highSore);

    for (var i = 0; i < highSore.length; i++) {
        createHighScoreEl(highSore[i]);
    }
};

var displayWelcome = function() {
    var QuizEl = document.createElement("div");
    QuizEl.innerHTML = "<h1 class='title'>Coding Quiz Challenge</h1><a class='instructions'>Try to answer the following code-related questions within the time limit. </a><a class='instructions'>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</a>"
}

//Display the welcome message and load high scores
function takeQuiz(){
    loadHighScore();
    displayWelcome();
}

// End Game Funtion - Display score and request initials
function endgame() {
    console.log("game ended");
}

takeQuiz();
