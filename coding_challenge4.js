/****
 * 
 * Lets calulate BMI with given mass and heights for Ishaan and Binoy
 * for each of them carete Object with some properties
 * such fullName, age, mass, heights
 * then add a method BMI 
 * find out who has the higher BMI with name 
 * 
 */

let binoy = {
    fullName: 'Binoy Kumer',
    mass: 92,
    height: 1.83,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let ishaan = {
    fullName: 'Ishaan Kumer',
    mass: 32,
    height: 1.33,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(binoy, ishaan);


// binoy.calculateBMI();
// ishaan.calculateBMI();
// console.log(binoy, ishaan);

if (binoy.calculateBMI() > ishaan.calculateBMI()) {
    console.log(binoy.fullName + " has a higher BMI than " + ishaan.fullName +"\'s BMI " +ishaan.bmi);
} else if (ishaan.calculateBMI > binoy.calculateBMI){
    console.log(ishaan.fullName + " has a higher BMI than " + binoy.fullName + "\'s BMI " +binoy.bmi);
} else (console.log("They have the same BMI"));

// DRY Don't repeat yourself

