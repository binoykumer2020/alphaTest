/*****
 * Binoy and his family went to a holiday trip. 
 * The bills were 124, 48, 268
 * so tip to the waiter a fair amount. Create a calculator
 * (a function rather) 20% tip if the bill is less than 50,
 * 15% tip if the bill is between 50 to 200
 * and 10% id the bill is more than 200
 *   Get the 2 arrays 
 * containing all the three trips for each bill 
 * containing all the final amount (bills and tips)   
 */

 function tipCalculator (bill)
 {
     let percentage;
     if(bill <50){percentage = .2;}
     else if (bill>=50 && bill <200){percentage = .15;}
     else (percentage = .1);
     return parseInt (percentage * bill);
 }

 // console.log(tipCalculator(234)); for testing purpose
  
 let bills = [124, 48, 268];
 
 let tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];

//console.log(tips);

 let finalBills = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

 console.log(tips, finalBills);