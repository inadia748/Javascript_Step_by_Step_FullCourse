class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1 = new Person('Nadia', 'Islam', 23);
console.log(person1);
console.log(person1.fullName());


console.log(person1.fullName);



// Using getter and setter

class Child {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

   get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setName(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    set fullName(fullname) {
        //fullname.split(" "); // [Freddie, Curie];
        const [firstName, lastName] = fullname.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const child1 = new Child('Nadia', 'Ansari', 3);
console.log(child1.fullName);


// Changing the values of firstName and lastname of an Class name 'Child'
child1.setName('John', 'Doe');
console.log(child1);
console.log(child1.firstName);
console.log(child1.lastName);
console.log(child1.fullName);

child1.firstName = 'Anne';
child1.lastName = 'Mercury';
console.log(child1.fullName);
console.log(child1);


child1.fullName = 'Freddie Curie';
console.log(child1);

