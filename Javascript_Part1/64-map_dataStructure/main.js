// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string





const person = {
    firstName: 'Nadia',
    age: 23,
    1: 'one',
}
console.log(person.firstName);
console.log(person['firstName']);


for (let key in person) {
    console.log(key);
    console.log(typeof key);
}






// map

const person2 = new Map();

person2.set('firstName', 'Nadia');
person2.set('age', 7);
person2.set(1, 'one');
person2.set([1, 2, 3], 'onetwothree');
person2.set({1: 'one'}, 'onetwothree');

console.log(person2);

console.log(person2.get(1));
console.log(person2.get('firstName'));

console.log(person2.keys());


for (let key of person2.keys()) {
    console.log(key, typeof(key));
}

for (let key of person2) {
    console.log(Array.isArray(key));
}

for (let [key, value] of person2) {
    console.log(key, value);
}

// Another way of creating map
const p = new Map([['firstname', 'John'], ['age', 23]]);
console.log(p);


const person4 = {
    id: 1,
    firstName: 'Nadia',
}

const person5 = {
    id: 2,
    firstName: 'Sarah'
}

const extraInfo = new Map();
extraInfo.set(person4, {age: 22, gender:'Female'});
extraInfo.set(person5, {age: 22, gender:'Female'})
console.log(extraInfo);

console.log(person4.id);
console.log(extraInfo.get(person4));
console.log(extraInfo.get(person4).age);
console.log(extraInfo.get(person4).gender);

console.log(person5.id);
console.log(extraInfo.get(person5));
console.log(extraInfo.get(person5).age);
console.log(extraInfo.get(person5).gender);