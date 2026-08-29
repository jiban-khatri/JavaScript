console.log("Event Bubbling, Capturing, and Delegation");

//<<<<<<<<<<<<<<< Bubbling >>>>>>>>>>>>>>>>

// In Event Bubbling, the event starts from the target elements and bubbles up through its ancestors
// The Flow is : Child -> Parent -> GrandParent -> Document

document.getElementById("grandparent").addEventListener("click", function() {
    console.log("GrandParent is Clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent is Clicked");
});

document.getElementById("child").addEventListener("click", function() {
    console.log("Child is Clicked");
});






// >>>>>>>>>>>>>>>>>>>> Capturing <<<<<<<<<<<<<<<<<<<<

// In Event Capturing, the event flows from the outermost ancestor down to the target element. It happens before the actual target handles the event

document.getElementById("grandparent").addEventListener("click", function() {
    console.log("GrandParent is Captured");
}, true);

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent is Captured");
}, true);

document.getElementById("child").addEventListener("click", function() {
    console.log("Child is Captured");
}, {capture : true});






// >>>>>>>>>>>>>>>>>>>> Event Delegation <<<<<<<<<<<<<<<<<<<<

// It is a technique where you add a single listener to a parent element, instead of adding individual event listeners to all its children.

const itemLists = document.getElementById("lists");

itemLists.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You Clicked on ${event.target.textContent}`);
    };
});




// stop Propagation
//  don't want the event to bubble to parent elements, use stopPropagation()

document.getElementById("father").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("son").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child Clicked");
});