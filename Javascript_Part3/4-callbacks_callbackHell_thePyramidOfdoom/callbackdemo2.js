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



// Earlier you can do it in messy way. It should be in order. First you have to fetch then you apply the function.


// callback hell, there is nested seTimeout() functions.

setTimeout(()=>{
    heading1.textContent = 'one';
    heading1.style.color = 'violet';

    setTimeout(()=> {
        heading2.textContent = 'two';
        heading2.style.color = 'purple';

        setTimeout(()=> {
            heading3.textContent = 'three';
            heading3.style.color = 'red';

            setTimeout(()=> {
                heading4.textContent = 'four';
                heading4.style.color = 'pink';

                setTimeout(()=> {
                    heading5.textContent = 'five';
                    heading5.style.color = 'green';

                    setTimeout(()=> {
                        heading6.textContent = 'six';
                        heading6.style.color = 'blue';

                        setTimeout(()=> {
                            heading7.textContent = 'seven';
                            heading7.style.color = 'brown';
                        }, 1000);

                        setTimeout(()=> {
                            heading8.textContent = 'eight';
                            heading8.style.color = 'yellow';

                            setTimeout(()=> {
                                heading9.textContent = 'nine';
                                heading9.style.color = 'aqua';

                                setTimeout(()=> {
                                    heading10.textContent = 'ten';
                                    heading10.style.color = 'seashell';
                                    heading10.style.backgroundColor='black';
                                }, 1000);
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);


    }, 1000);
}, 1000);






// We can do this callback hell using functions. For that see callbackdemo3.html and callbackdemo3.js .
