// 1. typeof operator

/* data types are string, number, booleans, undefined, null, symbols, and BigInt , these are primitive data types*/

let age = 22;
let firstName = 'Nadia Islam'

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof 7);
console.log(typeof '7');



// 2. convert number to string.
console.log(age);
console.log(age + "");
console.log(typeof (age + ""));

/* to convert a number to string,
    let age = 19;
    age = age + ""; it converts a number to string.

 */

let number = 20;
console.log(number, typeof(number));

number = number + "";
console.log(number, typeof(number));

let number2 = 33;
console.log(number2.toString());



// 3. convert string to number.

let myStr = '34';
console.log(myStr, typeof myStr);

/* 
to convert a string to a number:
myStr = + "34"; it will convert the string to number

*/

myStr = +'34';
console.log(myStr, typeof myStr);






/* Another way of converting a number to string is:
let myNumber = 30;
let numConvertedToString = String(myNumber);
*/
let myNumber = 30;
console.log(myNumber, typeof(myNumber));

let numConvertedToString = String(myNumber);
console.log(numConvertedToString, typeof(numConvertedToString));


/*Another way of converting a string to number is:
let myString = '33';
let stringConvertedToNumber = Number(myString); 
*/

let myString = '33';
console.log(myString, typeof(myString));
let stringConvertedToNumber = Number(myString);
console.log(stringConvertedToNumber, typeof(stringConvertedToNumber));