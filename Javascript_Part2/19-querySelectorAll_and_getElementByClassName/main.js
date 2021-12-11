/* get multiple elements using getElements by class name */

const allNavItems = document.getElementsByClassName('nav-item');
console.log(allNavItems);
console.log(Array.isArray(allNavItems)); // so they are not an array.

// HTML collections are array like objects. You cannot use array methods on HTML collections. But you can index them or iterate them.

/* Indexing them */
console.log(allNavItems[0], typeof(allNavItems[0]));
console.log(allNavItems[1]);
console.log(allNavItems[2]);






/* get multiple elements using querySelectorAll */

const navItemsAll = document.querySelectorAll('.nav-item');
console.log(navItemsAll);

/*NodeList is also an array like object but they are not array. You can index them and iterate them. You cannot use array methods on them. */
console.log(navItemsAll[0]);
console.log(navItemsAll[1]);
console.log(navItemsAll[2]);