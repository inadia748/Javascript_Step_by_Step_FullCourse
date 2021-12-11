// push
/* Adding an element at the end of an array */

let fruits = ['apple', 'mango', 'grapes'];
console.log(fruits);
fruits.push('banana');
console.log(fruits);

// push returns the length of the array when inserted at the end of an array.
console.log(fruits.push('oranges'));

console.log(fruits);



// pop
/* Remove the lements at the end of an array and it will also the element which is removed */

//console.log(fruits.pop()); // showing the element which is removed. "oranges" is removed.
let popedFruit = fruits.pop();
console.log(fruits);
console.log(`The popped fruit is ${popedFruit}`);






// unshift
/* unshift is used to add elements at the beginning of an array> It also returns the length of the array when added at the beginning of an array */

fruits.unshift('pomegranate');
fruits.unshift('passion fruit', 'jackfruit', 'watermelon');
console.log(fruits);
console.log(fruits.unshift('custard apple'));





// shift
/* It removes the element at the beginning of an array and it also returns the element that is removed at the beginning */

let removedBeginningElement = fruits.shift();
console.log(fruits);
console.log(`The removed element from the beginning of an array is ${removedBeginningElement}`);