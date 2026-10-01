const unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");



function convertLength(num) {
  const metersToFeet = parseFloat((num * 3.281).toFixed(2));
  const feetToMeters = parseFloat((num * 0.305).toFixed(2));
  return `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`;
}

function convertVolume(num) {
  const litersToGallons = parseFloat((num * 0.264).toFixed(2));
  const gallonsToLiters = parseFloat((num * 3.785).toFixed(2));
  return `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`;
}

function convertMass(num) {
  const kilogramsToPounds = parseFloat((num * 2.204).toFixed(2));
  const poundsToKilograms = parseFloat((num * 0.454).toFixed(2));
  return `${num} kilograms = ${kilogramsToPounds} pounds | ${num} pounds = ${poundsToKilograms} kilograms`;
}

convertBtn.addEventListener("click", function() {
    const userInput = unitInput.value;
    const length = convertLength(userInput);
    const volume = convertVolume(userInput);
    const mass = convertMass(userInput);
    lengthResult.innerText = length;
    volumeResult.innerText = volume;
    massResult.innerText = mass;
})