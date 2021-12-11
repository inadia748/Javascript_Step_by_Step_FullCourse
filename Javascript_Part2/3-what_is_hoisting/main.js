// hoisting


console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction() {
    console.log('This is my function');
}

var firstName = 'Nadia';
var lastName = 'Islam';
var fullName = firstName + " " + lastName;
console.log(fullName);