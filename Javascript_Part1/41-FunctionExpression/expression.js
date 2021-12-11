// function Expression


const singHappyBirthDay = function() {
    console.log('Happy Birthday to you ....');
}

singHappyBirthDay();


const sumThreeNumbers = function (num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumThreeNumbers(8, 1, 3));



const isEven = function(num) {
    return num % 2 === 0;
}

console.log(isEven(8));
console.log(isEven(5));


const firstChar = function(anyString) {
    return anyString[0];
}

console.log(firstChar('this is a code'));


const findTarget = function(array, target) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findTarget([1, 3, 5, 90], 5));