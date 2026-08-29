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

const form = document.getElementById("my-form");

const userDiv = document.querySelector(".user");
const userName = document.getElementById("user-name");
const gameBox = document.querySelector(".game-box")


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let playerName = e.target.childNodes[1].value;

  form.reset();
  startGame(playerName);
});

// start game
function startGame(playerName) {

    userDiv.style.display = "flex";
    userName.textContent = playerName;

    form.style.display = "none";
    gameBox.style.display = "flex";
};


// timer function
