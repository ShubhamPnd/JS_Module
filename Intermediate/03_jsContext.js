var myName = "Shubham Pandey";

if (myName === myName) {
    console.log("the Statement is true");
} else {
    console.log("The Statement is false");
}

// This piece of code writes "the sttement is true" when it is in the chrome console but when run this code 
// here it will give error because of the JAVASCRIPT Global Context
// if (myName === window.myName) {
//     console.log("the Statement is true");
// } else {
//     console.log("The Statement is false");
// }

sayHello();

function sayHello() {
    console.log("Hello There");
}

