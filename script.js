const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        correct: "d"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = "";
    const questionText = document.createElement('div');
    questionText.innerText = question.question;
    questionElement.appendChild(questionText);

    for (const answer in question.answers) {
        const button = document.createElement('button');
        button.innerText = `${answer}: ${question.answers[answer]}`;
        button.addEventListener('click', () => selectAnswer(answer));
        questionElement.appendChild(button);
    }
}

function selectAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const correct = question.correct;

    if (selectedAnswer === correct) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${correct}.`);
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.classList.add('hidden');
    resultElement.innerText = `You scored ${score} out of ${questions.length}`;
    resultElement.classList.remove('hidden');
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', startGame);

startGame();
