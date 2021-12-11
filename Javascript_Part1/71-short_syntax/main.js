// using short syntax



/* using short syntax on 'about' method. */
const user1 = {
    firstName: 'Nadia',
    age: 22, 
    about() {
        console.log(this.firstName, this.age);
    }
}

user1.about();

