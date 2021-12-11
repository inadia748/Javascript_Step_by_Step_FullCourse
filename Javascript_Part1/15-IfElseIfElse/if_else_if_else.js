/*
if
else if 
else if
else
*/


let temperature = 50;


if(temperature < 0) {
    console.log('extremely colde outside');
} else if(temperature < 16) {
    console.log('It is cold outside');
} else if(temperature < 25) {
    console.log('Weather is ok');
} else if(temperature < 35) {
    console.log('Lets go for swim');
} else if(temperature < 45) {
    console.log('turn on AC')
} else {
    console.log('too hot!');
}