


function myFunc() {
    return 'a';
}

const ans = myFunc();
console.log(ans);


function myFunc2() {
    return 1;
}

const ans2 = myFunc2();
console.log(ans2);



function myFunc3() {
    return [1, 5, 8, 10, 22];
}

const ans3 = myFunc3();
console.log(ans3);



function myFunc4() {
    return {name: 'Nadia', age: 25};
}

const ans4 = myFunc4();
console.log(ans4);



// function returning function

function myFunction5() {
    function hello() {
        //console.log('Hello world');
        return 'Hello world!';
    }
    return hello;
}

const answer5 = myFunction5();
answer5();
console.log(answer5());



function myFunction6() {
    return function() {
        return 'hello world!';
    };
}

const answer6 = myFunction6();
console.log(answer6());




/* callback functions and function returning function are called higher order functions. */