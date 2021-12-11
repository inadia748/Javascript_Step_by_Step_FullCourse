// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }

    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}



const person1 = new Person('Nadia', "Islam", 23);
console.log(person1.eat());

// Our aim is to call the eat method of the class without using an object instance like person1.eat();
// To achieve that aim, we use the keyword 'static'. It is only used in class.


//person1.classInfo(); // it will give you an error because it has static and it is also called with an object instance.


// Now, calling using class instance. Object cannot access classInfo and desc as they are static. Static can only be accessed by class.
const ans = Person.classInfo();
console.log(ans);
console.log(Person.classInfo());

console.log(Person.desc);
