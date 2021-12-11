const myArray = ['Hello', 'cat', 'dog', 'Lion'];

function isLength3(string) {
    return string.length === 3;
}

const ans = isLength3('dog');
console.log(ans);


const LengthIs3 = myArray.find(isLength3);
console.log(LengthIs3);


const LengthIs3_byArrowFunc = myArray.find((string)=>{
    return string.length === 3;
});



const users = [
    {userId: 1, userName:'Nadia'},
    {userId: 2, userName:'Saad'},
    {userId: 3, userName:'John'},
    {userId: 4, userName:'Sarah'},
    {userId: 5, userName:'Anna'},
];

const myUserId = users.find((user)=> user.userId === 3);
console.log(myUserId);