function myFunc() {
    return 1;
}

const ans = myFunc();
console.log(ans);

function outerFunction() {
    function innerFunction() {
        console.log('hello world');
    }
    return innerFunction;
}

const ans2 = outerFunction();
console.log(ans2);
ans2();


function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans3 = printFullName('Nadia', 'Islam');
console.log(ans3);
ans3();