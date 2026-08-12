/*Execution context means running the current code along with the codes that are helping that code to run also
    - While executing the code the the following contexts are created and executed



/* == Global Execution Context (GEC) ==
        - At first the global execution context is created where there 2 phases happens
           ==== Creation Phase ====
                - Window object
                - this keyword
                - this === window
                - variables memory get allocated
                - variables values : undefined
                - function body will be placed directly in the memory
            
            === Execution Phase ===
                - variables gets their values
                - functions executed
            
        === Function Execution Context (FEC) ===
            == Creation Phase ==
                - Variables inside function gets memory allocated
                - variables gets undefined values
            
            == Execution Phase == 
                - do execute the task inside function ( logging in the console, returning etc.)
                
*/  


var name = "Jiban";

function sayName() {
    console.log(this.name)
}

sayName()