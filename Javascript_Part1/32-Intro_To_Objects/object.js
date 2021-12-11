// Objects


/*

Arrays are good but they are not sufficient for real world data.

Objects store key value pairs and object do not have indexes.

Objects are reference data type.

*/


// 1. Creating an Object

const person = {
    name: 'Nadia',
    age: 25,
    hobbies: ['reading a book', 'watching a movie', 'eating', 'sleeping'],
};


console.log(person);
console.log(typeof person);




// 2. How to access data from objects. You can access by dot method or bracket method.

console.log(person.name); // dot method
console.log(person['name']); // bracket method

console.log(person.age);
console.log(person['age']);

console.log(person.hobbies);



// 3. how to add key value pair to objects

person.gender = 'Female';

console.log(person);