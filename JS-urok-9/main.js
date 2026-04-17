//Задача 1

const firstName = "Виталий";
const lastName = "Кривокотченко";
const isStudent = true;

console.log(firstName, lastName, isStudent);

//Задача 2

const age = 28;
const currentYear = 2026;
const birthYear = 2026 - 28;

console.log(birthYear);

//Задача 3

console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`);

//Задача 4

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e; 

//Мне кажется будет либо сложение - 123+456+789+0+1
//Либо 123+456+789+false+true - то есть все значения прилипнут

console.log(result);
//Да, все таки слиплись) было небольшое сомнение, что все таки браузер посчитает буливые значения как числа. 