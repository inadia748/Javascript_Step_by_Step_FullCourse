

function myFunc(a) {
    console.log(a);
    
}

myFunc([1, 2, 3]);
myFunc('abc');
myFunc({name: 'Nadia'});
myFunc();



// callback functions 

function forCallBack(callback) {
    console.log('Inside forCallBack');
    callback();
}

function myFunc2() {
    console.log('Inside my func2');
}

forCallBack(myFunc2);



/*

function forCallBack(callback) {

    // In real world application, you get data from database

    // const data = {}; // it is from database

    console.log('Inside forCallBack');
    callback('Nadia');
    // callback(data);
}

function myFunc2(name) {
    console.log('Inside my func2');
    console.log(`Your name is ${name}`);
}

forCallBack(myFunc2);



*/
