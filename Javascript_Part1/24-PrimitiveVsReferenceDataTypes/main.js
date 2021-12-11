// primitive vs reference data types



/* Primitive Data type */
let num1 = 6;
let num2 = num1;

console.log('value of num1 is ', num1);
console.log('value of num2 is ', num2);
console.log('\n');
console.log('After increment num1');
num1++;
console.log('value of num1 is ', num1);
console.log('value of num2 is ', num2);



console.log('\n');
/* Reference type */
// Array is a reference type

let array1 = ['item1', 'item2'];
let array2 = array1;

console.log('array1 ', array1);
console.log('array2 ', array2);

console.log('after pushing elemnt to array1');
array1.push('item3');
console.log('array1 ', array1);
console.log('array2 ', array2);






/*

Primitve types are stored in stack. Variables get a separate memory address.

Reference types are stored in heap. If an array is refernced to another array. Whatever changes happens in that array, 
it will also have changes in that array.


*/