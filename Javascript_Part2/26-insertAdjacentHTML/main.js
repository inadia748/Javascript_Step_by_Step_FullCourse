




// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend


/* Note: this methods like beforebegin, afterbegin, beforend and afterend is not used much */

const todoList = document.querySelector('.todo-list');
console.log(todoList);

todoList.insertAdjacentHTML('beforeend', '<li>Teach People </li>');
todoList.insertAdjacentHTML('afterbegin', '<li> What is </li>');
todoList.insertAdjacentHTML('beforebegin', '<h2> Before todo-list class </h2>');
todoList.insertAdjacentHTML('afterend', '<h2> After todo-list class </h2>');


/* Normally we use, prepend,append, before and after. It is used commonly */