// 1. promise.resolve
/* promise.resolve can take a value and return a  promise */

const myPromise1 = Promise.resolve(5);

// one way of promise.resolve()
myPromise1.then((value)=> {
    console.log(value);
});


// another way of promise.resolve

Promise.resolve(10).then((value)=> {
    console.log(value);
});

/* then() always returns promise */





// 2. Promise Chaining

function myPromise2(){
    return new Promise((resolve, reject)=>{
      resolve("foo");
    })
  }
  
  myPromise2()
    .then((value)=>{
      console.log(value);
      value += "bar";
      return value
    })
    .then((value) =>{
      console.log(value);
      value += "baaz";
      return value;
    })
    .then(value=>{
      console.log(value);
    })
  