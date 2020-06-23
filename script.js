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
        question: "What are Javascript data types?",
        option1: "Boolean",
        option2: "Integer",
        option3: "Character",
        option4: "All of the Above",
        answer: "4",
    },
    {
        no: 3,
        question: "How much duffer I am?",
        option1: "Not At All",
        option2: "Kind of",
        option3: "Are you kidding",
        option4: "I am",
        answer: "4",
    }
]
var counter = 0;
var score = 0;
var timerFunction;
document.querySelector("#option1").addEventListener("click", checkanswer);
document.querySelector("#option2").addEventListener("click", checkanswer);
document.querySelector("#option3").addEventListener("click", checkanswer);
document.querySelector("#option4").addEventListener("click", checkanswer);

function checkanswer() {
    clearTimeout(timerFunction);
    var result = document.querySelector("#result");
    result.visibility = true;
    if (this.value === questions[counter].answer) {
        result.textContent = 'Correct';
        result.className = 'text-success';
        score = score + 1;
    } else {
        result.textContent = 'Wrong';
        result.className = 'text-danger';
    }
    document.querySelector("#score").textContent = score;
    startTimer(30);
    counter++;
    if (counter < 3) {
        Question(counter);
    }
}

function beginQuiz() {
    var showStyle = document.querySelector("#quizContent")
    showStyle.style.visibility = "visible";


    var contentStyle = document.querySelector("#content")
    contentStyle.style.visibility = "hidden";
    Question(counter);
}

function Question(index) {
    var obj = questions[index];
    document.querySelector("#firstQuestion").textContent = "Question " + obj.no + ": " + obj.question;
    document.querySelector("#label1").textContent = obj.option1;
    document.querySelector("#label2").textContent = obj.option2;
    document.querySelector("#label3").textContent = obj.option3;
    document.querySelector("#label4").textContent = obj.option4;
    document.querySelector("#result").visibility = false;
    var display = document.querySelector('#timer');
    startTimer(120, display);
    timerFunction = setTimeout(checkanswer, 12000);
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (display)
            display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var startQuiz = document.querySelector("#startQuizBtn");
startQuiz.addEventListener("click", beginQuiz);