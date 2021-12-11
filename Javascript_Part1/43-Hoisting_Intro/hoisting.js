// Hoisting


/* 1. Hoisting  by  function declaration */
/*
You see that function is called without any problem in function declaration.
In function declaration, function can be called anywhere.
*/

hello();

function hello() {
    console.log('Hello world'); 
}




/* 2. Hoisting by function expression */


/* Hoisting will not work in function expression. It shows the error
message as 'Uncaught ReferenceError: can't access lexical declaration 'hello2' before initialization'
on line 26.
 */
//hello2();

const hello2 = function() {
    console.log('Hello World2');
}

hello2(); // It works in line 26. function is called after the function expression.


console.log(hello3);
var hello3 = 'hello world';
console.log(hello3);