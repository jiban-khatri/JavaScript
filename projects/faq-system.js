const faqs = [
  {
    qn: "What is JavaScript?",
    ans: "JavaScript is a scripting language used to create dynamic content.",
  },
  {
    qn: "What is the DOM?",
    ans: "The DOM is the Document Object Model representing the page structure",
  },
  {
    qn: "What is 40 Days of JavaScript?",
    ans: "It is an initiative by tapaScript Family to win over JavaScript with fundamentals and code.",
  },
];

const faqBlock = document.querySelector(".faq");
let faqItem, questions, answers;

faqs.forEach((faq) => {
  faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  questions = document.createElement("div");
  questions.classList.add("question");
  questions.textContent = faq.qn;

  answers = document.createElement("div");
  answers.classList.add("answer");
  answers.textContent = faq.ans;

  faqItem.appendChild(questions);
  faqItem.appendChild(answers);

  faqBlock.appendChild(faqItem);
});

function showAnswers(e) {
  if (e.target.className === "question") {
    const answer = e.target.nextElementSibling;
    answer.classList.toggle("show");
  }
  
}

faqBlock.addEventListener("click", showAnswers);

