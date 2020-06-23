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
var result = 0;

document.querySelector("#option1").addEventListener("click", checkanswer);
document.querySelector("#option2").addEventListener("click", checkanswer);
document.querySelector("#option3").addEventListener("click", checkanswer);
document.querySelector("#option4").addEventListener("click", checkanswer);

function checkanswer(event) {
    event.preventDefault();

    for (var i = 0; i < questions.length; i++) {
        var answer = question[i].question
        if (answer === question[i].answer) {
            document.querySelector("#result").className = 'text-success';
            document.querySelector("#result").textContent = 'Correct';

        } else {
            document.querySelector("#result").className = 'text-danger';
            document.querySelector("#result").textContent = 'Wrong';
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
        document.querySelector("#result").textContent = '';
    }

    var startQuiz = document.querySelector("#startQuizBtn");
    startQuiz.addEventListener("click", beginQuiz);