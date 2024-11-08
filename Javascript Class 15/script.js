// Define quiz questions and answers
const quizData = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Open Method", "Data Object Module"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        options: ["getElementById()", "querySelector()", "selectById()", "getById()"],
        correctAnswer: "getElementById()"
    },
    {
        question: "What does 'var' do in JavaScript?",
        options: ["Declares a variable", "Defines a function", "Calls a function", "Declares an object"],
        correctAnswer: "Declares a variable"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const scoreText = document.getElementById("score");

// Show the next question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Clear previous options
    answerOptions.innerHTML = "";

    // Display answer options
    currentQuestion.options.forEach(option => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.classList.add("option");
        optionBtn.onclick = () => selectAnswer(option);
        answerOptions.appendChild(optionBtn);
    });

    nextBtn.style.display = "none"; // Hide next button initially
}

// Handle selecting an answer
function selectAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    // Disable all options after selecting an answer
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = true;
    });

    nextBtn.style.display = "inline-block"; // Show next button
}

// Move to the next question
nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

// Show the quiz result
function showResults() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    scoreText.textContent = `${score} out of ${quizData.length}`;
}

// Start the quiz
startBtn.onclick = () => {
    homePage.style.display = "none";
    quizPage.style.display = "block";
    loadQuestion();
};

// Retry the quiz
retryBtn.onclick = () => {
    score = 0;
    currentQuestionIndex = 0;
    resultPage.style.display = "none";
    homePage.style.display = "block";
};

// let percentage = (value2 - value1) / (value1) * 100;