console.log("JavaScript Arrays");

const mixedArray = [1, "Rahul", true, {} ]
console.log(mixedArray);

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);


// other ways of creating arrray

const salad = ["Carrot", "Cucumber", "Raddish", "Tomato"];
console.log(salad);
// using constructor function

const anotherSalad = new Array("Carrot", "Cucumber", "Raddish", "Tomato");
console.log(anotherSalad);

console.log(salad === anotherSalad) // false


// looping in array

// for loop

for (let i = 0; i<salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
}

//
for (let element of salad) {
    console.log(element);
}





// Add elements to array

// push - adds element at end of array
salad.push("Peanuts");
console.log(salad);


// unshift - adds element at start of array
salad.unshift("Corns");
console.log(salad);


// >>>>> Remove element from array <<<<<<<

// Pop - Removes last element from array
salad.pop();
console.log(salad);


// shift - removes first element from array
salad.shift();
console.log(salad);




// >>>>> Copy and Clone Array <<<<<<<<<

const copySalad = salad.slice();
console.log(copySalad);
console.log(copySalad === salad);   // false


//////
console.log(Array.isArray(salad)); // true




// >>>> Array Destructuring <<<<<<<<<

const arr = [2,4,7,6,1];
const [num1, num2, num3, num4, num5, anNum = 10] = arr;

console.log(num1, num3, num5, anNum);


const [f1, ,f3] = ["Apple", "Mango", "Orange"];
console.log(f1, f3) // Ignores Mango because of blank



// Nested Array

const nestedArr = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArr[2][2][1]); //6

// destructuring
const [, ,[, , [, ar]]] = nestedArr;
console.log(ar); //6




// <<<<< Rest Parameter >>>>>>>
// - Always goes with variable in left side 

const  [ten, twenty, ...rest] = [10, 20, 30, 40, 50];
console.log(ten, twenty, rest);
// rest = Array of remaining elems




// <<<<< Spread Operator >>>>>>>
// - Always goes with array in right side

const mySalad= ["Tomato", "Cucumber", "Carrot"];
const mySaladCopy = [...mySalad];

console.log(mySaladCopy);
console.log(mySalad === mySaladCopy);




// Swap Variables

let a = 2;
let b = 4;
console.log(a, b); // 2, 4

[a, b] = [b, a]
console.log(a, b); // 4, 2




// Merge Arrays

const cities = ["Ktm", "Bkt", "Pkr"];
const districts = ["Dng", "Chitwan", "Ktm"];

const mergedLocation = [...cities, ...districts];
console.log(mergedLocation);
