// iterate elements


/*  array like objects -----> indexing, length property */

const navItems = document.getElementsByClassName('nav-item');
const navItemsTag = document.getElementsByTagName('a');
console.log(navItems);
console.log(navItemsTag);

/* cannot use forEach method to iterate HTML collection. Array methods do not work in HTML collections */

// 1. using for loop

for (let i = 0; i < navItems.length; i++) {
    console.log(navItems[i]);
    const navItem = navItems[i];
    const navItemTag = navItemsTag[i];
    navItem.style.backgroundColor = 'white';
    navItemTag.style.color = 'black';
    navItemTag.style.fontWeight = 'bold';
}


// 2. Using for of loop

for (let navItemTag of navItemsTag) {
    navItemTag.style.backgroundColor = 'yellow';
    navItemTag.style.color = 'red';

}


// 3. Trying using forEach Method, it gives error.

navItemsTag.forEach((navItemTag)=> {
    navItemTag.style.backgroundColor = 'red';
    navItemTag.style.color = 'blue';
}); // it will give an error. forEach method will not work in html collections.



/* to make forEach method work in HTML collection

let navItemsTag = document.getElementsByTagName('a');

Array.from(navItemsTag); // converting HTMLCollection to array.

console.log(navItemsTag, Array.isArray(navItemsTag));


navItemsTag.forEach((navItemTag)=> {
    navItemTag.style.backgroundColor = 'green';
    navItemTag.style.color = 'yellow';
    navItemTag.style.fontWeight = 'bold';
});


*/




