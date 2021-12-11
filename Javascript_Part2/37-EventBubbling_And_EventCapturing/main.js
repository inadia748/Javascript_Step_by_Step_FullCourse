const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


child.addEventListener('click', ()=> {
    console.log('Bubble! you clicked on child');
});

parent.addEventListener('click', ()=> {
    console.log('Bubble! you clicked on parent');
});

grandparent.addEventListener('click', ()=> {
    console.log('Bubble! you clicked on grandparent');
});


document.body.addEventListener('click', ()=> {
    console.log('Bubble! you clicked on body');
});


/* When you click on a child, you notice events are occuring in child then a parent, then a grandparent and then finally a body.
This is called event bubbling or event propagration
 */







// Event Capturing



child.addEventListener('click', ()=> {
    console.log('Capture !! the child');
}, true);

parent.addEventListener('click', ()=> {
    console.log('Capture !! the parent');
}, true);

grandparent.addEventListener('click', ()=> {
    console.log('Capture !! the grandparent');
}, true);


document.body.addEventListener('click', ()=> {
    console.log('Capture !! the body');
}, true);




// When you click on a child, you notice the events are happening on a body, then the grandparent, then the parent and finally the child. This is event capturing.





