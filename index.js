let x = prompt("Enter no. 1 : ")
let y = prompt("Enter no. 2 : ")

let num1 = parseInt(x)
let num2 = parseInt(y)

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add() {
    let sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Substraction: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Division: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Multiplication: " + result
}

