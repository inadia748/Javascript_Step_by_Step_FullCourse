// array destructuring


const myArray = ['value1', 'value2','value3'];

let myvar1 = myArray[0];
let myvar2 = myArray[1];

console.log(`Value of myvar1 is ${myvar1}`);
console.log(`Value of myvar2 is ${myvar2}`);


/* Code on line 6 and 7 can be done in shorter way, that is: */
let  [val1, val2, val3] = myArray;

console.log('value of val1 is', val1);
console.log('value of val2', val2);
console.log('value of val3 is', val3);


// Now changing the value of val1
val1 = 'Hello';
console.log(val1);
console.log(val2);





// With another array

const arr = [1];

let [a, b, c] = arr;

console.log(a, b, c);

const arr2 = [1, 2, 5, 8, 10];
let newArr2 = arr2.slice(2);
console.log(newArr2);


const arr3 = [1, 2, 5, 8, 10, 11, 55];
let [a1, a2, a3, ...otherArrays] = arr3;
console.log(a1, a2, a3, otherArrays);