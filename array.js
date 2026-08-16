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

