const person = {
    name: 'Nadia',
    age: 22,
    'person hobbies': ['reading a book', 'watching movies', 'sleeping'],
};



// How to iterate object. The are 2 ways:



// 1. for in loop

for (let key in person) {
    console.log(key);
    console.log(person[key]); // dot notation does not work. bracket notation works here.
    console.log(`${key}: ${person[key]}`);
}


// 2- Object.keys

console.log(Object.keys(person));
console.log(typeof (Object.keys(person)));

const val = Array.isArray(Object.keys(person));
console.log(val);


console.log(Object.values(person));


for (let key of Object.keys(person)) {
    console.log(person[key]);
}





