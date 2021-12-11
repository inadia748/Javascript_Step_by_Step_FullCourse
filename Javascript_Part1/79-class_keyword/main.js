// 2015 is ES6

// class keyword

/* Earlier we used create functions to create multiple objects,
store methods in different objects, using Object.create, using prototype and then
new keyword. It is still tedious in some ways. We will use a another concept
which will make our work easier. We will use a keyword 'class' */



class CreateUser{
    constructor(firstName, lastName, email, age, address) {
        console.log('Constructor is called');
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }

    is18() {
        return this.age >= 18;
    }

    sing() {
        return 'lalal lalal aaa la';
    }

    func(a) {
        console.log(a);
    }
}


// Whenever you use a new keyword here, a constructor will be called.
// Also class constructor cannot be invoked without using 'new' keyword.

const user1 = new CreateUser('Nadia', 'Islam', 'nadia@gmail.com', 23, "my address");
const user2 = new CreateUser('Sarah', 'Sarwar', 'sarah@gmail.com', 19, "1234, Mugda-Dhaka");
const user3 = new CreateUser('John', 'Doe', 'john@gmail.com', 15, "Manhantan, New York");
/* The constructor is called three times, 'Constructor is called' */


console.log(user1.firstName);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

user1.func(2);

console.log(Object.getPrototypeOf(user1));
