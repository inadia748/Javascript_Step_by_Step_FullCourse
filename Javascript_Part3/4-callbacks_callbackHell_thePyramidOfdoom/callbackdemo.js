// callbacks , callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown








//setTimeout()

/* It wil go like this: heading1 will change in 1 second, heading2 will change in 2 second, heading3 will change in 3 second and so on */
setTimeout(()=> {
    heading1.textContent = 'Heading1';
    heading1.style.color = 'violet';
}, 1000)

setTimeout(()=> {
    heading2.textContent = 'Heading2';
    heading2.style.color = 'purple';
}, 2000)

setTimeout(()=> {
    heading3.textContent = 'Heading3';
    heading3.style.color = 'red';
}, 3000)

setTimeout(()=> {
    heading4.textContent = 'Heading4';
    heading4.style.color = 'green';
}, 4000)

setTimeout(()=> {
    heading5.textContent = 'Heading5';
    heading5.style.color = 'grey';
}, 5000)

setTimeout(()=> {
    heading6.textContent = 'Heading6';
    heading6.style.color = 'yellow';
}, 6000)

setTimeout(()=> {
    heading7.textContent = 'Heading7';
    heading7.style.color = 'aqua';
}, 7000)

setTimeout(()=> {
    heading8.textContent = 'Heading8';
    heading8.style.color = 'maroon';
}, 8000)

setTimeout(()=> {
    heading9.textContent = 'Heading9';
    heading9.style.color = 'navy';
}, 9000)

setTimeout(()=> {
    heading9.textContent = 'Heading9';
    heading9.style.color = 'navy';
}, 10000)






// But it is a lengthy process. We can do it in much shorter way.

// see callbackdemo2.html and callbackdemo2.js to see the shorter way.







