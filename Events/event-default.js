console.log("Event Defaults");

//
document.getElementById("website-link").addEventListener("click", function(e) {
    e.preventDefault()
    console.log("Default link behaviour prevented");
})



// 

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log("Form Submission Prevented");
});