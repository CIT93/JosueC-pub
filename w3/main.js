let carbonFootprintPoints = 0;
function determineHouseHoldPts(numberInhousehold) {
    
    if (numberInhousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if(numberInhousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if(numberInhousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10
    } else if(numberInhousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8
    } else if(numberInhousehold === 5) { 
        carbonFootprintPoints = carbonFootprintPoints + 6 
    } else if(numberInhousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if(numberInhousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of members in the household of ${numberInhousehold} the points would be ${carbonFootprintPoints}.`);
}


// const numberInhousehold = 3;


// global scope

function determineHouseSizePts(housesize) {
    if (housesize === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (housesize === "medium") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (housesize === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (housesize === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    } console.log(`If your house size is ${housesize}, then your total points are ${carbonFootprintPoints}.`)
}

determineHouseHoldPts(3)
determineHouseHoldPts("apartment")

console.log(`Total carbon footprint points are ${carbonFootprintPoints}`);