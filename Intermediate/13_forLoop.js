// for(let i = 0;i <= 10;i++){
//     console.log(i);
// }


const myStates = ["Rajasthan",
"Delhi",
"Haryana" ,
"Punjab",
1998,
"Uttar Pradesh",
"Uttrakhand"];

for (let index = 0; index < myStates.length; index++) {
  if (typeof myStates[index] !== "string") {
      continue;
  }
  console.log(myStates[index]);
}
