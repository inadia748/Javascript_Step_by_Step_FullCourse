const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest() {
    return new Promise(function(resolve, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error('Something went wrong'));
            }
        }

        xhr.onerror = function() {
            reject(new Error('Something Went wrong in Network'));
        }

        xhr.send();

    }) 
    
} 


const whatitis = sendRequest('GET', URL);
console.log(whatitis);

sendRequest('GET', URL).then( response => {
    const data = JSON.parse(response);
    //console.log(data);
    return data;
})
.then(data => {
    console.log(data);
    const id = data[3].id;
    return id;
})
.then((id)=> {
    console.log(id);
    const url = `${URL}/${id}`;
    console.log(url);
    return sendRequest('GET', url);
})
.then(newResponse => {
    console.log(newResponse, typeof(newResponse));
    const newData = JSON.parse(newResponse);
    console.log(newData);
})
.catch(error => {
    console.log(error);
})