const user1 = {
    firstName: 'Nadia',
    age: 23,
    about: function() {
        console.log(this.firstName, this.age);
    },
}


user1.about();

// Do not do this mistake
const myFunc = user1.about;
myFunc(); // undefined undefined,  you did not call the method, you have to put user1.about(), inorder to be called.



/* Inorder for myFunc() to work, write it like this */
/* const myFunc = user1.about.bind(user1) */