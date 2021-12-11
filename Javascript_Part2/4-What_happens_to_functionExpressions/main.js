console.log(this);
console.log(window);
console.log(myFunction);


console.log(fullName);



// Function Expressions

var myFunction = function() {
    console.log('This is my function');
}

console.log(myFunction);

var firstName = 'Nadia';
var lastName = 'Islam';
var fullName = firstName + lastName;
console.log(fullName);








/*
let us analyse the code of what happens to function expression,

console.log(myFunction);    // ------------->1

var myFunction = function() {           -------------> 2
    console.log('this is my function');
}

console.log(myFunction); //  --------------------> 3

Here in compilation phase, it will check syntax error and all.

myFunction is in global scope.

Global Execution Context is created.

Global Execution Context is stored in stack.

Global Execution Context has 2 phases, they are creation phase and code execution.


___2)Code Execution_____________   1)_Creation Phase_________
|                               |                             |
|                               |                                            ----> window object is already provided by the browsers.
|                               |         Global Scope or memory  |           ----->this references to the window object.
|  1) myFunction = undefined    |              |                  |              -----> we know, variable starting with var in creation phase is always undefined,
                                               |                  |                   since, myFunction is a function expression and it stored in a variable starting with 'var'. 
                                               |                  |                    It will be treated as a variable. Since, it starts with 'var', it is put as undefined.
|                               |              v                  |
|   2) myFunction = {           |          window object: {}      |
                                |           this: {}              |
       }                        |           myFunction = {
                                |                 -------------
    3) console.log(myFunction)  |                 ------------
                                |           }                     |
|                               |                                 |
|                               |            
|                               |            
|                               |             
|
|_______________________ _____ _|____________________________  |

*/