var user = {
    firstName: "Shubham",
    lastName: "Pandey",
    role: "Admin",
    logINCount: 32,
    facebookSignedIn: true
};

console.log(user.firstName);
console.log(user.logINCount);
console.log(user["lastName"]);

console.log(user);

console.table(user);