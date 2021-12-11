// clone using Object.assign

const obj = {
    key1: 'value1',
    key2: 'value2',
}

const obj2 = obj;

console.log(obj);
console.log(obj2);
console.log(obj === obj2); // true, obj2 is referencing obj, so whatever changes happens in obj2 , the changes will be seen in obj.


// cloning by 1st method, so that they do not reference
/* cloning by spread operator */
const obj3 = {...obj};
console.log(obj3 === obj); // false

/* Cloning by 2nd method by Object.assign */
const obj4 = Object.assign({}, obj);
console.log(obj4 === obj);


