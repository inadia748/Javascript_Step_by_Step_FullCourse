// setInterval

/*

console.log('script start');

setInterval(()=>{
    console.log(Math.random());
}, 1000);

console.log('script end');

*/



console.log('script start');

setInterval(()=> {
    let total = 0;
    for(let i = 0; i < 100000; i++) {
        total += i;
    }
    console.log(total);
    console.log(Math.random());
}, 500); // 500 here means 5milliseconds.

console.log('script end');
