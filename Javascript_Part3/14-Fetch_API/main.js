// fetch 

const URL = "https://jsonplaceholder.typicode.com/posts";

const whatItisThis = fetch(URL);

console.log(whatItisThis);

fetch(URL).then(response =>{

    console.log(response);
    // calling the json method
    //console.log(response.json()); // it will also return a promise.

    return response.json();
}).then(data => {
    console.log(data);
});


/* You can also write,

const URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL).then(abc =>{
    console.log(abc);
    // calling the json method
    //console.log(abc.json()); // it will also return a promise.

    return abc.json();
}).then(data => {
    console.log(data);
});

*/









/*

// you make an error in the url, just put sss at the end.

const URL = "https://jsonplaceholder.typicode.com/postssss";

fetch(URL).then(response=>{
    return response.json();
}).then(data => {
    console.log(data);
}). catch(error => {
    console.log('inside catch');
    console.log(error);
})



// we notice that catch(error=>{
    -------
    -------
}); it does not work. Remember, 'catch' does not work in fetchAPI. 'then' works in fetchAPI.


Inorder for the 'catch' to work, you write to write the code like this, see below.


*/




/*

const URL = "https://jsonplaceholder.typicode.com/postssss";

// Here, the 'catch' works, because in the url there is an error, When it goes through 'then(response)' it goes through the if else
statement, when it goes through the else statement, it throws an error and then goes to the 'catch(error)'

fetch(URL).then(response =>{
    if(response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
}).then(data => {
    console.log(data);
}). catch(error => {
    console.log('inside catch');
    console.log(error);
})


*/



// GET is used to read data from the server.
// POST is used to create data on the server.




/* All these times, you were reading the data.  Now, you have to put data in the server*/

fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })


