// for loop in array

let fruits = ['apple', 'mango', 'grapes', 'banana'];

console.log(`The length of an array 'fruit' is ${fruits.length}`);
console.log('The last element in the array is ',fruits[fruits.length-1]);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


console.log('\n Converting the items in an array to uppercase: ');
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}


let fruits2 = [];

for(let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);