console.log("Error Handling");


// Exceptions => Exceptions are run time errors that distrup the program execution
// Example :

//console.log(x) - ReferenceError: x is not defined
/*
let obj = null;
console.log(obj.name) - TypeError: Cannot read properties of null (reading 'name')
*/
// console.log("hi" - SyntaxError: missing ) after argument list



// try.... catch

try {
    console.log("Execution Starts Here");
    abc;
    console.log("Execution Ends Here");

} catch (error){
    // handle error
    console.error("An Error has Occured");

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}


console.log("Continue working");



// Real World Use Case

function divideNumber(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Division by 0 is not allowed");
        }
        const result = num1 / num2;
        console.log(result);

    } catch (err) {
        console.error("Got a Math Error ", err.message);
    }
};

divideNumber(10,2);




