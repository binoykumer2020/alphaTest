/****
 * objects and its properties 
 */

// create an object defines a key value pair
// order matter a lot for array but for objects not

//  let objectBinoy = {
//      firstName : 'Binoy',
//      lastName  : 'Kumer',
//      birthYear : 1980,
//      family: ["Nandini", "Ishann", "Baba", "Maa"],
//      job: 'Designer',
//      isMarried: true
//  };

//  console.log(objectBinoy);// entire object will be printed
//  console.log(objectBinoy.firstName);
//  console.log(typeof 'Binoy');
//  console.log(typeof objectBinoy);
//  console.log(objectBinoy['lastName']);
//  console.log(objectBinoy.birthYear);
//  let x = 'birthYear';
// console.log(objectBinoy['birthYear']);

//  // data mutation
//  objectBinoy.job = 'QA Engineer';
//  objectBinoy['isMarried'] = false;

//  console.log(objectBinoy);

// // another way to crete objects

// let ishaan = new Object();
// ishaan.firstName = 'Ishaan';
// ishaan.lastName  = 'Gupta';
// ishaan.year = 2011;
// ishaan['school']= 'Kensington'; 

// console.log(ishaan);

// Object Methods 
let objectBinoy = {
    firstName: 'Binoy',
    lastName: 'Kumer',
    birthYear: 1990,
    family: ["Nandini", "Ishann", "Baba", "Maa"],
    job: 'Designer',
    isMarried: true, 
    calculateAge: function(birthYear) // func expression
    {
        //return 2020 -this.birthYear; // by this keyword we capture an Objects property i.e. birthYear
        // we can do this way as well
        this.age = 2020 - this.birthYear;
    }
};
// console.log(objectBinoy);
// console.log(objectBinoy.calculateAge());

//  let age = objectBinoy.calculateAge();
//  objectBinoy.age = age

//objectBinoy.age = objectBinoy.calculateAge(); // instead of this refer to function 

 objectBinoy.calculateAge();// call the function
 console.log(objectBinoy);
