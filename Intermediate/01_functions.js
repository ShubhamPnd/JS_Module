function sayHello(){
    console.log("Hello There, Shubham this Side!!"); // The Value in the console log in the function is called Hard Coded Value
}

function sayHi(name){
    // console.log("Hi " , name); - >> Old Syntax
    //Mew Syntax 
    console.log(`Hey there , ${name} , You are a good guy`)
}

sayHello();
sayHello();
//When you want to call a function than it is called with the pair of parenthesis
//But When you want to refer a function then it can be done without the pair of parenthesis - >  IN DOM Manipulation
// for E.g -- sayHello;

sayHi("Shubham");
sayHi("Yashika");

// Returning a Value and Consoling the value are different approaches 
// Consoling means --> It prints the value
// But In Returning you have to store the returned value in a varible to print that function value or directly print that value by calling function in the console e log file 
 
function namastey() {
    return "Hello From India";
}

var greetings = namastey();
console.log(greetings);