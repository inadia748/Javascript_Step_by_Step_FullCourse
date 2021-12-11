const grandparent = document.querySelector('.grandparent');


// Event Delegation

grandparent.addEventListener('click', (e)=>{
    console.log('you clicked something!');
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
});

/* Suppose, you click on a child, you will notice that the 
event which is happening in 'grandparent' also affects the child,
giving the same output like, 'you clicked something!'.

Similary, when you click on parent or body, it is giving the 
same output like, 'you clicked something!'.

This is a case of event bubbling.

This is strange. That output should only come for the grandparent. It should not 
affect child or parent or body.




*/

