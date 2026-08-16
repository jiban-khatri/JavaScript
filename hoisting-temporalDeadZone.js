// Hoisting = variable declarations are processed before the execution 

console.log("UserName is ", userName);     // undefined 

var userName;   // No Error with var : hoisted
userName = "David";

console.log("UserName is", userName); // David




// Temporal Dead Zone (TDZ) =  An area where you cannot access a variable until it is initialized.

// Reference Error

{
    // age variable's TDZ starts here
    //
    console.log(age);   // Reference Error
    //
    //
    //
    //
    let age = 20;   // age variable's TDZ ends here
    //
    console.log(age) // 20 => No Error
}


