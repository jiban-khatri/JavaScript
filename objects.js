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
console.log(Object.values(profile));




// Static Methods

const target = {a:1, b:2};
const source = {b:3, d:4};

const returnedObj = Object.assign(target, source);
console.log(returnedObj);



//  For nested objects, 'object.assign' uses same refrence so change in one create change in another but for without nested objects it creates new copy of the object
const obj1 = {name : "Rahul", add : {country : 'Nepal', dis : "Ktm"}};

const obj2 = Object.assign({}, obj1);
console.log(obj2);

obj2.add.dis = "Bkt";

console.log(obj2.add.dis); // Bkt
console.log(obj1.add.dis); //Bkt



// Structured Clone
// Solution for above 

const obj3 = {name : "Rahul", add : {country : 'Nepal', dis : "Ktm"}};

const obj4 = structuredClone(obj1);
console.log(obj2)

obj2.add.dis = "Bkt";

console.log(obj4.add.dis); // Bkt
console.log(obj3.add.dis); //Ktm





// Transform object into an array
let sObj = {
    a : "Yo",
    b : 20
};

const myArr = Object.entries(sObj);
console.log(myArr);




// Freeze => Makes object immutable and cant able to modify or add/remove

const emp = {
    sal : 1000
};

Object.freeze(emp);

emp.sal+=3000;
emp.userName = "Employee";

console.log(emp); // 1000 - not changed
console.log(Object.isFrozen(emp));  //true - emp object is frozen




// Seal => Same as freeze but can modify only : can't add/remove

const std = {
    age : 15
};

Object.seal(std);

std.age = 18;
std.user = "Tom";
delete std.age // not possible

console.log(std); // {age : 18}
console.log(Object.isSealed(std)) // true





// === Object Destructuring ===

const student = {
    name : "David",
    age : 19,
    grade : "Undergraduate",
    subjects : ["Computer Science", "Mathematics", "Physics"],
    parents : {
        father : "Mitchel",
        mother : "Zendela",
        email : "parents@mail.com"
    }
};

/* >>>> Old unnecessary way >>>>>

const name = student.name;
const grade = student.grade;
console.log(name, grade)
*/

// destructuring

const {name, age, meal="bread"} = student; // new key:value meal with default value bread
console.log(name, age, meal)

const {subjects, numberOfSubs = subjects.length} = student;
console.log(numberOfSubs);  // 3




// Aliases
const {grade : cls} = student;
console.log(cls) // Undergraduate
// console.log(grade)  Reference Error => grade not defined
// cant use variable 'grade' - use 'cls'



// Nested object Destructuring

const {parents : {father}} = student;
console.log(father) // Mitchel


// === Destructuring to Function Parameter

function sendMail({parents : {email}}) {
    console.log(`Mail send to ${email}`)
}

sendMail(student); // Mail send to parents@mail.com




// === Destructure a Function Return Value

const getStudent = () => {
    return {
    name : "David",
    age : 19,
    grade : "Undergraduate",
    subjects : ["Computer Science", "Mathematics", "Physics"],
    parents : {
        father : "Mitchel",
        mother : "Zendela",
        email : "parents@mail.com"
    }
};
};

const {name : stdName, age : stdAge} = getStudent();

console.log(stdName, stdAge); // David, 19




//  === Destructuring in Loop ===

const users = [
    {
        uName : "Jiban",
        sal : 90000
    },
    {
        uName : "William",
        sal : 70000
    },
    {
        uName : "Santosh",
        sal : 95000
    },
];


for ({uName, sal} of users) {
    console.log(uName, sal);
};



// === Optional Chaining ===

 const explorer = {
  expName: "Andrew",
  dog: {
    dogName: "Choco",
  },
};

/*
const friend = explorer.friend // undefined
const friendPet = explorer.friend.pet // error

>>>>
const friendPet = explorer.friend && explorer.friendPet // Old unnecessary way
*/

// >>>>>>>>>> Optional Chaning ;

const friendPet = explorer.friend?.pet;
console.log(friendPet); // Undefined