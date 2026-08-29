const quizData = [
  {
    id: 1,
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correctIndex: 1,
  },

  {
    id: 2,
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()",
    ],
    correctIndex: 0,
  },

  {
    id: 3,
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correctIndex: 2,
  },

  {
    id: 4,
    question: "Which method selects the first element matching a CSS selector?",
    options: [
      "querySelector()",
      "querySelectorAll()",
      "getElementById()",
      "selectElement()",
    ],
    correctIndex: 0,
  },

  {
    id: 5,
    question:
      "Which property is used to change the text content of an element?",
    options: ["innerHTML", "textContent", "textValue", "contentText"],
    correctIndex: 1,
  },

  {
    id: 6,
    question: "Which method creates a new HTML element?",
    options: [
      "createElement()",
      "newElement()",
      "createHTML()",
      "addElement()",
    ],
    correctIndex: 0,
  },

  {
    id: 7,
    question:
      "Which method adds an element as the last child of another element?",
    options: ["appendChild()", "addChild()", "insertElement()", "pushChild()"],
    correctIndex: 0,
  },

  {
    id: 8,
    question:
      "Which property allows you to change the CSS styles of an element?",
    options: ["css", "style", "styles", "design"],
    correctIndex: 1,
  },

  {
    id: 9,
    question: "Which method is used to add an event listener?",
    options: ["addEvent()", "addEventListener()", "listenEvent()", "onEvent()"],
    correctIndex: 1,
  },

  {
    id: 10,
    question: "Which property returns the parent element of an element?",
    options: ["parentNode", "parentElement", "Both A and B", "parent"],
    correctIndex: 2,
  },

  {
    id: 11,
    question: "Which property returns all child elements of an element?",
    options: ["children", "childElements", "childNodesOnly", "childList"],
    correctIndex: 0,
  },

  {
    id: 12,
    question: "Which method removes an event listener?",
    options: [
      "removeEventListener()",
      "deleteEventListener()",
      "removeEvent()",
      "clearEventListener()",
    ],
    correctIndex: 0,
  },

  {
    id: 13,
    question: "Which method removes an element from the DOM?",
    options: ["delete()", "remove()", "removeElement()", "deleteElement()"],
    correctIndex: 1,
  },
];

// DOM Elements

const form = document.getElementById("my-form");
const playerInput = document.getElementById("player-input-name");

const userDiv = document.querySelector(".user");
const userName = document.getElementById("user-name");

const gameBox = document.querySelector(".game-box");
const outerDiv = document.querySelector(".outer");

const timerElem = document.getElementById("timer-sec");

let score = 0;
let timeLeft = 90;

let timer;
let usedQuestions = new Set();

// submit name and start
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let playerName = playerInput.value;

  startGame(playerName);
});

// start game
function startGame(playerName) {
  userDiv.style.display = "flex";
  userName.textContent = playerName;

  form.style.display = "none";
  gameBox.style.display = "flex";

  startTimer();
  showQuestions();
}

// timer function
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElem.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      displayScore();
    }
  }, 1000);
}

// update Questions function

function showQuestions() {
  // remove previous questions
  const oldQuestion = document.querySelector(".question-section");
  const oldOptions = document.querySelector(".options-section");
  const oldButton = document.querySelector(".next-qns-btn");

  oldQuestion?.remove();
  oldOptions?.remove();
  oldButton?.remove();

  // get random question
let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quizData.length);
  } while (usedQuestions.has(randomIndex));

  usedQuestions.add(randomIndex);
  const question = quizData[randomIndex];

  // question section
  questionSection = document.createElement("div");
  questionSection.classList.add("question-section");

  let questionTitle = document.createElement("h2");
  questionTitle.textContent = question.question;

  questionSection.appendChild(questionTitle);

  // options section
  optionSection = document.createElement("div");
  optionSection.classList.add("options-section");


  question.options.forEach((option, index) => {
    const optionElem = document.createElement("p");
    optionElem.classList.add("options");
    optionElem.textContent = option;

    optionElem.dataset.index = index;

    optionElem.addEventListener("click", () => {
      checkAnswer(index, question.correctIndex, optionSection);
    });

    optionSection.appendChild(optionElem);
  });

  // Next Button
  const nextButton = document.createElement("button");
  nextButton.classList.add("next-qns-btn");
  nextButton.textContent = "Next";

  nextButton.addEventListener("click", () => {

    if (quizData.length === usedQuestions.size) {
      clearInterval(timer);
      displayScore();
      return;
    }

    showQuestions();
  });

  gameBox.append(questionSection, optionSection, nextButton);
}

// Check Answer
function checkAnswer(selectedIndex, correctIndex, optionSection) {
  const options = optionSection.querySelectorAll(".options");

  if (selectedIndex === correctIndex) {
    score++;
    options[selectedIndex].classList.add("correct");
  } else {
    options[selectedIndex].classList.add("wrong");
    options[correctIndex].classList.add("correct");
  }

  options.forEach((option) => {
    option.style.pointerEvents = "none";
  });
};

//

function displayScore() {
  clearInterval(timer);

  outerDiv.innerHTML = `
  <div class="score-section" style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 50px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
">
    <h2 style="
        margin: 0;
        font-family: 'Fjalla One', sans-serif;
        font-size: 40px;
        color: rgb(144, 0, 255);
    ">
        Congratulations! 🎉
    </h2>

    <p style="
        margin: 0;
        font-size: 20px;
        color: #555;
    ">
        You scored ${score} out of ${quizData.length}
    </p>

    <button class="play-again" style="
        padding: 12px 28px;
        border: none;
        border-radius: 8px;
        background-color: rgb(144, 0, 255);
        color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    ">
        Play Again
    </button>
</div>
  `;

  const playAgainButton = document.querySelector(".play-again");
  playAgainButton.addEventListener("click", restartGame);
}

function restartGame() {
  location.reload();
}
