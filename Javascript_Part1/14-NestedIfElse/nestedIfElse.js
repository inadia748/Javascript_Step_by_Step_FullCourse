// Nested If else



// Making a guessing number


let winningNumber = 19;
let userGuess = Number(prompt('Guess a number'));



console.log(userGuess, typeof(userGuess));

/*
if (userGuess === winningNumber) {
    console.log('your guess is right!!');
} else {
    console.log('your guess is wrong!!');
}
*/

if (userGuess === winningNumber) {
    console.log('your guess is right!!');
} else {
    console.log('your guess is wrong!!');
    if(userGuess < winningNumber){
        console.log('too low!');
    } else {
        console.log('too high!');
    }
}

