const sumBTn = document.querySelector('#sumBtn')
const subBTn = document.querySelector('#subBtn')
const multBTn = document.querySelector('#multBtn')
const divBTn = document.querySelector('#divBtn')
const clearBTn = document.querySelector('#clearBtn')

const firstOperand = document.querySelector('#inp1')
const secondOperand = document.querySelector('#inp2')

const resultBlock = document.querySelector('#resultBlock')

let result;

function calc(num1, num2, operator) {
    switch(operator){
        case "+":
            return +num1 + +num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

sumBTn.addEventListener('click', function() {
    result = calc(firstOperand.value, secondOperand.value, "+").toFixed(2);
    resultBlock.innerHTML = result;
})

subBTn.addEventListener('click', function() {
    result = calc(firstOperand.value, secondOperand.value, "-").toFixed(2);
    resultBlock.innerHTML = result;
})

multBTn.addEventListener('click', function() {
    result = calc(firstOperand.value, secondOperand.value, "*").toFixed(2);
    resultBlock.innerHTML = result;
})

divBTn.addEventListener('click', function() {
    result = calc(firstOperand.value, secondOperand.value, "/").toFixed(2);
    resultBlock.innerHTML = result;
})

clearBTn.addEventListener('click', function(){
    firstOperand.value = ''
    secondOperand.value = ''
    resultBlock.innerHTML = 'Result: '
})