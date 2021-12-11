// document.createElement()

const newTodoItem = document.createElement('li');
console.log(newTodoItem);

const newTodoItemText = document.createTextNode('Teach people');
// It can be written in another way instead of createTextNode
//newTodoItem.textContent = "Teach People";

newTodoItem.appendChild(newTodoItemText);




// append
const todoList = document.querySelector('.todo-list');
todoList.append(newTodoItem);




// prepend
const newTodoItem2 = document.createElement('li');
console.log(newTodoItem);
newTodoItem2.textContent = "To do List 2";
todoList.prepend(newTodoItem2);





// remove

const todoOriginal = document.querySelector('.original_list');
console.log(todoOriginal);
console.log(todoOriginal.textContent);
todoOriginal.remove();


// before

const createH1 = document.createElement('h1');
createH1.textContent = 'Before';
todoList.before(createH1);


// after
const createH2 = document.createElement('h2');
createH2.textContent = 'After';
todoList.after(createH2);






