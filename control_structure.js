// /****
//  * if else statements
//  */

// let numEnteredByUser = parseInt(prompt("Enter a number : "));

// if(numEnteredByUser > 0)
// {
//     console.log("Entered number = " +numEnteredByUser);
//     console.log("is positive");
// }
// else if (numEnteredByUser == 0)
// {
//     console.log("Entered number = " +numEnteredByUser);
//     console.log("is zero");
// }
// else 
// {
//     console.log("Entered number = " +numEnteredByUser);
//     console.log("is negative");
// }

// Basic boolean logic AND OR NOT 

let a = true;
console.log(21 > 45 && 23 < 67);
console.log(56.78 < 5.67 || 11 > 3);
console.log(!a);

// ternary operator 
// condition if else i.e. > ? :

let name = 'Ishann';
let age = 11;

age >= 18 ? console.log(name + ' can drink beers..')
    : console.log(name + ' is not allowed to drink beers');

// switch statements
let getAletterFromUser = prompt('Enter a letter');

getAletterFromUser = getAletterFromUser.toLocaleLowerCase();

console.log("User typed : "+getAletterFromUser);
switch (getAletterFromUser) {
    case 'a':
        console.log('vowel');
        break;
    case 'e':
        console.log('vowel');
        break;
    case 'i':
        console.log('vowel');
        break;
    case 'o':
        console.log('vowel');
        break;
    case 'u':
        console.log('vowel');
        break;

    default:
        console.log('consonant');
        break;
}

