function determineHouseHoldPts() {
    console.log("Inside the function")
}

let carbonFootprintPoints = 0;
const numberInhousehold = 3;

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

// global scope

determineHouseHoldPts()