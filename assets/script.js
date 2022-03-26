var timer = 75;
const highScore = [];
const PlyrScore = {
    initials:
    score:
}
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

