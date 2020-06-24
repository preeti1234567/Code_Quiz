var quizContent = document.querySelector("#quizContent");
var finalSubmit = document.querySelector("#finalSubmit");
var scorenumber = document.querySelector("#scorenumber");
var btnStart = document.querySelector("#btnStart");
var btnSubmit = document.querySelector("#btnSubmit");
var btnGoBack = document.querySelector("#btnGoBack");
var scoreDiv = document.querySelector("#scoreDiv")
var timerDiv = document.querySelector("#timerDiv");
var highScore = document.querySelector("#highScore");
var contentStyle = document.querySelector("#content")
var result = document.querySelector("#result");
var highscorenumber = document.querySelector("#highscorenumber");

var counter = 0;
var score = 0;

var questions = [{
        no: 1,
        question: "What are Javascript data types?",
        option1: "Boolean",
        option2: "Integer",
        option3: "Character",
        option4: "All of the Above",
        answer: "4",
    },
    {
        no: 2,
        question: "Is Java and Javascript are same?",
        option1: "Yes",
        option2: "No",
        option3: "in some way",
        option4: "May be!",
        answer: "2",
    },
    {
        no: 3,
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<script>",
        option2: "javascript",
        option3: "js",
        option4: "<scripting>",
        answer: "1",
    }, {
        no: 4,
        question: "What is the correct syntax for referring to an external script caleed xxx.js",
        option1: "<script src='xxx.js'> ",
        option2: "script name=xx.js",
        option3: "script href=xx.js",
        option4: "None of above",
        answer: "1",
    }, {
        no: 5,
        question: "How do we write (Hello World) in an alert box ?",
        option1: 'msg("Hello World")',
        option2: "alertBox('Hello World')",
        option3: "alert(Hello World) ",
        option4: "alert('Hello World')",
        answer: "4",
    },
    {
        no: 6,
        question: "What is the capital of Chile?",
        option1: "Britain",
        option2: "Santiago",
        option3: "US",
        option4: "Africa",
        answer: "2",
    }, {
        no: 7,
        question: "How many countries still have the shilling as currency?",
        option1: "Kenya",
        option2: "Uganda",
        option3: "Tanzania",
        option4: "All of Above",
        answer: "4",
    }, {
        no: 8,
        question: "What is the hottest continent on Earth?",
        option1: "Africa",
        option2: "Dubai",
        option3: "Afghanistan",
        option4: "Uganda",
        answer: "1",
    }, {
        no: 9,
        question: "Which is the only vowel not used as the first letter in a US State?",
        option1: "E",
        option2: "F",
        option3: "G",
        option4: "H",
        answer: "1",
    }, {
        no: 10,
        question: "Garampani sanctuary is located at",
        option1: "Junagarh, Gujarat",
        option2: "Diphu, Assam",
        option3: "Kohima, Nagalan",
        option4: "Gangtok, Sikkim",
        answer: "2",
    }
]

var timerInterval;
var timerTimeout;

function checkanswer() {
    clearInterval(timerInterval);
    clearTimeout(timerTimeout);
    if (counter < 10) {
        if (this.value === questions[counter].answer) {
            result.textContent = 'Correct';
            result.className = 'text-success';
            score = score + 1;
        } else {
            result.textContent = 'Wrong';
            result.className = 'text-danger';
        }
        document.querySelector("#score").textContent = score;
        counter++;
        if (counter < 10) {
            timerTimeout = setTimeout(function() {
                startTimer(30);
                Question(counter);
            }, 1000);
        }
    }
    if (counter === 10) {
        timerTimeout = setTimeout(function() {
            scoreDiv.style.visibility = "hidden";
            timerDiv.style.visibility = "hidden";
            quizContent.style.visibility = "hidden";
            finalSubmit.style.visibility = "visible";
            scorenumber.textContent = score;
        }, 1000);
    }
}

function startQuiz() {
    counter = 0;
    score = 0;
    scoreDiv.style.visibility = "visible";
    timerDiv.style.visibility = "visible";
    contentStyle.style.visibility = "hidden";
    quizContent.style.visibility = "visible";
    startTimer(30);
    Question(counter);
}

function Question(index) {
    var obj = questions[index];
    document.querySelector("#firstQuestion").textContent = "Question " + obj.no + ": " + obj.question;
    document.querySelector("#label1").textContent = obj.option1;
    document.querySelector("#label2").textContent = obj.option2;
    document.querySelector("#label3").textContent = obj.option3;
    document.querySelector("#label4").textContent = obj.option4;
    document.querySelector("#result").textContent = '';
}

function startTimer(duration) {
    var timer = duration,
        minutes, seconds;
    timerInterval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#timer').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            checkanswer();
        }
    }, 1000);
}

function submit() {
    clearTimeout(timerTimeout);
    counter = 0;

    finalSubmit.style.visibility = "hidden";
    highScore.style.visibility = "visible";
    highscorenumber.textContent = document.querySelector("#initialForName").value + ' - ' + score;
}

function goBack() {
    clearTimeout(timerTimeout);
    highScore.style.visibility = "hidden";
    contentStyle.style.visibility = "visible";
}

document.querySelector("#option1").addEventListener("click", checkanswer);
document.querySelector("#option2").addEventListener("click", checkanswer);
document.querySelector("#option3").addEventListener("click", checkanswer);
document.querySelector("#option4").addEventListener("click", checkanswer);
btnStart.addEventListener("click", startQuiz);
btnSubmit.addEventListener("click", submit);
btnGoBack.addEventListener("click", goBack);
scoreDiv.style.visibility = "hidden";
timerDiv.style.visibility = "hidden";