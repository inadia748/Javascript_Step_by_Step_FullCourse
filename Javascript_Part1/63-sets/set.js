// Sets (they are iterables)
// Sets can stor data and also have its own method
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates)


const numbers = new Set([1, 2, 3, 1, 1, 33, 2]);
console.log(numbers);

const items = new Set('abc');
console.log(items);

const items1 = ['item1', 'item2'];

const lists = new Set();
lists.add(1);
lists.add(3);
lists.add(2);
lists.add(1);
lists.add(100);
console.log(lists);
lists.add(numbers);
console.log(lists);

lists.add(['item1', 'item2']);
lists.add(['item1', 'item2']);
lists.add(items1);
console.log(lists);


if(numbers.has(1)) {
    console.log('1 is present');
} else {
    console.log('1 is not present');
}


numbers.add(4);
numbers.add(5);
numbers.add(6);


console.log(numbers);


for (let item of numbers) {
    console.log(item);
}



// real life scenarios like userIds because userId is unique

const myArray = [1, 2, 4, 4, 5, 6, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(uniqueElements.size);
const ConvertToArray = [...uniqueElements];
console.log(ConvertToArray);

let length = 0;
for (let element of uniqueElements) {
    length = length + 1;
}
console.log(length);