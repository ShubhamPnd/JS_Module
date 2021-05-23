const uid = "123@abc";

var fullName = "Shubham Pandey";
var email = "Shubham@code.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");
// It is a bad practice to take input from the user in this way 

// console.log("FullName is :- " + fullName);
// console.log(email);
// console.log(uid);

// This technique is called Interpolation in JAVASCRIPT
console.log(`
  With Unique ID : ${uid}
  the user is: ${fullName}
  and his email is: ${email}
  and uses password: ${password}
`);