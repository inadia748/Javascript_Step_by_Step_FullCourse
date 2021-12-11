// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125




































/*

5, 9, 1200, 400, 3000

sorting in ascending order is 5, 9, 400, 1200, 3000

sorting in descending order is 3000, 1200, 400, 9, 5


*/

/* foreach, map, filter, reduce will not mutate the original array but it wil return a new array. */

// sort method will mutate the original array.






/* Aim is to sort the elements in the array in ascending order */
const numbers = [5, 9, 1200, 400, 300];
console.log(numbers);

/* you will notice that when you sort numbers in javascript, 
Javascript will convert the numbers to a string and then it sorts them alphabetically.
It will then convert the string to ascii code and then sort them accordingly. 
See the code below to understand:
*/

// ['5', '9', '1200', '400', '300'] --> converting the numbers in an array to a string.
// [53, 57, 49, 52, 51] ----> converting to its ascii code

// '0' : 48           
// '1' : 49
// '2' : 50         ----> These are the ascii codes
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


numbers.sort(); // it will sort ascending order according to its ascci code.

console.log(numbers);



const userNames = ['Nadia', 'abcd', 'Eva', 'ABC', 'nadia', 'saad'];
console.log(userNames);
userNames.sort();
console.log(userNames); // capital letters are sorted first then the small letters. 




const numbers2 = [5, 9, 1200, 410, 3000];

console.log(numbers2);

// Sorting in ascending order properly.
numbers2.sort((a, b) =>{
    return a - b;
});
console.log(numbers2);

/* Working method on return a - b used in sort.

// 1200, 410
// a - b ----> 790
// a - b ----> positive (greater than 0) ---> b,a
//  b will come first and then a ----> 410 , 1200


// a - b  ----> negative
// 5, 9  ------> -4 negative(less than 0) ---> a, b
// a will come first and then b ----> 5, 9

*/




const numbers3 = [5, 9, 1200, 410, 3000];
console.log(numbers3);

// sorting in descending order
numbers3.sort((a, b)=> {
    return b - a;
});
console.log(numbers3);






const products = [
{productId: 1, productName: 'P1', price: 300},
{productId: 2, productName: 'P2', price: 3000},
{productId: 3, productName: 'P3', price: 250},
{productId: 4, productName: 'P4', price: 7000},
{productId: 5, productName: 'P5', price: 70},

];

console.log(products);

// Low to High Price
products.sort((a,b)=> {
    return a.price -  b.price;
});

console.log(products);



/*
// You are cloning the array products then sorting them. You are cloning because you do not want to mutate the array.
// The array is cloned using slice method.

// cloning an array using slice
const lowToHigh = products.slice(0).sort((a, b)=> {
    return a.price - b.price;
});

console.log(lowToHigh);



// cloning an array using spread operator

const HighToLow = [...products].sort((a,b)=>{
    return b.price - a.price;
})
console.log(HighToLow);

*/