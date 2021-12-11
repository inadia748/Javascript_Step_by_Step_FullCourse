// clone nodes

const ul = document.querySelector('.todo-list');
console.log(ul);

const li = document.createElement('li');
li.textContent = 'New todo 2';
// cloning li
const li2 = li.cloneNode(true);// true is used for deep cloning.
ul.append(li);
ul.prepend(li2);