// new keyword


function createUserExample(firstName, age) {
    console.log(this);
    this.firstName = firstName;
    this.age = age;
}

const userA = new createUserExample('Nadia', 6);
console.log(userA);

createUserExample.prototype.about = function() {
    console.log(`${this.firstName} is ${this.age} years old`)
}

userA.about();

/* new keyword is doing these works:
a) First, it will be creating an empty object. this = {}
b)  return this ---> {} , which is an empty object
 */


/* You noticed in the previous codes in 75-What is prototype? you wrote in a function a code,
const user = Object.create(createUser.prototype). With this 'new' keyword, you are not required
to write const user = Object.create(createUser.prototype) in the function. Inside, 
you can write const user1 = new createUser('Nadia', 22); const user2 = new createUser('John', 33) etc.

It made a lot easier.

*/



/* Improvising our previous codes */


// new keyword
// 1.) this = {}
// 2.) return {} 



// createUser(firstName, lastName, email, age, address) is known as a constructor function.
// constructor function starts with capital letter
function CreateUser(firstName, lastName, email, age, address){
 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    
    return this;
}

const user1 = new CreateUser('Nadia', 'Islam', 'nadia@gmail.com', 23, "my address");
const user2 = new CreateUser('Sarah', 'Sarwar', 'sarah@gmail.com', 19, "1234, Mugda-Dhaka");
const user3 = new CreateUser('John', 'Doe', 'john@gmail.com', 15, "Manhantan, New York");

console.log(CreateUser.prototype); 

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function() {
    return this.age > 18;
}

CreateUser.prototype.sing = function(song) {
    return song;
}


console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

console.log(user1.is18());
console.log(user1.is18());
console.log(user1.is18());

console.log(user1.sing('aah ah aaa'));
console.log(user2.sing('ja aaa jaja ja'));
console.log(user3.sing('lalala llaa'));