// filter method always return boolean values like true or false

const numbers = [1, 3, 2, 6, 4, 8];

const isEven = function(number){
    return  number%2 === 0;
}


console.log(numbers.filter(isEven));

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


const isOdd = function(number) {
    return number%2 !== 0;
}
console.log(numbers.filter(isOdd));


const evenNumbers2 = numbers.filter(function(number){
    return number % 2 === 0;
});

console.log(evenNumbers2);


const evenNumbers3 = numbers.filter((number)=> {
    return number % 2 === 0;
});
console.log(evenNumbers3);