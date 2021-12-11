// Intro to Array.



// Array are ordered collection of items. They are reference data type.


let fruits = ['apple', 'mango', 'peaches', 'oranges'];


// Array Indexing

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);




let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 3.2, 5.25, 99, 'apple', 'orange', 'appgame', undefined, null];

console.log(numbers);
console.log(mixed);



console.log(fruits);


// changing the value of the indexes, changing the value from mango to lemon in index 1.

fruits[1] = 'lemons';
console.log(fruits);


console.log(typeof (fruits)); // it is giving output as object.

// to specify what type of object 'fruit' is:
console.log(Array.isArray(fruits)); // fruit is of array object.


let obj = {}; // object literal

console.log(typeof obj);
console.log(Array.isArray(obj)); // obj is an object but it is not an array object.


