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




// length

arr1 = [11,22,33];
console.log(arr.length);


// Remember : Array can hold elements upto (2^32 - 1)
console.log(2**32 - 1); // 4294967295

//
arr1.length = 2; // it removes last element
console.log(arr1); 

arr1.length = 5; // 3 empty slots
console.log(arr1)




// >>>>>>>>>>>>>>> JavaScript Array Methods <<<<<<<<<<<<<<<<<<<<<<


// concat() method => merge two or more arrays
const first = [1,2,3];
const second = [4,5,6];

const merged = first.concat(second);
console.log(merged);



// join() method
const emotions = ['☺️', '😅', '🤣', '😍']
const joined = emotions.join("<=>");    // returns a string with separator
console.log(joined);



// fill() method => fills the array with static value
// -- changes the original array

const colors = ['red', 'blue', 'green'];
colors.fill('pink');
console.log(colors);


// includes() = if the element present in the array then it returns true else false

const names = ["Jiban", "Tom", "David"];
console.log(names.includes("Tom")); // true
console.log(names.includes("Dravid"));  // false



// indexOf() => returns the first occurence index

console.log(names.indexOf("Tom"));  // 1
console.log(names.indexOf("Brown")); // -1 : if the element doesn't occurs



// reverse() => reverses the position of elements
// -- permanent change in original array
console.log(names.reverse());



// sort() => it sorts the element on ascending order
// -- it converts the item into string first then sorts

const fruits = ["Orange", "Apple", "Mango", "Banana"];
fruits.sort();
console.log(fruits);



// splice()
// splice(start, deleteCount, ClipboardItem, item1, item2 ,......)

