// lexical scope

const myVar = 'global value';

function myApp() {

    const myVar = 'value1';

    function myFunc() {
        
        // comment out line 10 to see the changes. If it is commented out, myVar is 'value1' otherwise myvar is 'value30'.
        const myVar = 'value30';

        const myFunc2 = function() {
            // const myVar = 'func2';
            console.log('inside myFunc2', myVar);
        }

        console.log('inside myFunc', myVar);
        myFunc2();
    }

    


    const myFunc3 = () => {

    }

    console.log(myVar);
    myFunc();

}

myApp();