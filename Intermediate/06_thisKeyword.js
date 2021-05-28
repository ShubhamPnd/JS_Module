// TODO: Part 1 for this keyword;

console.log(this); // this gives cruly braces in the Console but in chrome console it gives window values

var game = "basketBall";

function sayGameName () {
    var gameName = "soccer";
    console.log(this); // this gives a lot of information but cant be understable right now we will talk about it later
}

sayGameName();