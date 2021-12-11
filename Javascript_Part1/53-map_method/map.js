// map method returns a array.

const numbers = [3, 4, 6, 1, 8];

const square = function(number) {
    return number * number;
}


const squareNumber = numbers.map(square);

console.log(squareNumber);

const square2 = numbers.map(function(number){
    return number * number;
});

console.log(square2);

const square3 = numbers.map((number, index)=>{
    return number*number;
    // return `index: ${number * number} `;
});

console.log(square3);


const users = [
    {firstName: 'Nadia', age: 22},
    {firstName: 'Sad', age: 25},
    {firstName: 'Dia', age: 26},
];

const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);


const userNameParameter = users.map(({firstName})=> {
    return firstName;
})

const userAgeParameter = users.map(({age})=> {
    return age;
})

console.log(userAgeParameter);

