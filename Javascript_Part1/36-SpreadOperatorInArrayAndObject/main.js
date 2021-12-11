// spread operator in array

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 32, 50];
console.log(newArray);

const newArray2 = ['abc'];
console.log(newArray2);

const arr1 = [...'abc'];
console.log(arr1);

console.log([..."1234567890"]);

/* strings, arrays and objects are iterables */








// spread operator in objects


const obj1 = {
    key1: 'value1',
    key2: 'value2',
    
};

console.log('Obj1: ',obj1);


const obj2 = {
    key3: 'value3',
    key4: 'value4',
};

console.log('Obj2: ',obj2);

const normalObject = {
    value1: 1,
    value2: 5,
    value1: 100, // when you console.log the normalObject, you must remember, keys cannot be repeated. It will only take the latest values.
    // value1 is repeated 2 times. So, it will take the latest values. In this case, value1: 100
}

console.log('NormalObject: ',normalObject);


// cloning the obj1 and obj2 in newObject
const newObject = {...obj1, ...obj2, key50: 'key50'};
console.log(newObject);




const newObject2 = {..."abc"};
console.log(newObject2);


const newObject3 = { ...['item1', 'item2']};
console.log(newObject3);


// if you want to find character position
const newObject4 = {...'abcdefghijklmnopqrstuvwxyz'};
console.log(newObject4);


/*



const object1 = {
    key1: 'value1',
    key2: 'value2,
};


const object2 = {
    key1: 'valueUnique',
    key3: 'value3',
    key4: 'value4',
};

const newObject = {...object1, ...object2};
console.log(newObject); // the output will be like, newObject-> key1: 'valueUnique', key2: 'value2', key3:'value3', key4:'value4'


const newObject2 = {...object2, ...object1};
console.log(newObject2); // the output will be like, newObject-> key1: 'value1', key2: 'value2', key3:'value3', key4:'value4'

*/