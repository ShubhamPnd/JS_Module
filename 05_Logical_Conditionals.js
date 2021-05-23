var isLoggedin = true;
var isVerifiedEmail = true;
var cardInfo = true;

// if(isLoggedin){
//     console.log("Logged in successfully");
//     if(isVerifiedEmail){
//         console.log("Email is Verified");
//         if(cardInfo){
//             console.log("Card Information is Valid");
//         }
//     }
// }

if(isLoggedin && isVerifiedEmail && cardInfo){
    console.log("You are allowed to make payments");
} else {
    console.log("Sorry Make the fields correct to purchase this course");
}

