const user1 = {
    firstName: 'Nadia',
    age: 22,
    about:() => {
        console.log(this); // arrow function will give window object not the object user1.
        console.log(this.firstName, this.age); // undefined undefined
    }
}


/* arrow function does not have its own 'this'. It will give undefined.
It takes its 'this' from its surrounding, that is , it gives window object.

*/


user1.about();