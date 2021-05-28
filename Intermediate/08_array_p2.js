function isEven (element) {
// var isEven = function(element) {}
// OR
// var isEven = (element) => {}
// We can take any one of the function syntax
    // if(element % 2 == 0){
    //     return true;
    // } else {
    //     return false;
    // }

    return element% 2 ===0;
}

// console.log(isEven(2));
// console.log(isEven(4));
// console.log(isEven(3));


// var result = [2,3,6,8].every(isEven);
// console.log(result);


var result = [2,4,6,8].every((e) => {
    return e%2 === 0;
});
console.log(result);

// Here is the example of the call back function without return and curly braces
var odd = [1,3,7,5].every((e) => (e%2 !== 0));
console.log(odd);