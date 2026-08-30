console.log("Asynchronous JavaScript : Promises");


// Promises => A Promise is an object that represents the eventual result of an asynchronous operation.
{
    let promise = new Promise((resolve, reject) => {
    // ....
});

}
// Executor Function => The executor function is where you write the code that actually performs the operation.
(resolve, reject) => {
    // logic.....
}


// State -
    // Pending - Initially when the executor function starts the execution
    // Fulfilled - When the promise is resolved
    // Rejected - When the promise is rejected


// Result -
    // Undefined - Initially when the state value is prending
    // Value - When resolve(value) is called
    // Error - When reject(error) is called



// >>>>>>>>>>>>> How promises are resolved and rejected <<<<<<<<<<<<<<
{

let promise1 = new Promise((resolve, reject) => {
    resolve("Hey, I'm done");

    reject("Am I ignored?") // ignored
});

let promise2 = new Promise((resolve, reject) => {
    reject("Something is not right");
});

}

// >>>>>>>>>>>>>>>>> Handling Promises <<<<<<<<<<<<<<<<<<<<<<

// 1  .then()
{

const promise = new Promise((resolve, reject) => {
    resolve("I am Resolved");
    // reject("I am Rejected");
});

promise
.then(
    (result) => console.log(result)
    // (error) => console.log(error)
)
.catch(        
    (error) => console.log(error)   // 2.  .catch()
)
.finally(
    () => console.log("This will work for any")
);


}



// >>>>>>> Promise Chaining <<<<<<<<<

// Rule 1 - Every Promise gives you a .then() handler method. Every Rejected promise gives you a .catch() handler method.

// Rule 2 -  You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.




// Return a promise from .then() handler

const getUser = new Promise((resolve, reject) => {
    const user = {
        name : "David",
        email : "contact@david.com",
        password : "david@321",
        permissions : ["db", "dev"]
    };

    resolve(user);
});

getUser
.then((user) => {
    console.log("Got User :", user.name);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nepal");
        }, 2000);
    })
})
.then((address) => {
    console.log("User Address :", address);
})



// return any other value from .then()

getUser
.then((user) => {
    console.log("User : ", user.name);
    return user.email;
})
.then((email) => {
    console.log("User Email :", email);
});



//  throw an error from .then()

getUser
.then((user) => {
    console.log("Got User :", user.name);

    if (!user.permissions.includes("hr")) {
        throw new Error("You are not allowed");
    }
    return user.email;
})
.then((email) => {
    console.log("User Email :", email); // skipped
})
.catch((error => {
    console.error(error);
}));



// Rule 3 - We can rethrow error from the .catch() handler to handle the error later. In this case the error handling control will go to the nearest .catch() handler.

const promise401 = new Promise((resolve, reject) => {
    reject(401);
});

promise401.catch((error) => {
    console.log(error);

    if (error === 401) {
        throw error;
    }else {
        // do something .....
    }
})
.catch((error) => {
    console.log(`Handling error ${error} here`);
});





// Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.

let promiseFinally = new Promise((resolve, reject) => {
    resolve("Testing Finally");
});

promiseFinally
.finally(() => {
    console.log("Running Finally");
})
.then((result) => {
    console.log(result);
});



 // Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining.

 