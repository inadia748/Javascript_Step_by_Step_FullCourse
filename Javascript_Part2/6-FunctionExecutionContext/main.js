/* Till now we were learning about global execution context about var, let, const, function declartion and function expression. */


let foo = 'foo';  // -----------> 1
console.log(foo);    // -------------> 2
function getFullName(firstName, lastName) {   //-------->3
    console.log(arguments);    // ------------> 4
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
    let myVar = 'var inside function'; // ----------> 5
    console.log(myVar); // -------------> 6
    const fullName = firstName + " " + lastName; // ----------> 7
    return fullName; // ------------> 8
}

const personName = getFullName('Nadia', 'Islam'); // -----------> 9
console.log(personName); // --------------> 10



/*
Analysing the code:

1) Creation Phase

    window object= {}
    foo = uninitialized
    food = 'foo'
    function getFullName(firstName, lastName) {
        _----------
        ----------
        -----------
    }
    arguments = ('Nadia', 'Islam);
    myVar = uninitialized
    myVar = 'var inside func;
    fullName = uninitialized
    fullName = firstName + lastName


2) Code Execution Phase

    1--->  foo
    2----> console.log(foo)
    3-------> function getFullName(fname, lname) {
        -------
        -----
        ----
    } // It is function execution context. It is stored in array like object. 
    function arguments like firstName and lastName, myVar and fullName are stored.

   
*/