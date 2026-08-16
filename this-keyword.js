"use strict";

console.log(`'this' in JavaScript`);



// Global
// this === window
console.log("this at global", this);



// Object => Implicit Binding

const employee = {
    id : "B12",
    firstName : "David",
    lastName : "Brown",

    returnThis : function() {
        return this;
    },

    getFullName : function() {
        return `Full Name = ${this.firstName} ${this.lastName}`
    },

    address : {
        country : "Nepal",
        getAddress : function() {
            return this.country;
        }
    }

};
// >>>>>>>>> When we invoke a method in object, the value of this is bounded to the object which we invoked it

console.log("this inside the employee object", employee.returnThis())
console.log(employee.getFullName());
console.log(employee.address.getAddress());





// Function

function anyFunc() {
    console.log("this inside a function ", this); // window
}

anyFunc();




function outer(a) {
    console.log("this inside outer function", this);    // undefined

    return function inner(b) {
        console.log("this inside inner function", this);    // undefined
    }
};

const outerResult = outer(5); 
outerResult(3); 




// Inside Arrow Function

const arrowFunc = () => this;

console.log("this inside arrow function", arrowFunc()) // global / window


/////////////////////////
const fruit = {
    name : "Apple",
    color : "Red",
    getDesc : () => `${this.name} is ${this.color}`
    
};

console.log(fruit.getDesc());  // "undefined is undefined"



/////////////////

const person = {
  name: "Jiban",
  greet : function() {
    const arrowFunc = () => {
        console.log(`Namaste, ${this.name}`)    // 'Namaste, Jiban'
    }
    arrowFunc();
  }
};
person.greet() 


// ⚠️ REMEMBER = Arrow functions borrow this from the nearest enclosing regular function. If there's no enclosing regular function, they fall back to whatever this is in the outer/global scope — which could be window, undefined, or something else, depending on the environment.


//-----------------------

// Explicit Binding => call, apply, bind


// The call method

function greeting(obj) {
    console.log(`Hello, ${this.name} belobgs to ${this.address}`);
};

const user = {
    name : "Tom",
    address : "Ktm"
};
greeting.call(user);



function hobby(hobby1, hobby2) {
    return (`${this.name} loves ${hobby1} and ${hobby2}`);
};

const per = {name : "Jiban"};

// call method
console.log(hobby.call(per, "Coding", "Learning"))



// apply method => instead of giving one by one argument, we can use aply method and provide one argument in the form of array

const hobbyToApply = ["Reading", "Sleeping"];
console.log(hobby.apply(per, hobbyToApply));



// bind method => returns function which can be used anywhere
function newHobbies(hobby1, hobby2) {
    console.log(`${this.name} loves ${hobby1} and ${hobby2}`);
};

const newPer = {
    name : "Peter"
};

const bindFnc = newHobbies.bind(newPer, "Dancing", "Singing");
bindFnc();



// Constructor 

const Cartoon = function(name, animal) {
    this.name = name,
    this.animal = animal,
    this.log = function() {
        console.log(`${this.name} is ${this.animal}`);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log()

