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
    updateUI(value)
}

function handleNumericInput() {

}

function handleOperatorInput() {

}

function handleEvaluate(){

}

function handleReset() {

}

function updateUI() {

}