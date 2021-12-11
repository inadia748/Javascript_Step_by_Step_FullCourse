// Boolean and comparison operator

// Booleans give you true or false

let num1 = 5;
let num2 = 7;

console.log(num1 > num2);

console.log(num1 < num2);

console.log(7 == 7);

console.log(7 >= 7);

console.log( 7 <= 7);

console.log(8 >= 7);

console.log(8 <= 7);




// == vs ===

num1 = 7; // it is a number
num2 = '7'; // it is a string;

/*  '==' will check only the value and not the type */
console.log(num1 == num2);  // it will return true since the values are same. Note: the type is not same. 'num1' is a number while 'num2' is a string.


/* '===' will check the value as well as the type */
console.log(num1 === num2); // it will return false . Here the value is same but the types are different. num1 is a Number while num2 is a string.

num2 = 7;
console.log(num1 === num2); // it will give true, since the values are same as well the types are also same





// != vs !==
num1 = 7;
num2 = 8;

/* != is not equal to */
console.log(num1 != num2);

