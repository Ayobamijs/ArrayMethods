// Concat

let arr = [1, 2];

console.log(arr.concat([3, 4]));


console.log(arr.concat([3, 4], [5, 6]));



// Find

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name);


//findindex


let people = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

// Find the index of the first John
alert(people.findIndex(user => people.name == 'John')); // 0

// Find the index of the last John
alert(peoples.findLastIndex(user => people.name == 'John')); // 3



//filter

let userst = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = userst.filter(item => item.id < 3);

alert(someUsers.length); // 2


//map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


//join

let arrt = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arrt.join(';'); // glue the array into a string using ;

alert(str); // Bilbo;Gandalf;Nazgul

//reduce

let arrs = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15





