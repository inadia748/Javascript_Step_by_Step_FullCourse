/*
We will analyse the code below:
console.log(firstname); ---> 1
let firstname = 'Nadia'; ---------> 2
console.log(firstName); ------> 3


___2)Code Execution_____________ ___________ ____1)_Creation Phase_________
|                                           |                             |
|    1) It will give error                  |       window()              |              
|       because it is initialized.          |   firstname: uninitialized  |        ---> variable starting with 'let' or 'const' is uninitialized, Whereas, variable starting with 'var' gives us undefined.
|                                           |   firstname = 'Nadia'       |
|    2) it will set                         |                             |
|       firstname is 'Nadia'                |                             |
|                                           |                             |
|    3) console.log(firstname);             |                             |  
|       inorder for it to                                                 |
        console.log(firstname)                                            |
        You have remove the                 |                             |
        error where it is uninitialize;     |                             |
|_______________________ _____ _ _________  |_____________________________|







*/


// let and const are hoisted.

console.log(firstname);  // Uncaught ReferenceError: can't access lexical declaration 'firstname' before initialization. This is because the variable is present but you did not initialize them. It is in temporal dead zone.
// The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable
let firstname = 'Nadia'; // it came out of temporal dead zone because it is initialized.
console.log(firstName);


console.log(lastname);  // Uncaught ReferenceError: can't access lexical declaration 'firstname' before initialization. This is because the variable is present but you did not initialize them.
const lastname = 'Islam';
console.log(lastname); 