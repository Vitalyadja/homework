function firstPage(name) {
	return "Hello " + name
}
const result = firstPage('Ivan')
console.log(result)



const numbers = [1, 24, 33, 4, 11]

function numbersPage(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 10) {
			console.log(`Этот номер ${array[i]} > 10`)
		}
	}
}

numbersPage(numbers)



function theePage(num1, num2, operator) {
	switch (operator.toLowerCase()) {
		case 'minus':
		case '-':
			return num1 - num2
		case 'plus':
		case '+':
			return num1 + num2
		case 'multiply':
		case '*':
			return num1 * num2
		case 'dividedby':
		case '/':
			return num1 / num2
	}
}

console.log(theePage(2, 3, 'minus'))
console.log(theePage(2, 3, 'plus'))
console.log(theePage(2, 3, 'multiply'))
console.log(theePage(2, 3, 'dividedby'))

