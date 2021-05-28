var countries = ["India" , " USA" , "England" , "Russia" , "China"];

var states = ["Delhi" , "Punjab" , "Haryana" , "Rajasthan"];

// console.log(countries.length);

// console.log(states.length);

// console.log(countries);
// console.log(states);

// console.log(states[2]);
// console.log(countries[3]);
// console.log(countries[4]);
// console.log(states[3]);

countries[2] = "Pakistan";
// console.log(countries);

states[2] = "Bihar";
// console.log(states);

var user = ["Shubham" , "Shubham@LCO.dev" , 3 , 34, true]; // But this not a good data structure to store data like that
// console.log(user);

user.pop();
// console.log(user);

user.unshift("NEW VALUE");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("Shubham"));
console.log(user.indexOf(3));
console.log(user.indexOf("nrret"));

console.log(Array.from("Shubham"));


