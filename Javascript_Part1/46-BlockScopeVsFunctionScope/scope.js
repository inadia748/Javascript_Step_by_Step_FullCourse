// block scope vs function scope

// let and const are block scope

// var is function scope



/* Block1 */

{
    let firstName = 'Nadia'; // or const firstName = 'Nadia';
    console.log(firstName); // firstName is accessed in this block but it cannot be accessed outside the block

    
}

//console.log(firstName);   // it cannot be accessed outside the block scope.


/* Block2 */
{
    let firstName = 'Sadi';  // or const firstName = 'Sadi'
    console.log(firstName);
}





/* Function Scope */

{
    var firstName = 'Jeha'; // it can be accessed outside the block.
    console.log(firstName);
}

console.log(firstName);

{
    console.log(firstName);
}





if(true) {
    let Name = 'John';
    console.log(Name);
}

//console.log(Name); // Name is not defined because it is block scoped.





function myApp() {
    if(true) {
        var firstnme = 'Doe';
        console.log(firstnme);
    }
    console.log(firstnme);
}

myApp();