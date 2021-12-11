const btn = document.querySelector('.btn-headline');
console.log(btn);
console.dir(btn);

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of 'this' keyword: ", this);
    console.log(this);
});

// or

/*
function myFunc() {
    console.log('You clicked me !!!');
    console.log("value of 'this' keyword: ", this);
    console.log(this);
}

btn.addEventListener('click', myFunc);


// If arrow functions is used in events, it will point to window object. So, arrow function is not used in event handling.
/*

btn.addEventListener("click",()=>{
    console.log("you clicked me !!!!");
    console.log("value of 'this' keyword: ", this);
    console.log(this);
});

*/