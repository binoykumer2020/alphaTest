// functions declaration and expression == always return a value
// non parameterised funtion declation
function addition() {
    console.log(120 + 120);
}
addition();

// parameterised function 
function addition1(num1, num2) {
    return num1 + num2;
}
console.log(addition1(10, 200));

// function expression which returns a value 

let employeeDetails = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender; // var defines more in global level
    return name + " is " + age + " years of old " + " and his gender is " + gender;
}

console.log(employeeDetails('Binoy', 40, 'M'));
console.log(employeeDetails('Nandini', 34, 'F'));
console.log(employeeDetails('Ishaan', 11, 'M'));

let whatDoYouDo = function (job, name) {
    switch (job) {

        case 'teacher':
            console.log(name + ' is a ' + job)
            break;
        case 'doctor':
            console.log(name + ' is a' + job)
            break;

        case 'engineer':
            console.log(name + ' is an ' + job)
            break;
        case 'lawyer':
            console.log(name + ' is a' + job)
            break;

        default:
            console.log("He is not such in profession");
            break;
    }

}

console.log(whatDoYouDo('engineer', 'Ishaan'));
console.log(whatDoYouDo('lawyer', 'Nandini'));