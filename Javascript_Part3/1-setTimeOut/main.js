// synchronous programming vs asynchronous programming




/*1- Synchronous Programming

Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. 
So, basically a statement has to wait for the earlier statement to get executed.
Javascript is a single threaded event and a synchronous programming language.

*/


// synchronous programming is also called blocking code.

// In real life, you want a data from backend about user 's information or fetching information. It will not move to the next page where it can do other work. In a sense, it becomes single threaded event.


console.log('script start');

for (let i = 1; i < 10000; i++) {
    console.log('inside for loop');
}

console.log('script end');








// Since Javascript is a synchronous programing language, we can also make javascript asynchronous.


// asynchronous programming language


// setTimeout is a function which will take a function as a input and also time(after how many time(seconds or milliseconds or minutes or months or hours or days or years) it will use to run.)
// setTimeout is provided by the web browsers.


console.log('script start!');

function hello() {
    console.log('hello world');
}

setTimeout(hello, 1000);  // 1000 is 1000ms which is 1second. This will run after 1 second.


console.log('script ends!');


// Another way of setTimeout();
/* 

// 1

console.log('\n');

console.log('script starts!');
setTimeout(()=> {
    console.log('inside setTimeout');
}, 1000);
console.log('script ends!');


*/


 
/*

// 2.

console.log('script start');

setTimeout(()=> {
    console.log('inside setTimeout');
}, 0);

for (let i = 1; i < 100; i++) {
    console.log('........');
}

console.log('script ends');



*/


/*

// 3.

console.log('script start');

setTimeout(()=> {
    console.log('inside setTimeout');
}, 60000); // 1 minute, 1000 is 1second, 60000 is 1 minute

for (let i = 1; i < 100; i++) {
    console.log('........');
}

console.log('script ends'); 


*/




/*

// 4.

console.log('script start');

// setTimeout function
const id = setTimeout(()=> {
    console.log('inside setTimeout');
}, 1000);

for (let i = 1; i < 100; i++) {
    console.log('........');
}
console.log('settimeout id is ', id);
console.log('clearing timeout');
clearTimeout(id); // it tells the setTimeout function to stop working;
console.log('script ends');

*/


