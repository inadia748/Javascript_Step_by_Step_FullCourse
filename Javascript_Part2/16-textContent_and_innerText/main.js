// change your text.

const mainHeading = document.getElementById('main-heading');
console.log(mainHeading);



// textContent, with textContent property, you can change the text.
console.log(mainHeading.textContent);
console.log(mainHeading.innerText);

/* There is no difference between textContent and innerText,
except when you look at html element  where an id named 'main-heading',
 you will notice a style is added where display is none.
 textContent will show the display of none whereas,
 innerText will not show you the display of none.

 But really, there is n't much difference between innerText and textContent.
 */

mainHeading.textContent = 'This is something else';

console.log(mainHeading.textContent);
console.log(mainHeading.innerText);

