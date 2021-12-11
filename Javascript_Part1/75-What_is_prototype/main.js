function hello123434(name) {
    console.log('hello  to ', name);
}

hello123434('Nadia');


/* In Javascript, 
a function is a combination of object and a function.
javascript function ===> function + object.
 */

console.log(hello123434.name); // gives you name of the function


// You can add your own property

hello123434.myOwnProperty = 'very unique value';
console.log(hello123434);
console.log(hello123434.myOwnProperty);


// function provides more useful properties.

/* function provides free space that it is known as 'prototype'. This 'prototype' is not same in Object.create() like <prototype>, 
this 'prototype' in function is a free space in javascript, this free space give us empty object {}. */

console.log(hello123434.prototype); // {}

// Only function provides prototype property.

if(hello123434.prototype) {
    console.log('Prototype is present');
} else {
    console.log('Prototype is not present');
}








const hello2 = {key1: 'value1'};

// checking if an object has prototype property

if(hello2.prototype) {
    console.log('Prototype is present in an object');
} else {
    console.log('Prototype is not present in an object');
}

// checking if array has prototype property
const hello3 = ['value1', 'key1'];

if(hello3.prototype) {
    console.log('Prototype is present in an array');
} else {
    console.log('Prototype is not present in an array');
}



// So, only functions can have prototype properties

// adding some properties to hello123434. abc, xyz , sing and talk are the properties.
hello123434.prototype.abc = 'abc';
hello123434.prototype.xyz = 'xyz';
hello123434.prototype.sing = function(song) {
    return song;
}
hello123434.prototype.talk = function() {
    return 'chirp';
}
console.log(hello123434.prototype);
console.log(hello123434.prototype.sing('Ah ah la la ah'));
console.log(hello123434.prototype.talk());








// Using prototype  in functions


function createUser(firstName, lastName, email, age, address){
 
    const user = Object.create(createUser.prototype);  // it will reference to itself
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    return user;
}

const user1 = createUser('Nadia', 'Islam', 'nadia@gmail.com', 23, "my address");
const user2 = createUser('Sarah', 'Sarwar', 'sarah@gmail.com', 19, "1234, Mugda-Dhaka");
const user3 = createUser('John', 'Doe', 'john@gmail.com', 15, "Manhantan, New York");

console.log(createUser.prototype); 

createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function() {
    return this.age > 18;
}

createUser.prototype.sing = function(song) {
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
