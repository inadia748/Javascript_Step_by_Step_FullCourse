console.log(this);      // ---------> 1
console.log(window);    // ----------> 2
console.log(myFunction); // ---------> 3
console.log(fullName);   // -----------> 4


function myFunction() {                        // ----------> 5
    console.log('This is my function');
}


var firstName = 'Nadia';        // -------------> 6
var lastName = 'Islam';         // --------------> 7
var fullName = firstName + lastName; // -----------> 8
console.log(fullName);               // -----------> 9









/*



__________________________________________
|           Global Scope                  |
|                                         |
|   Scopes in Order:                      |
|                                         |
|  1) firstName                           |
|                                         |                                      
|  2) lastName                            |
|                                         |
|  3) fullName                            |
|                                         |
|  4) myFunction()                        |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|                                         |
|_________________________________________|

// In creation phase, variable starting with 'var' always gives us undefined.



Global Execution Context is stored in the form of stack:


___2)Code Execution_____________1)_Creation Phase_________
|                          |                             |
| 1-window                 |   window: {}                |  
| 2-window                 |   window: {}                |
| 3- myFunction() {        |
    console.log('......')  |
}                          |   firstName: undefined      |
|  4-fullName:undefined    |   lastName: undefined       |
|                          |   fullName: undefined       |
|  5- See 3.               |                             |
|                          |   myFunction()              |
|  6-firstName = 'Nadia'   |                             |
|                          |                             |
|  7-lastName = 'Islam'    |                             |
|                          |                             |
|  8-fullName = Nadia Islam |                             |
|                          |                             |
|_ 9-console.log(fullName)_|____________________________ |


We know all the global execution context is stored in the form of stack.
So, whenever one line of code is executed, the execution context in the stack is popped out.












*/