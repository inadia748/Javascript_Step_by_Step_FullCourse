function singHappyBirthday() {
    console.log(`Happy Birthday to you ......`);
}

singHappyBirthday();
singHappyBirthday();
singHappyBirthday();


function twoPlusFour() {
    console.log(2 + 4);
}
twoPlusFour(); // function call or function invoke or function run.


function oneplusone() {
    return 1 + 1;
}

console.log(oneplusone());

let returnedValue = oneplusone();
console.log(returnedValue);


function sumTwoNumbers(a, b) {
    return a + b;
};

console.log(sumTwoNumbers(8, 2));

let returnedSumOftwoNum = sumTwoNumbers(5, 9);
console.log(returnedSumOftwoNum);

function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}
console.log(sumThreeNumbers(1, 8, 3));
console.log(sumThreeNumbers(1, 8, )); // it will NaN, which is not a number. The third argument is missing thats why it is NaN.





function isEven(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }

    // if else can be written another way.
    /*
        return num % 2 === 0;
    */
}

console.log(isEven(5));
console.log(isEven(8));


function firstChar(anyString) {
    return anyString[0];
}

console.log(firstChar('zbc'));



function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return `${target} is found in ${i} index of the array`;
        }
    }
    return -1;
}


const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 8);
console.log(ans);


