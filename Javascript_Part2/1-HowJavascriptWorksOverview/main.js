// compilation
// code excution

// why compilation

// How javascript code executes




// What is global exceutionn context?
// What is local execution context?
// closures?


/* Interpreter first reads the code then execute them. */

/*
First step of the Javascript is to compile. Compilation is when the machine reads all the code at once and then executes them afterward.
The next step of the Javascript after compilation is to do execution.
So, the first phase is compilation phase. Three steps of compilation phases are tokenizing/lexing, parsing and code generation.

Our codes are first broken into small chunks of codes, these chunks are called tokens.
These tokens are then organised in AST(Abstract Syntax Tree), then the code genrator generates te code from AST.


Why the codes needed to be compiled?
1)There needs to be early error checking like syntax error etc. It needs to be checked before the code execution.
2) Determining scopes for variables, There needs to see variable of which scope the variables belong to. Does the variable belongs to global scope or the local scope or the function scope etc.

You are parsing through them that is how you catch syntax error, reference error etc.


The second step is code execution phase. In Javascript, the code is executed inside execution context.
To execute a code, an execution context is created. For that, a global execution context is created.

Global execution context also have 2 phases, they are:
1) Creation phase
2) Code Execution phase is line by line code execution.


firstName = 'undefined', because the variable is not yet created. and you are console.log() it.


In creation phase, variable starting with 'var' is undefined. Also, window object is already in creation phase. function declaration if present will be definetly in creation phase.




___2)Code Execution_____________   1)_Creation Phase_________
|                               |                             |
| 1. window                     |   window: {}                |  
| 2. window                     |  firstName = 'undefinded'   |
| 3. firstName =undefined       |  this : window              |
| 4. firstName = Nadia          |   firstName = 'Nadia        |
| 5. console.og(firstName)      |                             |
|                               |                             |
|                               |                             |
|                               |                             |
|                               |                             |
|                               |                             |
|                               |                             |
|_______________________ ______|____________________________ |

Is Javascript is a synchronous programing language?
Javascript is itself a synchronous programming language. When 1st line of code is not executed, till then 2nd line of code will not be executed and so on.
This is synchronous programming language. It is single threaded.

How come Javascript have aysnchornous feature?
Asyhncrounous feature is provided to Javascript by the browser.

*/


console.log(this); // window object  --------> 1
console.log(window); // window object ----------> 2
console.log(firstname); // undefined. -----------> 3
var firstname = 'Nadia';  // ----------------> 4
console.log(firstname); // Nadia -------------> 5


/* How does Javascript executes?
When parsing through the code, In our case, there is a variable named 'firstname'.
 Then checks if that variable is a function or not. If that variable is not a function, that variable belongs to global scope.
 
*/



