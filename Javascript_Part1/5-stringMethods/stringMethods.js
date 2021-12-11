// 1. trim(), they remove spaces. It will return a new string.

let firstName = '   Nadia    ';
console.log(firstName);
console.log(firstName.length);

firstName.trim();
console.log(firstName);
console.log(firstName.length);

/* Since, it will return a new string, so, either store it in a variable or console.log it */
console.log(firstName.trim())
console.log(firstName.trim().length)

trimmedName = firstName.trim(); // or firstName = firstName.trim()
console.log(trimmedName);
console.log(trimmedName.length);







// 2. toUpperCase(), will convert the string to upper case and it will return a new string.

let lastName = 'Islam';
console.log(lastName);
console.log(lastName.toUpperCase());

let convertedToUpperCase = lastName.toUpperCase();
console.log(convertedToUpperCase);


// 3. toLowerCase(), will convert the string to lowercase and it will return a new string.

console.log(lastName);
console.log(lastName.toLowerCase());
let convertedToLowerCase = lastName.toLowerCase();
console.log(convertedToLowerCase);




// 4. slice(start index, last index(), last index is excluded. it will return a new string.


let myString = 'Nadia Islam';
let newString = myString.slice(0,5);
console.log(newString);
console.log(myString.slice(1,5));