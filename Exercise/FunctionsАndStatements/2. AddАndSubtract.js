function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function solve(num1, num2, num3) {
    let sumOperation = sum(num1, num2);
    let result = subtract(sumOperation, num3);

    return result;
}

console.log(solve(23, 6, 10));