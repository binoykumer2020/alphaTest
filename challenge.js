/*****
 * I am goint to present you today a program where arrays + objects + loop + functions etc would work together
 * for example 2 persons going to restaurants and spent [120, 35, 391, 23, 178] and [134, 56, 790, 67, 201] and also tipped to waiter based on if the spent less than 50 then they tipped 20%, between 50 to 200 then 15%, more than 200 is 10%. Whats their tipped bill for each transactions and final bill and avarage tipped. Who paid higher average tips?
 */

// lets create two objects. Because tips and final bill we need to find out so we can calculate those and put as a empty objects

let ishaan = {
    name: "Ishaan Dasgupta",
    bills: [120, 35, 391, 23, 178],
    calTips: function () {
        this.tip = [];
        this.finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) { percentage = .2 }
            else if (bill > 50 && bill < 200) { percentage = .15 }
            else (percentage = .1);

            this.tip[i] = percentage * bill;
            this.finalBill[i] = bill + this.tip[i];

        }
    }
}
let rittika = {
    name: "Rittika Dasgupta",
    bills: [134, 56, 790, 67, 201],
    calTips: function () {
    this.tip = [];
        this.finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) { percentage = .2 }
            else if (bill >= 50 && bill < 200) { percentage = .15 }
            else (percentage = .1);

            this.tip[i] = bill * percentage ;
            this.finalBill[i] = bill + this.tip[i];

        }
    }
}

function average(tip) {
    var sum = 0;
    for (var i = 0; i < tip; i++) {
        sum = sum + tip[i];
    }
    return sum / tip.length;
}

ishaan.calTips();
rittika.calTips();
ishaan_average = average(ishaan.tip);
rittika_average = average(rittika.tip);

console.log(ishaan, rittika);


if(ishaan_average > rittika_average)
{
    console.log(ishaan.name + " \'s family pays higher tips, with an average of " +ishaan_average);
} 
else if (rittika_average > ishaan_average)
{
    console.log(rittika.name + " \'s family pays higher tips, with an average of " +rittika_average)
}
else(console.log(ishaan.name + " and " + rittika.name + " both are paying equal tips!!"))