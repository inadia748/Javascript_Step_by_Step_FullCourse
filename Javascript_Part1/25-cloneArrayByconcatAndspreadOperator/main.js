// Clone Array

// cloning an array means copying an array.


/* 1st way of cloning an array */
let array1 = ['item1', 'item2'];
let array2 = array1;

console.log(array1 === array2);
console.log(array1 == array2);


/* Now cloning an array */
 // You have to do it like this
 let arr1 = ['item1', 'item2'];
 let arr2 = ['item1', 'item2'];
 console.log(arr1 === arr2);

 /* Since, arr2 is not referencing arr1, you can push an element into an array */
 arr1.push('item3');
 console.log(arr1);
 console.log(arr2);




 /* You noticed in the above code, that cloning in arr2 is quite tedious, there is also another way of doing that: */
  /* Second way of cloning an array   */
 let a1 = ['item1', 'item2'];
 let a2 = a1.slice(0);

console.log(a1 === a2);
 a1.push('item3');
 console.log(a1);
 console.log(a2);


 /* 3rd way of cloning the array is by concat method : */
 // let a2 = [].concat(a1);
 // console.log(a1 === a2);


 /* 4th way of cloning the array by spread operator */
 // let a2 = [...a1];
 // console.log(a1 === a2);



 let c1 = ['item1', 'item2'];
 let c2 = c1.slice(0).concat(['item3', 'item4']); 
 // or let c2 = [].concat(c1, ['item3', 'item4']);
 // or let c2 = [...c1, 'item3', 'item4'];

 console.log(c1);
 console.log(c2);















 

 /*  My code from replit for my understanding of cloning of an array */


 /*
 
 // Ways of cloning an array.

// 1st way of cloning an array but it is tiring

let arr1 = ['item1', 'item2'];
let arr2 = ['apple', 'orange'];

console.log(arr1 === arr2);

arr1.push('item3');
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);


// 2nd way of cloning an array. It is by slicing
console.log('\n Another way of cloning an array');
let ca1 = ['item1', 'item2'];
let ca2 = ca1.slice(0);
console.log(ca1 === ca2);
ca1.push('going');
ca2.push('waver', 'water', 'rover');   // it can be done in another way. In line 94, you can write let ca2 = ca1.slice(0).concat('waver', 'water', 'rover');
console.log(ca1, ca2);


// 3rd way of cloning an array. It is by spread operator.
console.log('\n Third way of cloning an array');
let a1 = ['item1', 'item2'];
let a2 = [...a1];
console.log(a1 === a2);
a1.push('item3');
console.log(a1, a2);



// 4th way of cloning an array is concat method
console.log('\n Fourth way of cloning an array');
let d1 = ['item1','item2'];
let d2 = [].concat(d1);
console.log(d1 === d2);
d1.push('apple');
console.log(d1, d2);

 
 
 
 
 
 
 */