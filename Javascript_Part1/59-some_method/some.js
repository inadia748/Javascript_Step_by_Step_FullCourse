// some method
/*
The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns true if, in the array, it finds an element for which 
the provided function returns true; otherwise it returns false. 
It doesn't modify the array.
*/

const numbers = [3, 5, 8, 9];

// It will return true if atleast one of them is true

console.log(numbers.some((number)=> number % 2 === 0));



const userCart = [
    {productId: 1, productName: 'mobile', price: 12000},
    {productId: 2, productName: 'laptop', price: 22000},
    {productId: 3, productName: 'tv', price: 15000},
    {productId: 4, productName: 'macbook', price: 250000},
]

// checking if atleast one product price is greater than 100,000.

const IsGreaterThan100K = userCart.some((cartItem)=> cartItem.price > 100000 );
console.log(IsGreaterThan100K);
