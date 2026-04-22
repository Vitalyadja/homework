//Задание 1

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users.push({ name: 'Ann', age: 19, isAdmin: false });
users.push({ name: 'Jack', age: 43, isAdmin: true });


console.log(users);

//Задание 2

let sum = 0;

function getUserAverageAge(myUsers) {
    for (let i = 0; i < users.length; i++){
        sum += users[i].age;
    }
    let average = sum / users.length;
    console.log(sum); 
    console.log(average); 
}

getUserAverageAge();

//Задание 3

function getAllAdmins(admUsers){
    for (let i = 0; i < users.length; i++){
        if (users[i].isAdmin === true){
            console.log(users[i]);
        }
    }
}

getAllAdmins();