const displayInput = document.getElementById("inputValue").innerText = 'Hello'

//Variables
const operators = ['-', '+', '*', '/']

//Function & Operations

function handleInteraction(value) {
    if (operators.includes(value)) {
        console.log('Clicked an operator: ',value)
        handleEvaluatedOperator(value) 
    } else {
        console.log('Clicked a numeric value: ',value)
        handleNumericInput(value)
    }
    updateUI()
}

function handleNumericInput(value) {
    currValue += value
    console.log('NEW VALUE: ',currValue)
}

function handleOperatorInput(value) {
    if(!currValue){
        return
    }

    operations.push(currValue)
    operations.push(value)
    currValue = ''
}

function handleEvaluate(){

}

function handleReset() {

}

function updateUI() {
    console.log(operators)
}