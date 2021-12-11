// object destructuring

const band = {
    bandName: 'led zepplin',
    famousSong: 'Stairway to heaven',
    year: 1968,
    anotherSong: 'Darling',
};

/*
const bandName = band.bandName;
const famousSong = band.famousSong;

console.log(bandName, famousSong);
*/



/* It can be done in another way: */

const {bandName, famousSong, ...restProps} = band;
console.log(bandName, famousSong, restProps);


// If you want to choose  another name for bandName and famous song,
/* const {bandName: var1, famousSong: var2} = band ;
    console.log(var1);
    console.log(var2);
*/