const user = {
	name: 'Vitaliy',
	secondName: 'Krivokotchenko',
	age: 27,
}

console.log("Hello " + user.name)

const users =[
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
	{
        name: 'igor',
        age: 47,
        isAdmin: true
    }
]

let userCol = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false){
		userCol ++;
	}
console.log(`Простых пользователей - ${userCol}`);
}


