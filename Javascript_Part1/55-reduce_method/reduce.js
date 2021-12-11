// reduce


const numbers = [1, 2, 3, 4, 5];

const sumOfAllNumbers = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
}, 100 ); // 100 is the initial value to be added to the accumulator.

console.log('Sum of all the elements in an array', sumOfAllNumbers);


// accumulator , currentValue,  return
//    1              2            3
//    3              3             6
//     6             4              10
//    10              5             15






const userCart = [
{productId: 1, productName:'mobile', price: 12000},
{productId: 2, productName:'laptop', price: 55000},
{productId: 3, productName:'tv', price: 15000},
];


const totalPrice = userCart.reduce((totalPrice, currentProductPrice)=> {
    return totalPrice + currentProductPrice.price;
}, 0); // initial TotalPrice is 0;
console.log(totalPrice);


// totalPrice   currentProductPrice   return

//  0                 12000               12000
// 12000               22000            34000
// 34000               15000            49000

