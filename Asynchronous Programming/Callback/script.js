console.log("Async JavaScript : Callback");

// Synchronous Programming
/*
console.log("Start");
console.log("Middle");
console.log("End");
*/


// Asynchronous Programming
/*
console.log("Start");   // Synchronous Programming

setTimeout(() => {
    console.log("Waiting Done.");
},1000);    // Asynchronous Programming

console.log("End"); // Synchronous Programming
*/




// <<<<<<<<<<<<<< Callback >>>>>>>>>>>>>>>>>
// A callback is  a function that is passed as argument to another function can call it later.

function greet(name, callback) {
    console.log(`Namaste ${name}`);

    setTimeout(callback, 2000);

    console.log("I am still here");
}

function sayBye() {
    console.log("Bye");
};

greet("Jiban", sayBye);


