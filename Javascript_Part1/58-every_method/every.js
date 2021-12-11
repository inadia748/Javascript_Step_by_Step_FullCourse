// every method


const numbers = [2, 4, 6, 8, 10];

/* callback function ----> true/false (boolean) */
// every method ------> true/false (boolean)

const ans1 = numbers.every((number)=> number % 2 === 0);
console.log(ans1);



const numbers2 = [2, 4, 6, 10, 9];
const ans2 = numbers2.every((number)=>number%2 === 0);
console.log(ans2);



function isEven(number){
    return number % 2 === 0;
}

const numbers3 = [2, 4, 6];
const ans3 = numbers3.every(isEven);
console.log(ans3);





const userCart = [
    {productId: 1, productName: 'mobile', price: 12000},
    {productId: 2, productName: 'laptop', price: 22000},
    {productId: 3, productName: 'tv', price: 15000},
]



// check every price < 30000

const IspriceLessThan30K = userCart.every((cartItem)=> cartItem.price < 30000);
console.log(IspriceLessThan30K);