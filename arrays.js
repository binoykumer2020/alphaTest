/****
 * stroing data --DATA ARCHITECTURE
 */
// initialize new array
 let names = ['Ishaan', 'Binoy', 'Nandini'];
 let years = new Array(2011, 1979, 1986);

 console.log(names[1]);
 console.log(names); // entire array
 console.log(years.length);
 console.log(names[0] + " born on the year of " + years[0]);
 // data mutation
 names[1]= "Ritikka";
 console.log(names);
 names[4]= 'Oishee';
 console.log(names);

//different data type
let dataBinoy = ["Binoy", 'M', 41, false, 'Engineer'];

// dataBinoy.push("QAE");// adding a value
// console.log(dataBinoy);

// dataBinoy.unshift('Mr'); // adding in the 0 index
// dataBinoy.pop();
// dataBinoy.pop();
// dataBinoy.shift();
// console.log(dataBinoy);
console.log(dataBinoy.indexOf(41)); 
console.log(dataBinoy.indexOf('QA')); // output -1 will present the particular element is not present


// Can you find out Binoy is an engineer using tarnary operators

let isAnEngineer = dataBinoy.indexOf('Engineer') === -1 ? 
'Binoy is not an Engineer' : 'Binoy is an Engineer';
console.log(isAnEngineer); 






