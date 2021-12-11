const URL = "https://jsonplaceholder.typicode.com/posts";

/*
fetch(URL).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
});
*/


// You can do the above of then and catch in other way by using function.



/* Whenver you put 'async' on a function, it always returns a promise */

// The fetch() method in JavaScript is used to request to the server and load the information in the webpages.
async function getPosts() {
    // instead of 'then' in the above codes, we use 'await'. 'await' is used to see or wait whether the promise is rejected or resolved.
    const response = await fetch(URL);
    console.log(response);

    const data = await response.json();
    console.log(data);

    return data;
}

const returnValue = getPosts();
console.log(returnValue);


// to get in the json format

getPosts().then(myData => {
    console.log(myData);
}).catch(error=> {
    console.log('Inside Catch');
    console.log(error);
});





/*

// The whole code in fresh way:


console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";


const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}


// writing the above code in arrow functions:

// const getPosts = async () => {
//     const response = await fetch(URL);
//     if(!response.ok) {
//         throw new Error('Something went wrong');
//     }

//     const data = await response.json();
//     return data;
// }



getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");








*/