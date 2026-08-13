console.log("Scope and Scope Chain");

/*
Scopes Types:
    - Global Scope
    - Function Scope
    - Block Scope
    - Module Scope
*/



// 1. Global Scope => variables declared outside any scope or function are global scoped and can be accessible everywhere

let userName = "Jiban";

function showName() {
    console.log("Hello ", userName);
};
showName();

console.log(userName)   // userName can be accessible anywhere so it's global scoped





// 2. Function Scope => variables are declared inside the function and can be accessible within the function not outside the function

function fScope() {
    let age = 20;
    console.log(age);
};
fScope();

// console.log(age);    Reference Error => age not defined





// 3. Block Scope => variables are declared inside the block - { } and ccannot be accessed outside the block

{
    let count = 10;
    console.log(count);
};

// console.log(count);    Reference Error => age not defined





// Scope Chain => Mechanism to look up the variable

let globalVar = "I am a global variable";

function outer() {
    let outerVar = "I am an outer variable";

    function inner() {
        let innerVar = "I am an inner variable";

        console.log(innerVar);  // Find directly in the current scope
        console.log(outerVar);  // Checks in current scope, not found then check in outer scope - found and log in console
        console.log(globalVar); // Checks first in current scope, then in outer scope, then in global scope - found and log in console
    };

    inner();
};

outer();
