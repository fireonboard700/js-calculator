function add(a, b) {
    return (a + b).toFixed(4);
}

function subtract(a, b) {
    return (a - b).toFixed(4);
}

function multiply(a, b) {
    return (a * b).toFixed(4);
}

function divide(a, b) {
    if (b === 0) {
        return "lol";
    }

    return (a / b).toFixed(4);
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
let op = "";

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        op = operator.textContent;
        display.textContent = "";
    });
});

const digits = document.querySelectorAll(".digit");

let a = [];
let b = [];
let result = "";

digits.forEach((button) => {
    button.addEventListener("click", () => {
        digit = button.textContent;

        if (result !== "" && op === "") {
            // clear display.
            a = [];
            result = "";
            display.textContent = "";
        }

        if (digit === "." && display.textContent.includes(digit)) {
            // decimal point already present, disable.
            return;
        }
        if (op === "") {
            a.push(digit);
        } else {
            b.push(digit);
        }

        display.textContent += digit;
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (a.length > 0 && b.length > 0) {
        result = operate(parseFloat(a.join("")), parseFloat(b.join("")), op);
        display.textContent = `${result}`;

        // reset nums, and operator, and retain result in a.
        a = [];
        b = [];
        op = "";

        temp = result.toString();
        if (temp !== "lol") {
            for (let i = 0; i < temp.length; i++) {
                a.push(temp[i]);
            }
        }
    }
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    display.textContent = "";
    // reset state
    a = [];
    b = [];
    op = "";
    result = "";
});
