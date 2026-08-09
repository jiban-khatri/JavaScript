console.log("Learning Functions");


// Function declaration / defination
function printName() {
    console.log("Hey David");
}
// Function call
printName();




// Function as an expression
let printFunction = function() {
    console.log("Hello Rahul");
}
console.log(printFunction);
printFunction();




// Parameters & Arguments
function sum(a,b) {
    return a+b;
}
console.log(sum(2,3));



// Default Parameter
function calc(a, b=3) {
    return (2*(a+b));
}

let result = calc(2)
console.log(result)




// Rest Parameters
function calculate(x, y, ...rest){
    console.log(x, y, rest);
}

calculate(1,2,3,4,5,6,7,8,9);



// Nested Fumction
function outer() {
    console.log("Outer");

    function inner() {
        console.log("Inner");
    }

    inner()
}
outer()

// Remember we cannot call or access inner function outside; the inner function is only accessible inside outer unless we return the inner function

// For example :
function outer() {
    console.log("Outer");

    return function inner() {
        console.log("Inner");
    }
}

const innerFunction = outer();
console.log(innerFunction);



// Callback Function
function fool(func){
    console.log("fool");

    func()
}

fool(function() {
    console.log("buzz");
})