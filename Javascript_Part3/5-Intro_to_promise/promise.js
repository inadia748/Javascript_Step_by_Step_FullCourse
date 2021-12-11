// Promise


// Promise is a value that we do not know what it is in the present but in the future, we can know what that value is.

/*
Look in this way,

suppose I promised you to make you a grilled chicken. 
So, the status of making the grilled chicken is pending.
The value needed is salt, spices, garlics and sauce. But we are uncertain if they are present or not. So, the values are undefined.

If the values for the grilled chicken is present, then we can  promise to make the grilled chicken, otherwise not.


In javascript, we can create promise for that.

*/


console.log('script starts!');
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// resolve and reject are callback functions.

// We created the promise
const friedRicePromise = new Promise((resolve, reject)=> {
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')) {
        resolve('fried rice'); // you can pass object or array or integer or string.
        // resolve({value:'friedrice'})
    } else {
        reject('could not do it!');
        // reject(new Error('something missing from bucket'));
    }
});


// consuming the promise
friedRicePromise.then((myfriedrice)=>{
    console.log('lets eat my ', myfriedrice);
}, 
(error)=>{console.log(error)}
);


// Another way of consuming the promise using then and catch
friedRicePromise.then(
    // jab promise resolve happens
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })





// Proof that promise is an asynchornous feature which is provided by the browsers.

// Remember javascript is a synchronous programming language. setTimeout, setInterval, promise are the asynchronous features that are provided by the browsers.

setTimeout(()=>{
    console.log("hello from settimeout")
},0);

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!");




