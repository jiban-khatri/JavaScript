// Objects => stores multiple values in the key, value pairs

let user = {
    name : "Jiban",
    age : 18
};

// Keys = name, age
// Values = "Jiban", 18

console.log(user);
console.log(user.name); // Jiban
console.log(user.age); // 18


// Adding other properties

user.isStudent = true;
console.log(user);

// Deleting
delete user.age;
console.log(user);


// Ways to create objects

let obj = new Object()
obj.name = "David";
obj.address = "Nepal";

console.log(obj)


function myObj(name, age) {
    return {
        name,
        age
    };
};
console.log(myObj("Tom", 30))


// Constructor Function
function Car(name, model) {
    this.carName = name;
    this.carModel = model
};

const bmwCar = new Car("BMW", "M5");
console.log(bmwCar);



// Methods => basically functions inside objects are methods.

const profile = {
    userName : "Peter",
    age : 28,
    message : function() {
        console.log("This is Peter's message");
    },
    address : {
        country : "Nepal",
        city : "Kathmandu",
        zipCode : 44600,
        greetings : function() {
            console.log("Welcome to Nepal");
        }
    }
};

console.log(profile);
console.log(profile.message());
console.log(profile.address);
console.log(profile.address.greetings());


// for in loop
for (let key in profile){
    console.log(profile[key]);
};


// 
console.log(Object.keys(profile));

