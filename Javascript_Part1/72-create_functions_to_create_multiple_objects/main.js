const user1 = {
    firstName: 'Nadia',
    lastName: 'Islam',
    email: 'nadia@testing.com',
    age: 22, 
    address: '1234, 6B, 382, Dhaka',
    

    about() {
        return `${this.firstName}, ${this.lastName}`;
    },

    is18() {
        return this.age >= 18;
    },

};

const aboutUser1 = user1.about();
console.log(aboutUser1);










/* Now imagine if you have to create another objects like
user2, user3, user4, .... etc. It will become very tedious.
We will use a function that creates an object and returns them.
*/




// function - that creates an object, add key-value pairs and then returns the object.


function createUser(firstName, lastName, email, age, address) {
    
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    };

    user.is18 = function() {
        return this.age >= 18;
    };

    return user;
}



const user2 = createUser('Sarah', 'Sarwar', 'sarah@testing.com', 27, '23 Street Bolevard, Dhaka');
console.log(user2);
const user3 = createUser('Anna', 'Clemson', 'ana@testing.com', 15, '248 Street Perdan, Paris');
console.log(user3);
const user4 = createUser('John', 'Doe', 'john@testing.com', 35, '107 Street Manhattan, Washington');
console.log(user4);

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
console.log(user2.is18());

console.log(user3.about());
console.log(user3.is18());


console.log(user4.about());
console.log(user4.is18());