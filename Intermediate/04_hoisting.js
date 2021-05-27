tipper(8); // It will run because of Global execution  ---> Execution Context
 
function tipper(a) {  // Execution Context
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper(5); //  Execution Context


// The Points to remember about context is: ---
// 1. Functions declarations are scanned and made available
// 2. Variable declarations are scanned and made undefined
// bigTipper(78);  

// function bigTipper(a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

// bigTipper(87); It throws error because in global context variables are declared but undefined

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper(98); // it runs 


// console.log(myName);  --> Gives undefined to the console
var myName = "Shubham"; 
console.log(myName);

console.log(name);
var name = "Hitesh";

function sayName() {
    var name = "MR S";
    console.log(name);
}

sayName();

console.log(name);
