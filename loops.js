// for loop

// for(var i =0; i<data.length; i++)
// {console.log(data[i]);}

// while loop 
// var i = 0;
// while(i<data.length){
//     console.log(data[i]);
//     i++;}

let data = ['Ishaan', 'Student', 11, false, 'London'];
console.log(data.length);

// continue and break statement 

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'string') continue;
   // console.log(data[i]);
}

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'string') break;
   // console.log(data[i]);
}

// Backward looping 
for(let i = data.length -1 ; i>=0; i--){
    console.log(data[i]);
}
