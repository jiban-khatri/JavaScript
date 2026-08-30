// 1. Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

function flipCoin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 2);

      if (randomNum === 0) {
        resolve("Heads");
      } else {
        resolve("Tails");
      }
    }, 1000);

  });
}

flipCoin()
.then((result) => {
    console.log(result);
});



/* 
2. Promise with Condition
Create a function checkAge(age) that returns a Promise.
Resolve if age >= 18, reject otherwise.
*/


function checkAge(age) {
    return new Promise((resolve, reject) => {
        
        if (age >= 18) {
            resolve("You are over 18");
        } else {
            reject("You are under 18");
        }
    })
}

checkAge(20)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});




/*
3. Chain Promises Sequentially
Create three Promises that log:
"Step 1 done"
"Step 2 done"
"Step 3 done"
Chain them using .then().
*/


function step1() {
    return new Promise((resolve, reject) => {
        resolve("Step 1 done.")
    });
};

function step2() {
    return new Promise((resolve, reject) => {
        resolve("Step 2 done.")
    });
};

function step3() {
    return new Promise((resolve, reject) => {
        resolve("Step 3 done.")
    });
};

step1()
.then((result) => {
    console.log(result);
    return step2();
})
.then((result) => {
    console.log(result);
    return step3();
})
.then((result) => {
    console.log(result);
});



/*
4. Value Transformation in Chain
Create a Promise that resolves with 5.
Chain .then() handlers to double it, then square it.
Final output should be 100.
*/


let promise = new Promise((resolve, reject) => {
    resolve(5);
});

promise
.then((result) => result * 2)
.then((result) => result ** 2)
.then((result) => console.log(result));


