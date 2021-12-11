// splice method
// start, delete, insert

/*  The splice() method changes the contents of an array 
by removing or replacing existing elements and/or adding 
new elements in place. It changes the original array. It also returns 
the modified value. */


const myArray = ['item1', 'item2', 'item3'];
console.log(myArray);

// deleting using  splice method
/* delete item2 */
const deletedItem = myArray.splice(1, 1);
console.log('deleted item: ',deletedItem);

// insert using splice method
const insertedItem=myArray.splice(1, 0, 'inserted item');
console.log(insertedItem);


console.log(myArray);


/*
const deletedItem = myArray.splice(1,2);

// insert and delete simultaneously
myArray.splice(1, 2, 'inserted item1', 'inserted item2');
console.log('deleted item', deletedItem);
console.log(myArray);

*/




