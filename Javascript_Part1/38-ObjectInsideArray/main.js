// Object inside array
// very useful in real world applications


const users = [
    {userId:1, firstName: 'Nadia', gender: 'Female', },
    {userId:2, firstName: 'John', gender: 'Male', },
    {userId:3, firstName: 'Sarah', gender: 'Female',},
];

console.log(users);


for (user of users) {
    console.log(user);
    console.log(user.Id);
    console.log(user.firstName);
}

console.log(users[0]);
console.log(users[0].firstName);