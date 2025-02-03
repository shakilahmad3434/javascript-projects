// question and answers object
const questions = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "2. What does CSS stand for?",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    correctAnswer: 3,
  },
  {
    question: "3. What does PHP stand for?",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
    correctAnswer: 0,
  },
  {
    question: "4. What does SQL stand for?",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    correctAnswer: 3,
  },
  {
    question: "5. What does XML stand for?",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXtra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    correctAnswer: 0,
  },
];

const startQuizBtn = document.querySelector(".start_quiz");
const quizRule = document.querySelector(".quiz_rule");
const exitQuiz = document.querySelector(".exit_quiz");
const continueQuiz = document.querySelector(".continue_quiz");
const quizBox = document.querySelector(".quiz_box");
const nextQuestion = document.querySelector(".next_question");
const displayScore = document.querySelector(".score");

let state = 0;
let score = 0;
let increment = 100 / 15; // Calculate increment per second
let timerCounter;
let num = 0;
const handleQuiz = (numKey) => {
  if (timerCounter) {
    clearInterval(timerCounter);  
    num = 0;
  }

  timerCounter = setInterval(() => {
    document.querySelector(".dispaly_counter").innerHTML = ++num;
    document.querySelector(".quiz_progress-bar").style.width = `${
      num * increment
    }%`;
    if (num >= 15) {
      clearInterval(timerCounter);
      num = 0;
      // Highlight correct answer as green
      document.querySelectorAll(".quiz_answer-list li").forEach((li) => {
        if (
          li.getAttribute("correct-answer") ==
          questions[numKey].correctAnswer
        ) {
          li.style.backgroundColor = "green";
          li.style.color = "white";
          document.querySelector(".next_question").style.display = "block";
        }
      });
      document.querySelectorAll(".quiz_answer-list li").forEach((li) => {
        li.style.pointerEvents = "none"; // Disable clicks
      });
    }
  }, 1000);

  const divElement = document.createElement("DIV");
  divElement.classList.add("quiz_item");
  divElement.innerHTML = `<div class="quiz_heading">
                    <h2>Awesome Quiz Application</h2>
                    <button>Time Left <span class="dispaly_counter">0</span></button>
                </div>
                <div class="quiz_progress">
                    <div class="quiz_progress-bar"></div>
                </div>
                <div class="quiz_container">
                    <h2 class="quiz_qustion">${questions[numKey].question}</h2>
                    <ul class="quiz_answer-list">
                        <li correct-answer = "0">${
                          questions[numKey].options[0]
                        }</li>
                        <li correct-answer = "1">${
                          questions[numKey].options[1]
                        }</li>
                        <li correct-answer = "2">${
                          questions[numKey].options[2]
                        }</li>
                        <li correct-answer = "3">${
                          questions[numKey].options[3]
                        }</li>
                    </ul>
                </div>
                <div class="quiz_total-question">
                    <p><span>${state + 1}</span> of 5 Questions</p>
                    <button class="next_question">Next Que</button>
                </div>`;
  quizBox.append(divElement);

  document
    .querySelector(".quiz_answer-list")
    .addEventListener("click", (event) => {
      const answerList = document.querySelectorAll(".quiz_answer-list li");

      if (event.target.tagName === "LI") {
        document.querySelector(".next_question").style.display = "block";
        // Disable click for all options
        answerList.forEach((li) => {
          li.style.pointerEvents = "none"; // Disable clicks
        });

        // Check if the selected answer is correct
        if (
          event.target.getAttribute("correct-answer") ==
          questions[numKey].correctAnswer
        ) {
          // Correct answer: Make it green
          event.target.style.backgroundColor = "green";
          event.target.style.color = "white";
          score++;
        } else {
          // Wrong answer: Make all red and highlight correct answer
          answerList.forEach((li) => {
            li.style.backgroundColor = "red";
            li.style.color = "white";
          });

          // Highlight correct answer as green
          answerList.forEach((li) => {
            if (
              li.getAttribute("correct-answer") ==
              questions[numKey].correctAnswer
            ) {
              li.style.backgroundColor = "green";
              li.style.color = "white";
            }
          });
        }
      }
    });
};

startQuizBtn.addEventListener("click", () => {
  startQuizBtn.style.display = "none";
  quizRule.style.display = "block";
});

exitQuiz.addEventListener("click", () => {
  quizRule.style.display = "none";
  startQuizBtn.style.display = "block";
});

continueQuiz.addEventListener("click", () => {
  quizRule.style.display = "none";
  handleQuiz(state);
  quizBox.style.display = "block";
});

quizBox.addEventListener("click", (event) => {
  if (state == 4) {
    console.log("Score: ", score);
    quizBox.style.display = "none";
    document.querySelector(".final_score").style.display = "block";
    displayScore.textContent = score;
    document.querySelector(".final_score").addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        if (e.target.className === "replay_quiz") {
          document.querySelector(".final_score").style.display = "none";
          quizBox.style.display = "block";
          quizBox.innerHTML = "";
          state = 0;
          score = 0;
          handleQuiz(state);
        } else {
          document.querySelector(".final_score").style.display = "none";
          clearInterval(timerCounter);
          startQuizBtn.style.display = "block";
          quizBox.innerHTML = "";
          state = 0;
          score = 0;
        }
      }
    });
  }
  if (event.target.className === "next_question" && state < 4) {
    console.log(state);

    quizBox.innerHTML = "";
    state++;

    handleQuiz(state);
  }
});
