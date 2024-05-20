const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Lisbon", correct: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Ernest Hemingway", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our Solar System?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What year did the Titanic sink?",
    answers: [
      { text: "1912", correct: true },
      { text: "1905", correct: false },
      { text: "1898", correct: false },
      { text: "1923", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let time = 60;
let timer;

function startQuiz() {
  currentQuestionIndex = 0;
  time = 60;
  timer = setInterval(updateTimer, 1000);
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer");
  questionElement.innerText = question.question;
  answerButtons.forEach((button, index) => {
    button.innerText = question.answers[index].text;
    button.dataset.correct = question.answers[index].correct;
    button.classList.remove("correct", "wrong");
  });
}

function selectAnswer(element) {
  const isCorrect = element.dataset.correct === "true";
  element.classList.add(isCorrect ? "correct" : "wrong");
  document.querySelectorAll(".answer").forEach((button) => {
    button.removeAttribute("onclick");
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    clearInterval(timer);
    alert("Quiz finished!");
    startQuiz();
  }
}

function updateTimer() {
  time--;
  document.getElementById("time").innerText = time;
  if (time <= 0) {
    clearInterval(timer);
    alert("Time's up!");
    startQuiz();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
