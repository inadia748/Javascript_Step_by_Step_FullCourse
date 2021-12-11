
/*

console.log('hello world');

const firstButton = document.querySelector('#one');
const secondButton = document.querySelector('#two');
const thirdButton = document.querySelector('#three');


firstButton.addEventListener("click",function(){
    console.log('You clicked Button1 !!!');
});


secondButton.addEventListener("click",function(){
    console.log('You clicked Button2 !!!');
});


thirdButton.addEventListener("click",function(){
    console.log('You clicked Button3 !!!');
});


*/




// Now you want the events on all three buttons to happen simultaneously.

//const allButtons = document.querySelectorAll('button'); // or
const allButtons = document.querySelectorAll('.my-buttons button'); // inside my-buttons class all buttons.
console.log(allButtons);

// using for of loop
for (let button of allButtons) {

    button.addEventListener('click', function(){
        console.log('you clicked me!');
        console.log(this);
        console.log(this.textContent);
        console.log(button.textContent);
    });
}


// using for loop
/*
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(){
        console.log(this);
        console.log(this.textContent);
    })
}

*/


// using forEach;
/*
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
        console.log(this.textContent);
        });
})
*/



