// nested destructuring


const users = [
    {userId:1, firstName: 'Nadia', gender: 'Female', },
    {userId:2, firstName: 'John', gender: 'Male', },
    {userId:3, firstName: 'Sarah', gender: 'Female',},
];

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);




/* You want to destructure the objects in an array */
// you want the firstName of user1 and gender of user3
const [{firstName, userId}, , {gender}] = users;
console.log(firstName);
console.log(userId);
console.log(gender);



// If you want to use an alias
/*
const [{firstName: user1Firstname, userId:user1Id}, , {gender:user3gender}] = users;
console.log(user1FirstName);
console.log(user1Id);
console.log(user3gender);
*/