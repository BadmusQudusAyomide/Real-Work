// script.js
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1993"],
    answer: "1995",
  },
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const retryButton = document.getElementById("retry-button");
const timerEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const reviewEl = document.getElementById("review");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;
let userAnswers = [];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  userAnswers = [];
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  nextButton.classList.add("hidden");
  showQuestion();
  startTimer();
}

function startTimer() {
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = selectOption;
    optionsEl.appendChild(button);
  });
}

function selectOption(e) {
  const selectedOption = e.target;
  const currentQuestion = quizData[currentQuestionIndex];
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("selected");
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    } else if (button === selectedOption) {
      button.classList.add("incorrect");
    }
  });

  selectedOption.classList.add("selected");
  userAnswers.push({
    question: currentQuestion.question,
    selected: selectedOption.textContent,
    correct: currentQuestion.answer,
    isCorrect: selectedOption.textContent === currentQuestion.answer,
  });

  if (selectedOption.textContent === currentQuestion.answer) {
    score++;
  }

  nextButton.classList.remove("hidden");
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
  reviewEl.innerHTML = "";
  userAnswers.forEach((answer) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");
    reviewItem.innerHTML = `
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Your answer:</strong> <span class="${
              answer.isCorrect ? "correct" : "incorrect"
            }">${answer.selected}</span></p>
            ${
              !answer.isCorrect
                ? `<p><strong>Correct answer:</strong> ${answer.correct}</p>`
                : ""
            }
        `;
    reviewEl.appendChild(reviewItem);
  });
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
    nextButton.classList.add("hidden");
  } else {
    clearInterval(timer);
    showResult();
  }
});

retryButton.addEventListener("click", startQuiz);

// Initialize Quiz
startQuiz();
