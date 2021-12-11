// undefined

let firstName;
console.log(firstName, typeof(firstName));


/* const firstName;  you have to assign a value to const firstName otherwise it will give you  an error */

firstName = 'Nadia';
console.log(firstName, typeof(firstName));






// null

let myVariable = null;
console.log(myVariable, typeof(myVariable)); // typeof(myVariable) gives you an object. It is a bug in Javascript. It is not an object. Keep this mind.

myVariable = 'Nadia';
console.log(myVariable, typeof(myVariable));





// BigInt

let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER gives you how much digit or integer can be inputted or stored in a javascript;
console.log(9007199254740991); // This is the maximum integer stored in a javascript.

console.log(9007199254740991990); // You notice when you included 990, it will give you the output of  '9007199254740992000' instead of 9007199254740991. Instead of 990 which you included, it gives you 000. That means it exceeded the number of digits that the javascript can input.

// Now to write this '9007199254740991990' in a javascript, you have to put BigInt to it.
console.log(BigInt(9007199254740991990)); // it will give you can output of 9007199254740991990.

// Another way of writing the above code is:
console.log(9007199254740991990n); // it will also give the same functionality as a BigInt