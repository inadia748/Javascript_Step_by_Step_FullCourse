const todoForm = document.querySelector('.form-todo'); 
console.log(todoForm);

const todoInput = document.querySelector('.form-todo input[type="text"]');
console.log(todoInput);

const ultodolist = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e)=> {
    console.log('form submitted');
    e.preventDefault(); // this prevents the page from refreshing when submitting a form.
    console.log(todoInput.value);
    const newTodoText = todoInput.value;
    todoInput.value = '';

    const newLi = document.createElement('li');
    const newLiInnerHtml = ` 
        <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`;

     // setting the newLi with the newinnerhtml

     newLi.innerHTML = newLiInnerHtml;

     console.log(newLi);

     ultodolist.append(newLi);
     

     todoInput.value = '';


});


ultodolist.addEventListener('click', (e)=> {
    console.log(e.target);

    // check if user clicked on done button
    console.log(e.target.classList);

    if(e.target.classList.contains('remove')) {
        console.log('you want to remove something');

        const targetedLi = e.target.parentNode.parentNode;
        console.log(targetedLi);
        targetedLi.remove();
    }

    if(e.target.classList.contains('done')) {
        console.log('Great!!!');

        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan);
        liSpan.style.textDecoration = 'line-through';
    }


})