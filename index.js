let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    console.log("button clicked")
    result = num1 + num2
    sumEl.textContent = "Sum: "  + result
}

function subtract() {
    console.log("button clicked")
    result = num1 - num2
    sumEl.textContent = "Sum: "  + result
}

function divide() {
    console.log("button clicked")
    result = num1 / num2
    sumEl.textContent = "Sum: "  + result
}

function multiply() {
    console.log("button clicked")
    result = num1 * num2
    sumEl.textContent = "Sum: "  + result
}
