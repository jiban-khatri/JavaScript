console.log("Create Custom Events");

// Step 1 : Create a Custom events.
const myEvent = new CustomEvent("userLoggedIn", {
    detail : {
        userName : "Jiban",
        role : "Admin"
    }
});


// Step 2 : Listen on Event
document.addEventListener("userLoggedIn", function(e) {
    console.log(`User Login Detected ${e.detail.userName}`);
});



// Dispatch the event
document.dispatchEvent(myEvent);