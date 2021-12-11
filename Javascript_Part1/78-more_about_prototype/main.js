let numbers = [1,2, 3];
console.log(numbers);

let numbers2 = new Array(3, 383, 94);
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));
console.log(Object.getPrototypeOf(numbers2));

/* Internally, Javascript create an array using 
a constructor like let number = new Array(1, 2, 3);

Where does array gets its methods like push, pop, find etc?
Array gets its method from its own prototype which is set by the javascript.
see, console.log(Array.prototype);
 */


function hello() {
    console.log('hello');
}

// prototype
console.log(hello.prototype); // it is an empty object


// setting the prototype to an array.
hello.prototype = [];
console.log(hello.prototype); // it is an empty array.
hello.prototype.push(1);
console.log(hello.prototype);

