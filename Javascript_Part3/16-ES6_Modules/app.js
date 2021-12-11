//const firstName = 'Nadia'; put this in utils>fname.js
//const age = 22; put this in utils> age.js




// Generally, developers write different functions, classes or objects  in different files.


import { firstName, lastName as lname } from './utils/fname.js';
import {age} from './utils/age.js';
import Person from './utils/person.js';


console.log(firstName, age, lname);


const person = new Person('John', 'Doe', 22);
console.log(person);
person.info();