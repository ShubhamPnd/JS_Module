const websiteNames = ["Flipkart","Netflix","Amazon" , "Facebook","Twitter","Youtube"];


// for of loop simply used for arrays
for(const web of websiteNames){
    console.log(web);
}

// and for In loop is used simply for objects and wriiten key values
const symbols  = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "LearnCodeOnline",
    dg: "Diploguide"
};


for( const sym in symbols){
    // console.log(sym);
    // console.log(symbols[sym]);
    console.log(`keys:${sym} and value:${symbols[sym]}`)
}