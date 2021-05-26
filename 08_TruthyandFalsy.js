//TODO: falsy Value : - are something that treated as false always
// undefined 
// null
// 0
// ''
// NaN : - Not a Number
//Other Than falsy values all the other values are truthy values

var user = "null"; // that variable value is undefined
// Null empty not 0 simply empty thing
if(user){
    console.log("Condition is true");
}

// That is called Coercion
// So that's why in JavaScript we use === sign for strict checking the value is equal or not
var num = "2";
if (2 == num) {
    console.log("Condition is true");
}