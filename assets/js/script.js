//Questions

const questions = [


    {
        question: "The Great Yorkshire Show runs for three days each year, but in what month?",
        choices: ["June", "July", "August"],
        correct: 1
    },
    {
        question: "Which of the Yorkshire three peaks are the highest? ",
        choices: ["Penyghent", "Whernside", "Ingleborough"],
        correct: 1
    },
    {
        question: "How many gold medals were won by athletes from Yorkshire at the 2012 Olympics?",
        choices: ["52", "74", "87"],
        correct: 1
    },
    {
        question: " Which date is designated Yorkshire day?",
        choices: ["February 14th", "March 30th", "August 1st"],
        correct: 2
    },
    {
        question: " In which Yorkshire city were the Kaiser Chiefs formed?",
        choices: ["Leeds", "Bradford", "York"],
        correct: 0
    },
];

const username = sessionStorage.getItem('playerName');
const quiz = document.getElementById("quiz");
let currentQuestion = 0;
let correctAnswers = 0;

//Check answer

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    let currentCorrectAnswer = questions[currentQuestion].correct
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "By 'eck, tha's reet!";
        correctAnswers++;
    } else {
        feedback.textContent = `nah, the correct answer is ${questions[currentQuestion].choices[currentCorrectAnswer]}`;
    }
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else if (correctAnswers >= 3) {
            const gameArea = document.querySelector(".game-area");
            gameArea.innerHTML = `<p> Ey up chuck! You got ${correctAnswers} out of ${questions.length} questions. Chuffed!</p>`;
        } else {
            const gameArea = document.querySelector(".game-area");
            gameArea.innerHTML = `<p> Daft as a brush! You got ${correctAnswers} out of ${questions.length} questions. Be reet.</p>`;
        }
    }, 2000);
}

//Show question

function showQuestion() {
    quiz.style.display = 'block';

    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}
document.addEventListener('DOMContentLoaded', function () {
    alert(`Welcome to the quiz ${username}`);
    showQuestion();
});