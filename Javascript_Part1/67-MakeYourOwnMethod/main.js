// methods
/* methods are functions inside object */


const person = {
    firstName: 'Nadia',
    age: 23,

    about: function() {
        console.log(this);
        console.log(`Person name is ${this.firstName} and age is ${this.age}`)
    }

};

console.log(person.firstName);
person.about();




function personInformation() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person2 = {
    firstName: 'Omar',
    age: 18,
    about: personInformation,
}


const person3 = {
    firstName: 'Sarah',
    age: 26,
    about: personInformation,
}


person2.about();
person3.about();





console.log(this); // gives us window object
console.log(window); // also give us window object
console.log(this === window); // true



function myFunc() {
    console.log('Hello Function');
    console.log(this); // also gives window object
}
myFunc();



function myFunc2() {

    'use strict' // strict is used so that 'this' does not point to window object

    console.log('Hello Func2');
    console.log(this);  // will give us undefined;
}

myFunc2();