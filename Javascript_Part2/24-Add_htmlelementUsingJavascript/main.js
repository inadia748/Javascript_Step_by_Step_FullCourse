// Add new HTML element to page

// 1. innerHTML to add html element

const list = document.querySelector('.todo-list');
console.log(list.innerHTML);

list.innerHTML = '<li> new todo 1 </li>';

console.log(list.innerHTML);

list.innerHTML = list.innerHTML + '<li> New Todo 2 </li>' + '<li> New Todo 3 </li>';
list.innerHTML = list.innerHTML + '<li> Teach People </li>';


// It is suggested to not use this 'adding elements using javascript' by innerHTML
// You shoud not use 'add html element using Javascript by innerHTML' because it renders html code double time, it cause performance issues.


// You can use 'add html element using Javascript by innerHTML' when you need to change the text.
