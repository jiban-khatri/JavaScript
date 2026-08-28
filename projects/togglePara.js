console.log("Project : Toggle");

const toggleBtn = document.getElementById("toggle-btn");
const paraElem = document.getElementById("para");

toggleBtn.addEventListener("click", function(){
    paraElem.classList.toggle("hide")
})