/* important array methods are:

1. forEach
2. map
3. filter
4. reduce

*/



const numbers = [4, 5, 2, 8, 10];
const numbersMultiplyBy2 = [];

function multiplyBy2(number, index) {
    console.log("index is ", index);
    console.log(number * 2);
    
}

multiplyBy2(numbers[0], 0);
multiplyBy2(numbers[1], 1);

for (let i = 0; i < numbers.length; i++) {
    multiplyBy2(numbers[i], i);
}


// forEach method

numbers.forEach(multiplyBy2);

// or 
numbers.forEach(function(number,index) {
    console.log(`index is ${index} number is ${number}`);
});


numbers.forEach(function(number, index, arr){
    console.log(number*2, index, arr);
});


const users = [
    {firstName: 'Nadia', age: 25},
    {firstName: 'Doe', age: 23},
    {firstName: 'Sadi', age: 28},
];

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach((user)=>{
    console.log(user.firstName);
});

// Parameter Destructuring
users.forEach(function({firstName}){
    console.log(firstName);
});

users.forEach(function({firstName, age}){
    console.log(firstName);
    console.log(age);
});

