// for of loop in array

const fruits = ['apple', 'mango', 'grapes'];
const fruits2 = [];

for (let fruit of fruits){
    console.log(fruit);
    console.log(fruit.toUpperCase());
    fruits2.push(fruit);
}

console.log(fruits2);