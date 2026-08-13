// Closure => Closure is when an inner function remembers variables of an outer function even when the outer function is executed

function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    }

}

const func = outer();
func()
// console.log(x)   Error => 'x' not defined



function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    }
}

const incFunc = outerCount();

incFunc() //1
incFunc() //2
incFunc() //3

// console.log(count)   Error => 'Count' Not Defined





// Real World Example

function createBankAccount(initialAmount) {
    let balance = initialAmount;

    return {
        deposit: function (amount) {
            balance = balance + amount;
            console.log(`Deposited Amount = ${amount}, Total Balance = ${balance}`);
        },

        withdraw: function (amount) {

            if (amount < balance) {
                balance = balance - amount;
                console.log(`Deposited Amount = ${amount}, Total Balance = ${balance}`);
            }
            else {
                console.log("Sorry You do not have less amount left");
            }
        }

    }
}


const JibanAcc = createBankAccount(1000)
JibanAcc.deposit(200);
JibanAcc.deposit(1100);

JibanAcc.withdraw(2000)