// And Or operator



let firstName = 'Nadia';
let age = 22;


if (firstName[0] === 'N') {
    console.log('Your name starts with N');
}


if (age > 18) {
    console.log('You are above 18');
}






// Using And Operator


if (firstName[0] === 'N' && age > 18) {
    console.log('Name starts with N and age is above 18');
} else {
    console.log("Name  do not starts with 'N' and age is not above 18");
}





age = 5;



// Using Or operator

if (firstName[0] === 'N' || age > 18) {
    console.log("Either the name starts with 'N' or the age is above 18");
} else {
    console.log('None of the name and age matches the condition.');
}