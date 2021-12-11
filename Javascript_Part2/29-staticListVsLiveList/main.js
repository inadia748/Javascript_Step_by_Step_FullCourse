// querySelectorAll gives us static list.
// getElementBySomething will give us live list.


// static list
const listItems = document.querySelectorAll('.todo-list li');
const sixthLi = document.createElement('li');
sixthLi.textContent = 'Item 6';

const ul = document.querySelector('.todo-list');
ul.append(sixthLi);

console.log(listItems); // shows 5 node list. It is a static list. Even though, we add the sixth list. The sixth list is not showing because it is a static list and 'getElementBySomething' is not used here.




// live list
// const listItems = ul.getElementsByTagName('li');   // it gives us HTML collections

/*

const ul = document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName('li');

const sixthLi = document.createElement('li');
sixthLi.textContent = 'Item 6';

ul.append(sixthLi);
console.log(listItems); // shows us 6 html collections. since it is a live list because we use 'getElementsByTagName'.


*/
