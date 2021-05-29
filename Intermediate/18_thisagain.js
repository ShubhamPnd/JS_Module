// // For all regular functions calls , this points to window objects

// var user = {
//     firstName: "Shubham",
//     courseCount: 4,
//     getCourseCount : function () {
//         console.log("line Number 7" , this);
//     }
// };

// user.getCourseCount(); // it isn't a regular function call 

// function sayHello() {
//     console.log("Hello");
// }

// sayHello(); // This is regular function call --> calling function without any help of the object


var user = {
    firstName: "Shubham",
    courseCount: 4,
    getCourseCount : function () {
        console.log("line Number 7" , this);
        function sayHello(){
            console.log("Hello");
            console.log("On Line Number 27" , this);
        }
        sayHello();
    },
};

user.getCourseCount();