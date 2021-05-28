var testArray = [2,4,6,3,1,5,9,8];

// console.log(testArray.fill(0));
// Start Value - Inclusive
// End Value - Exclusicve
// console.log(testArray.fill("S"));
// console.log(testArray.fill("S" , 0)); // Nothing will be change
// console.log(testArray.fill("S" , 3)); // It starts to place "S" from 3 index
// console.log(testArray.fill("S",2,6)); // It gives the value from 2nd index to 6-1 = 5th index


const myNumber = [23,45,64,67,43,78,45,56,78];

const result = myNumber.filter((num) => num != 64);
const result2 = myNumber.filter((num) => num > 64);
console.log(result);
console.log(result2);


