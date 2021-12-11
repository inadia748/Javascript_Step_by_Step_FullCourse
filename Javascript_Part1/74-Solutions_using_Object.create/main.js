


const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

const obj2 = {
    key3: 'value3',
};

obj2.key4 = 'value4';

console.log(obj2.key3);
console.log(obj2.key1); // undefined


// Our aim is first go to obj2 to find key1, if key1 is not present in obj2, Javascript by itself must go to obj1 to find key1.

/* There is one more way to create an empty object  */

/* {} is an empty object */

const obj3 = Object.create(obj1); 
console.log(obj3); // {}, which is an empty object

obj3.key5 = 'value5';

console.log(obj3);

console.log(obj3.key1); // value1, where as in console.log(obj2.key1), it gives us undefined.
/* We achieved our aim, which is to see if key1 is present in obj3, otherwise it will go to obj1 to check for key1 */



const obj4 = Object.create(obj1);
console.log(obj4); // { }, an empty object

obj4.key1 = 'Unique key for obj4';
obj4.key2 = 'Just a value for obj4';

console.log(obj4.key1); // Unique Key, It will check for whether key1 is present in obj4 or not. In this case, key1 is present and the value is 'Unique key'. Otherwise it would look for obj1 and give us the output, 'value1'.
console.log(obj4.key2);


// The working behind this
/* How javascript is giving some values that obj3 and obj4 do not originally have the 'key1'.
 */
// This is because we have refenced them by doing 'Object.create(obj1)', so when you look at the console.log(obj3) and console.log(obj4);
// You will see <prototype> or __proto__. When Javascript cannot find its specific item in the object, it will look at its <prototype> or __ proto__ . In that case, Javascript finds obj1 is referenced to it 's <prototype> because we did Object.create(obj1).

// In Ecmascript, <prototype> or __proto__ or [[prototype]] are the same. 

// Take Note: <prototype> or __proto__ or [[prototype]] is the same in Object.create('object-name'), but these are completely different from prototype.
 
console.log(obj3);
console.log(obj4);



console.log(obj3.__proto__);



// So, Basically Object.create(some object name) will create an empty object and also a <prototype>, to create a reference to the object name.







function createUser(firstName, lastName, email, age, address){
 
    const user = Object.create(userMethods);  // create an empty object {} and referencing it them to userMethods.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    user.is18 = userMethods.is18;
    user.singAsong = userMethods.singAsong;
    return user;
}


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


// we notice that 'about' function in not present in 'createUser'. so, we set const user = Object.creat(userMethods);
// This will create an empty object {}, as well as <prototype> for 'userMethods'. Now, when we console.log(user1), we see its proto refenced to 'userMethods'.
// It will also give us the function 'about' which is not present for user1 to be access it from its <prototype>, 'userMethods'.

console.log(user1);
console.log(user1.about());


// Similary, about function is not present for user2 and user3 but we can still access them due to Object.create(userMethods).
console.log(user2);
console.log(user2.about());


console.log(user3);
console.log(user3.about());



// So, even if functions like is18 and singASong are not present in function createUser. Due to Object.create(userMethods), user1, user2 and user3 can still access is18 and singASong functions.
// <prototype> is a reference of the object. like 'userMethods' is a reference for user object.







