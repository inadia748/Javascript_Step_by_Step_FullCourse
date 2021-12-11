const person = {
    name: 'Nadia',
    age: 25,
    hobbies: ['reading a book', 'watching a movie', 'eating', 'sleeping'],

    // Now in line 8, you will notice the difference between dot notation and bracket notation.

    'favorite foods': ['nachos', 
    'grilled chicken', 
    'magarita pizza', 
    'chicken burger', 
    'chicken roast', 
    'kebab'],   // You notice the object key, 'favorite food', there is a space between them and since there is space between them, the key is written in a string.
    // Inorder to access favorite foods, you have to use bracket notation, you cannot use dot notation.

    
};


// Accessing data by bracket notation


/* the keys in an object is by default a string */
console.log(person['name']);
console.log(person['age']);




// Adding key value pair to objects by bracket notation
person['gender'] = 'female';

console.log(person);


console.log(person['favorite foods']); // accessing by bracket notation.






const key = 'email'; 

let job = 'job';

let num = 2;

// Adding const key, let job and let num to the object. You have to use bracket notation.
// Try doing it with dot notation like person.key = 'abc@test.com', it will not work.

person[key] = 'nadia@testing.com';
person[job] = 'student';
person[num] = 100;

console.log(person);


