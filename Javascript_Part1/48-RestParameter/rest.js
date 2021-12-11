// rest parameters


function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log('c is ', c);
    console.log('breaking down c', ...c);
}

myFunc(3, 4, 5, 10, 55, 21, 33);


function addAll( ... numbers) {
    console.log(numbers);
    console.log(typeof(numbers));
    console.log(Array.isArray(numbers));

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);

    /*
        let total = 0;

        for (let number of numbers) {
            total += number;
        }
    
        return total;
    */
}

addAll(100, 5, 32, 99, 1000, 3, 82);

/*
    const ans = addAll(4, 5, 4);
    console.log(ans);

*/