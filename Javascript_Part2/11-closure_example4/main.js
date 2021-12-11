function func() {
    let counter = 0;
    return function() {
        if(counter < 1) {
            console.log('Hi, you called me');
            counter++;
        } else {
            console.log('Why are you calling me again?');
        }
    }

    
}


const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();