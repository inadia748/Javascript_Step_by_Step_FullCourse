

const mainHeading = document.querySelector('#main-heading');
// or const mainHeading = document.querySelector(div.headline h2);
console.log(mainHeading);

// Revising what I learned about textContent and innerText
console.log(mainHeading.textContent);
console.log(mainHeading.innerText);



// change the style of the elements
console.log(mainHeading.style); // gives you the list of css syles you can apply.

mainHeading.style.color = 'green';
mainHeading.style.backgroundColor = 'purple';
