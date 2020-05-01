/*****
 * Binoy and his family went to holiday and had their dinner on 5 different restaurants 
 * the bills were 124, 48, 268, 180, 42 
 * Binoy tips 20%  when the bills was less than 50, 15% when bills between 50 to 200 and 10% if it morethan 200
 * 
 * tipCalculator using Objects and loops 1. creare an object with an array for the bill values
 *  2.add a method to calculate the tips and 3.should iterate over the paid bills and do the tips calculations
 * 
 * as an output 1. new array containing all the tips 2. final bill array (bill + tips)
 * 
 * Then after Tejas and his family went to holiday trip and bills were spent 77, 375, 110, 45
 * 20% tips when the bill was less than 100, 10% when the bill was between 100 to 300 and 25% when the bill was 300 and more
 * 
 * same as Binoy's functioanlity
 * create a function not method to calculate the average of a a given away tips 
 * 
 * avg tips per family
 * which family paid highest 
 * 
 * 
 */

let binoy = {
    name: 'Binoy Kumer',
    bills: [124, 48, 268, 180, 42, 789],
    caltips: function () {
        this.tips = [];
        this.finalBills = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if (bill < 50) { percentage = .2 }
            else if (bill >= 50 && bill < 200) { percentage = .15 }
            else (percentage = .1);

            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + this.tips[i];
        }
    }
}

let tejas = {
    name: 'Tejas Rajyaguru',
    bills: [77, 75, 110, 45],
    caltips: function () {
        this.tips = [];
        this.finalBills = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if (bill < 100) { percentage = .2 }
            else if (bill >= 100 && bill < 300) { percentage = .1 }
            else (percentage = .25);

            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + this.tips[i];
        }
    }
}

function calAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

binoy.caltips();
tejas.caltips();

binoy.average = calAverage(binoy.tips);
tejas.average = calAverage(tejas.tips);

console.log(binoy,tejas);


if(binoy.average > tejas.average)
{
    console.log(binoy.name + "\'s family pays higher tips, with an average of " +binoy.average);
} 
else if (tejas.average > binoy.average)
{
    console.log(tejas.name + "\'s family pays higher tips, with an average of " +tejas.average)
}
else(console.log(binoy.name + "and " + tejas.name + " both are paying equal tips!!"))




