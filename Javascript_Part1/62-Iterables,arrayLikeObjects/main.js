// iterables
/* string, array are iterable because they can be looped by 'for of loop' */
// objects are not iterables

const firstName = 'Nadia';

for(let char of firstName){
    console.log(char);
}


const items = ['item1', 'item2', 'item3', 'item4'];

for (let item of items) {
    console.log(item);
}



// object are not iterables
const users = {'key1':'value1', 'key2': 'value2'};

/*

for (let user of users) {
    console.log(user); // It will give error because objects are not iterable
}

*/


// Array like Object
/* Array Like Object have length property and also which can be a
accessed by using a index . example:- string.   */


const Name = 'Nadia';
console.log(Name.length);
console.log(Name[0]);
console.log(Name[2]);






