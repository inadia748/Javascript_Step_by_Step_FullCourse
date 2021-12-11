// default parameter


function addTwo(a = 1, b=0) {
    return a + b;
}

const ans = addTwo(4);
console.log(ans);

console.log(addTwo());

console.log(addTwo('' ,5));