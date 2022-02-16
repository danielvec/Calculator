function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    console.log(a * b)
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === 'x') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}
let display = document.querySelector("#display");
let cont = display.textContent;
function toDisplay() {
    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener('click', () => {
             display.textContent += number.textContent;
             console.log("step 1", display.textContent);
          })

    })

    document.querySelectorAll(".operator").forEach(operator => {
        operator.addEventListener('click', () => {
            q = display.textContent;
            display.textContent += operator.textContent;
            y = operator.textContent;
            console.log("step 2", q, y);
            //calculate();
        })
     
    })

    let equals = document.querySelector(".equals")
        equals.addEventListener('click', () => {
            zArray = display.textContent.split(/[\/x+-]/g);
            z = zArray[zArray.length - 1];
            console.log(zArray, z, operate('x',2,3))
             display.textContent = operate(y,q,z);
          })

    
    //toDisplay();
}

function calculate() {
    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
            let z = display.textContent;
            console.log("step 3", z);
            })
    })

}

toDisplay();

