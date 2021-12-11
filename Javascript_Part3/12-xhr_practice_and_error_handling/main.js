const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open('GET', URL);

xhr.onload = () => {

    if(xhr.status >= 200 && xhr.status < 300) {
         const data = JSON.parse(xhr.response);
         console.log(data);

         // you want an id for the 4th post
         //const id = data[3];
         const id = data[3].id;
         console.log(id);

         const xhr2 = new XMLHttpRequest();
         const URL2 = `${URL}/${id}`;
         console.log(URL2);

         xhr2.open('GET', URL2);
         xhr2.onload = () => {
             const data2 = JSON.parse(xhr2.response);
             console.log(data2);
         }
         xhr2.send();



    } else {
        console.log('Something went wrong');
    }
}


// xhr.error will work when there is a network failure or when there is no internet.

xhr.onerror = () => {
    console.log('network error');
}

xhr.send();