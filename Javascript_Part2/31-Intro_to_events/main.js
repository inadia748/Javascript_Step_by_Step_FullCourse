const btn = document.querySelector('.btn-headline');
console.log(btn);
console.dir(btn);

/* 
// 1st way to add an event, it is not used that much.
btn.onclick = function() {
    console.log('You clicked me');
}
*/


// 2nd way to add an event, it is commonly used.

function clickme() {
    console.log('you clicked me!!!');
}
btn.addEventListener('click', clickme );

/*  or

btn.addEventListener('click', function() {
    console.log('You clicked me');
});

*/


/* or 

btn.addEventListener('click', ()=> {
    console.log('arrow function !!!');
});


*/