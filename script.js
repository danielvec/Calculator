function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function exponent(a, b) {
    return a ** b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === 'x') return multiply(a, b);
    if (operator === '/') return divide(a, b);
    if (operator === '^') return exponent(a, b);
}
let display = document.querySelector("#display");
let calculator = document.querySelector("#calculator")
let cont = display.textContent;

function toDisplay() {
    document.querySelectorAll(".number").forEach(number => {
        number.addEventListener('click', () => {
            if (display.textContent.length > 7) {
                display.textContent
            }
            else {display.textContent += number.textContent;}
          })
    })

    document.querySelectorAll(".decimal").forEach(decimal => {
        decimal.addEventListener('click', () => {
            if (display.textContent.length > 7) {
                display.textContent
            }
            else {display.textContent += decimal.textContent;}
          })
    })
    
    document.querySelectorAll(".operator").forEach(operator => {
        operator.addEventListener('click', () => {
            if (display.textContent.length > 7) {
                display.textContent
            }
            else {display.textContent += operator.textContent;}
          })
    })

    let equals = document.querySelector(".equals")
        equals.addEventListener('click', () => {
            numArray = display.textContent.split(/[\/x^+-]/g);
            opArray = display.textContent.split(/[.\d]/g).filter(Boolean);

            if (numArray.length < 3) {
             display.textContent = Math.round(operate(opArray[0],numArray[0],numArray[1])*100)/100;
            }
            else if (numArray.length === 3) {
                firstResult = operate(opArray[0],numArray[0],numArray[1]);
                display.textContent = Math.round(operate(opArray[1],firstResult,numArray[2])*100)/100;
            }
            else if (numArray.length === 4) {
                secondResult = operate(opArray[1],operate(opArray[0],numArray[0],numArray[1]),numArray[2]);
                display.textContent = Math.round(operate(opArray[2], secondResult, numArray[3])*100)/100;
            }
          })
        }

        
    let clear = document.querySelector("#clear")
        clear.addEventListener('click', () => {
         display.textContent = "";
          })

    let deletion = document.querySelector("#delete")
        deletion.addEventListener('click', () => {
        displayArray = Array.from(display.textContent);
        displayArray.pop()
        let newDisplay = displayArray.join('')
        display.textContent = newDisplay;
           })
        

toDisplay();

