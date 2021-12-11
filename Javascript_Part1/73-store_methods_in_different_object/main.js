function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.singAsong = userMethods.singAsong;
    return user;
}





// Storing methods in different objects
/* As the number of methods increases when a using a method, you 
want to store those methods in different objects. */



const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },

    singAsong: function(song) {
        return song;
    },



}


const user1 = createUser('Nadia', 'Islam', 'nadia@gmail.com', 23, "my address");
const user2 = createUser('Sarah', 'Sarwar', 'sarah@gmail.com', 19, "1234, Mugda-Dhaka");
const user3 = createUser('John', 'Doe', 'john@gmail.com', 17, "Manhantan, New York");
console.log(user1.about());
console.log(user3.about());
console.log(user2.singAsong('Roaar roar roo roh roh'));