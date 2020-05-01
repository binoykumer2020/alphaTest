// What year Ishaan born 
let year = 2020;
let bornIshaan = year-9;
let bornBinoy  = year -40;

console.log('Ishaan born on '+ bornIshaan);

// Operator precedence which one working first

// define whether a paerson eligible for UK driving 
let currentYear = 2020;
let yearYouBorn = 2011;
let eligibleYear = 18;

let isEligibleForDriving = (currentYear-yearYouBorn) >= eligibleYear; // grouping operators -->Precedence logic comes in the picture
console.log("Is he eligible for driving?" + isEligibleForDriving);

// Task 1: given mass and heigh of two persons, find out a person BMI is higher than other one in boolean

let massBinoy = 92; // in kg
let heightBinoy = 1.83 // in meters

let massIshaan = 31; 
let heightIshaan = 1.23;

let BMIBinoy = parseInt( massBinoy / (heightBinoy * heightBinoy));
let BMIIshaan = parseInt(massIshaan / (heightIshaan * heightIshaan));

console.log(BMIBinoy,BMIIshaan);
let isBinoyBMIhigher = BMIBinoy > BMIIshaan;

console.log(" Is Binoy\'s BMI is higher than Ishaan\'s BMI  :->" +isBinoyBMIhigher);
