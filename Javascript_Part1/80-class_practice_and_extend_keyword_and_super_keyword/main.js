class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}


const animal1 = new Animal('Tom', 3);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());



// dog class

class Dog{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}


const dog1 = new Dog('Shiro', 2);
console.log(dog1);
console.log(dog1.eat());

/* Animal is parent class or base class. Cat is subclass or child class */

/* Animal can also be called super class */
class Cat extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    eat() {
        return `Modified eat- ${this.name} is eating`;
    }

    run() {
        return `${this.name} is running at ${this.speed} km/hr`;
    }

}

// Objects are also called instances.
const cat1 = new Cat('Duchess', 5, 45); // 45 is the cat speed
console.log(cat1);
console.log(cat1.eat());
console.log(cat1.run());



// Using getter and setter method
const animal2 = new Animal('Suki', 5)
console.log(animal2.eat());