// This idea behind Scope Chaining is that you can request anything from your elder but you van not take it from your younger member
// Hitesh's ICECREAM Example;

var myName = "Shubham";

console.log("At Line number 3" , myName);

function sayName() {
    // var myName = "MR. S";
    console.log("At Line Number 7", myName);
    sayName2();
    function sayName2() {
        // var myName = "MR. SP";
        console.log("At line number 11" , myName);
    }
}

sayName();