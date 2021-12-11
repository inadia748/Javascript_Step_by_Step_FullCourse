// XHR

const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();
console.log(xhr);

// 1. Now to go to google and type 'json typicode'.

/*
JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

*/


// Step 1, use open method, open method will take requests like 'put', 'post', 'patch ' or 'delete and the url

/* XHR works asynchonously */

console.log(xhr.readyState);
xhr.open('GET', URL);
console.log(xhr.readyState);


/*

xhr.onreadystatechange = function() {
    console.log(xhr);
    console.log(xhr.readyState);

    if(xhr.readyState === 4) {
        console.log(xhr.response, typeof(xhr.response));

        // json is a string. 

        const response = xhr.response;
        const data = JSON.parse(response); // converting string to object
        console.log(data, typeof(data));
    }
}


*/

// The above code which is commented out can be written in a shorter way.


// The XMLHttpRequestEventTarget.onload is the function called when an XMLHttpRequest transaction completes successfully.
// onload only shows result when the ready state is 4.

xhr.onload = function() {
    console.log(xhr.readyState);

    const response = xhr.response;
    console.log(response);
    console.log(typeof(response)); // this response is a json which is a string.

    const data = JSON.parse(response); // converting the json string to json object.
    console.log(data);
    console.log(typeof(data));
}


xhr.send();


