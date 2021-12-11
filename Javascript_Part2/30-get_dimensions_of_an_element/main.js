// How to get the dimensions of element

// height width

const sectionTodo = document.querySelector('.section-todo');
sectionTodo.getBoundingClientRect(); // gives me an object with height, width, x-axis, y-axis etc.


const info = sectionTodo.getBoundingClientRect();
console.log(info);
console.log(sectionTodo.getBoundingClientRect().width);
console.log(sectionTodo.getBoundingClientRect().height);
