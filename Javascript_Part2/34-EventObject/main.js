
/*
console.log('hello world');

const firstButton = document.querySelector('#one');
const secondButton = document.querySelector('#two');
const thirdButton = document.querySelector('#three');


firstButton.addEventListener("click",function(){
    console.log('You clicked Button1 !!!');
    console.log(this);
});


secondButton.addEventListener("click",function(){
    console.log('You clicked Button2 !!!');
    console.log(this);
});


thirdButton.addEventListener("click",function(){
    console.log('You clicked Button3 !!!');
    console.log(this);
});


*/


// whenever eventlistener is added to an element, the browser(chrome) have js engine and have extra features like web api. The browsers always notices when user clicks on an element(button, in our case), the browers first gives the callback function to the browsers then it the browsers returns callback function and also the event that happened.


const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.currentTarget);
    })
}




/* 

//Just for Revision


console.log('script start !!!');

const allButtons = document.querySelectorAll('.my-buttons button');

allButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let num = 0;
        for(let i = 0; i <= 10000; i++) {
            num += i;
        }
        console.log(e.currentTarget.textContent);
        console.log(e.currentTarget.textContent, num);
    })
});


let outerVar = 0;
for(let i = 0; i <= 100000; i++) {
    outerVar += i;
}

console.log('value of outer value', outerVar);
console.log('script end !!!');



*/




// Little practice with click Events

/*

const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})








*/