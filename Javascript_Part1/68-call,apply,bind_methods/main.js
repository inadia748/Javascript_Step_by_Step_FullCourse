


const user1 = {
    firstName: 'Nadia',
    age: 24,

    about: function(){
        console.log(`${this.firstName} 's age is ${this.age} years oldl`);
    },

    action: function(hobby, food) {
        console.log(`${this.firstName}, ${this.age} with ${hobby} and ${food}`);
    }
}


const user2 = {
    firstName: 'Omar',
    age: 18,
}

user1.about();
user1.action('watch a movie', 'popcorn');



/* Call is also function borrowing */
// user2 will borrow the 'about' method from user1. Using Call method
user1.about.call(user2); // 'this' keyword will point to user2 object.
user1.about.call(); // undefined 's age is undefined years old. ---> 'this' keyword is not pointing to anything in object2
user1.about.call(user2, 'football', 'sandwich');





const user3 = {
    firstName: 'Sarah',
    age: 26,
}

/* apply is like call method */
user1.action.apply(user3, ['design', 'chocolates']);


const user4 = {
    firstName: 'John',
    age: 30,
}


function LikesToEat(food) {
    console.log(this.firstName, this.age, food);
}

/* bind, they return a function */
const funcEats = LikesToEat.bind(user4, 'watermelon');
funcEats();

const user4Action = user1.action.bind(user4, 'dogeball', 'pizza');
user4Action();


let car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}


let myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota

