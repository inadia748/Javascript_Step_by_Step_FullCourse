// optional chaining

const user = {
    firstName: 'Nadia',
    address: {houseNumber:'1234'},
};


console.log(user.firstName);
console.log(user.address);
console.log(user.address.houseNumber);


/*  The optional chaining ?. is a safe way to access nested object properties, 
even if an intermediate property doesn’t exist */


console.log(user.address?.houseNumber); // In user, if address exists, give me the houseNumber


console.log(user?.firstName); // If user exists? give me firstName
console.log(user?.address?.houseNumber); // If user exists? then check if address exists? if it fullfills the conditions, give the houseNumber.





/*

let user;

console.log(user?.firstName); // If user exists? give me firstName
console.log(user?.address?.houseNumber); // If user exists? then check if address exists? if it fullfills the conditions, give the houseNumber.

*/



