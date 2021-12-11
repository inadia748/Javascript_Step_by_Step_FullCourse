// understand callback


// Example 1
function myFunc(callback) {
    console.log('Funcion is doing some task1');
    callback();
}

function myFunc2() {
    console.log('Funcion is doing some task2');
}

myFunc(myFunc2);

myFunc(function() {
    console.log('function is doing anoymous task');
});


myFunc(() => {
    console.log('function is doing anoymous task using arrow function');
});



// Example 2
console.log('\n');

function getTwoNumbersAndAdd(number1, number2, callback) {
    console.log(number1, number2);
    callback(number1, number2);
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

getTwoNumbersAndAdd(5, 2, addTwoNumbers);






// Example 3
console.log('\n');

function getTwoNumbers_Check_Add(number1, number2, callback) {
    console.log(number1, number2);
    console.log(typeof(number1), typeof(number2));
    
    if(typeof(number1) === 'number' && typeof(number2) === 'number') {
        callback(number1, number2);
    } else {
        console.log('Wrong data types');
        onFailure();
    }

}

function addTwoNumbersAfterChecking(num1, num2) {
    console.log('The sum of two numbers ',num1 + num2);
}

function onFailure() {
    console.log('Please pass numbers!');
    console.log('Error: You have passed strings');
}

getTwoNumbers_Check_Add(3, 3, addTwoNumbersAfterChecking);
getTwoNumbers_Check_Add('3', '3', addTwoNumbersAfterChecking);








// Example 4, Callback using arrow functions
console.log('\n');
getTwoNumbersAndAdd(4, 5, (num1, num2)=> {
    console.log(num1 + num2);
});

getTwoNumbers_Check_Add('3', 5, (num1, num2)=> {
    console.log(num1 + num2);
});





// Example5, using two callbacks

console.log('\n');
// onSuccess and onFailure is a callback function
function getTwoNumbersAndAdd_Check_TwoCallbacks(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1, number2);
        console.log(typeof(number1), typeof(number2));
      onSuccess(number1, number2);
    } else {
      onFailure();
    }
  }

  function addTwoNumbers_Check_twoCallbacks(num1, num2) {
    console.log(num1 + num2);
  }
  
  function onFail(){
      console.log("Wrong data type");
      console.log("please pass numbers only")
  }

  getTwoNumbersAndAdd_Check_TwoCallbacks(4, 5, addTwoNumbers_Check_twoCallbacks, onFail );


  getTwoNumbersAndAdd_Check_TwoCallbacks(4, 4, (num1, num2)=> {
      console.log(num1 + num2);
  },    ()=> {
      console.log('wrong data type');
      console.log('Please pass numbers only');
  });












