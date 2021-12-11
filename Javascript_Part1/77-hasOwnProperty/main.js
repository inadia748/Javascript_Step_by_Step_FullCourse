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


// getting the keys from the object

for (let key in user1) {
    console.log(key); 
}    // Here, you notice that you have also got the prototype functions like is18, about, sing along with the object keys firstname, lastname, age, address, email.




// To only get keys not the prototype functions
// user1.hasOwnProperty(key) will give boolean values.
for (let key in user1) {
   if(user1.hasOwnProperty(key)) {
       console.log(key);
   }
}