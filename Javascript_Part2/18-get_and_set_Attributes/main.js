// get and set attributes


/* get attributes */
const link = document.querySelector('a');
console.log(link);
console.log(typeof(link));

console.log(link.getAttribute('href'));
console.log(link.getAttribute('href').slice(1));

const inputElement = document.querySelector('.form-todo input') ;
console.log(inputElement);
console.log(inputElement.getAttribute('type'));



/* set attributes */
link.setAttribute('href','https:www.youtube.com');
console.log(link);
console.log(link.getAttribute('href'));