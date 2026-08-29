console.log("JavaScript Events");

//
const btnElem = document.getElementById("myBtn");

btnElem.addEventListener("click", function() {
    console.log("Button clicked");
});

btnElem.addEventListener("click", function() {
    console.log("Button clicked Again");
});

// 

const countBtn = document.getElementById("count");


let count = 0;

const handleCount = function() {
    console.log("Count", count);
    count ++;
};


countBtn.addEventListener("click", handleCount);
countBtn.addEventListener("click", greetMe);

// removeEventListener
countBtn.removeEventListener("click", handleCount);


function greetMe() {
    console.log("Namaste");
};



// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded...");
})


// Event Object

const inputElem = document.getElementById("txt");

function handleChange(event) {
    console.log(event);
    console.log("Event Type", event.type);
    console.log("Target Value", event.target.value);
    console.log("Current Target", event.currentTarget);
    console.log(event.target)
}

inputElem.addEventListener("change", handleChange);