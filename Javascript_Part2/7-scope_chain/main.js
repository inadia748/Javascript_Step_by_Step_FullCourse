// lexical environment, scope chain

const lastName = 'Islam'; // global scope

const printName = function() {
    const firstName = 'Nadia'; // function 's local scope
    console.log(firstName);
    console.log(lastName);
}

printName();