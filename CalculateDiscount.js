// D = ((L-S)/L)*100;

var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice-sellingPrice)/listingPrice) * 100;

console.log("Discount Percentage is:" + Math.round(discountPercentage) + " % off");