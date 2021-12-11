const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo);

// to see how many classes it have
console.log(sectionTodo.classList);

// to add a new class
sectionTodo.classList.add('bg-dark');

console.log(sectionTodo.classList);

// to remove a class
sectionTodo.classList.remove('bg-dark');

console.log(sectionTodo.classList);

// to check if a class exists or not
console.log(sectionTodo.classList.contains('bg-dark'));


// toggle class
sectionTodo.classList.toggle('bg-dark');

sectionTodo.classList.toggle('bg-dark');


const header = document.querySelector('.header');
console.log(header);
console.log(header.classList);

header.classList.toggle('bg-dark');