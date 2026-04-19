//Задача 1

function calculateFinalPrice(price, disc, tax) {
    const amountDisc = price * (disc / 100);
    const priceAfterDisc = price - amountDisc;
    const amountTax = priceAfterDisc * tax;
    const finalPrice = priceAfterDisc + amountTax;
    return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));


//Задача 2

function checkAccess(name, password) {
    if (name === "admin" && password === "123456") {
        console.log("Доступ разрешен");
        return;
    } else {
        console.log("Доступ запрещен");
        return;
    }
}

checkAccess("admin", "123456");

//Задача 3

function getTimeOfDay(time) {
    const result = time <= -1 ? "Некорректное время" : time <= 5 ? "Ночь" : time <= 11 ? "Утро" : time <= 17 ? "День" : time <= 23 ? "Вечер" : "Некорректное время";
    return result;
}

console.log(getTimeOfDay(15));

//Задача 4

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        } 
    }
    console.log(findFirstEven("Четных чисел нет"));
    return;
}

console.log(findFirstEven(7, 10));