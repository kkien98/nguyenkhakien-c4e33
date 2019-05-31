let person = {
    name: "Duc",
    age: 22,
    girlFriend: 3,

    //property: value
}

// CRUD
//1.READ
console.log(person.age);

//2.CREATE / UPDATE
person.school = "FTU";
console.log(person);

//Update
person.girlFriend = 5;
console.log(person);
 

//3.DELETE

delete person.age;
console.log(person);