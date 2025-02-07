const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints
}

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if ( numberInHousehold === 2){
        houseHoldPoints = 12;
    } else if ( numberInHousehold === 3){
        houseHoldPoints = 10;
    } else if ( numberInHousehold === 4){
        houseHoldPoints = 6;
    } else if ( numberInHousehold === 5){
        houseHoldPoints = 4;
    } else if ( numberInHousehold >= 6){
        houseHoldPoints = 2;
    }
    return houseHoldPoints
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
    for (arr of cfpData){
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `A household with ${arr[0]} members living in a ${arr[1]} home earns ${arr[2]} points and ${arr[3]} points for home size resulting in a total of ${arr[4]} carbon footprint `;
        output.appendChild(newP)
    }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "small");
start(2, "medium");
start(6, "large");
start(3, "apt");
start(5, "small");
start(4, "medium");

displayOutput()