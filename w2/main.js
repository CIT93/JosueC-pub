// How to calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Methond 1 

//1. Count the members of your household.
const myHouseMembers = 8;
//2. Consider the size of your home
const myHomeSize = 7;
//3. Evaluate your food choices
const myFoodChoices = 6;
//4. Examine your water consumption
const myWaterConsumption = 2;
//5. Determine how many household purchases you make each year.
const myHouseholdPurchases = 10;
//6. Consider how much waste you produce
const myWasteProduction = 30;
//7. Identify the amount of waste that you recycle
const myRecycling = 0;
//8. Tally up your annual transportation scores.
const myTransportantion =6
//9. Add up your points 
const cfpTotal = myHouseMembers + myHomeSize + myFoodChoices + myWaterConsumption + myHouseholdPurchases + myWasteProduction + myRecycling + myTransportantion;
//10. Write JS to update the rendered html (index.html) with total 
const headingElement = document.querySelector("h1");
headingElement.textContent += cfpTotal