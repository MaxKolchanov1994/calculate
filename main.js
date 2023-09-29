const val1 = document.querySelector('.input1')
const val2 = document.querySelector('.input2')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const calculate = document.querySelector('.calculate')
const result = document.querySelector('.result')
const mult = document.querySelector('.multiplication')
const division = document.querySelector('.division')

let option = ''
let res = 0
function generateColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

minus.addEventListener('click', function () {
	option = '-'
})
plus.addEventListener('click', function () {
	option = '+'
})
mult.addEventListener('click', function () {
	option = '*'
})
division.addEventListener('click', function () {
	option = '/'
})

calculate.addEventListener('click', function () {
	result.style.backgroundColor = generateColor()
	if (option == '-') {
		res = Number(val1.value) - Number(val2.value)
		result.textContent = 'Result: ' + res
	} else if (option == '+') {
		res = Number(val1.value) + Number(val2.value)
		result.textContent = 'Result: ' + res
	} else if (option == '*') {
		res = Number(val1.value) * Number(val2.value)
		result.textContent = 'Result: ' + res
	} else if (option == '/') {
		res = Number(val1.value) / Number(val2.value)
		result.textContent = 'Result: ' + res
	}
})
