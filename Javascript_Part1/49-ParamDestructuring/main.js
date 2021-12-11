// Parameter Destructuring

// It is used in object and react js.

const person = {
    firstName: 'Nadia',
    gender: 'Female',
}


function getDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
}

getDetails(person);


// getDetails(obj) can be done in another way by parater destructuring.

function getDetails2({firstName, gender, age}) {
    console.log(firstName);
    console.log(gender);
    console.log(age); // it will be undefined, since it is age is not present in the person object.
}
getDetails2(person);