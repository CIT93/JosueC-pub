import { determineHouseSizePts, determineHouseHoldPts } from './cfp.js';
import { renderTbl } from './render.js';

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

function addHeading() {
  if (!document.getElementById("output-heading")){
    const heading = document.createElement("h2");
    heading.id = "output-heading";
    heading.textContent = "Carbon Footprint Data";
    OUTPUT.appendChild(heading)
  }
}

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first, 
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize, 
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });
}

FORM.addEventListener(`submit`, function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value,);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  addHeading();
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})

// I was still in my w7 pri terminal when I did the setup commit.
