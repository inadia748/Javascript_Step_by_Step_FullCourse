// Arrow Functions


const singHappyBirthday = () => {
    console.log('Happy Birthday to you ......');
}

singHappyBirthday();


const sumThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(sumThreeNumbers(5, 2, 3));


const isEven = (num) => {
    return num % 2 === 0;
}

console.log(isEven(5));
console.log(isEven(8));


const firstChar = (anyString) => {
    return anyString[0];
}

console.log(firstChar('This is just a code'));


const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findTarget([1, 3, 5, 90, 10], 10));