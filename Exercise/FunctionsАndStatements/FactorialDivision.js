function solve(num1, num2) {

    function num(num) {
        let tempVal = 1;

        for (let i = 1; i <= num; i++) {
            tempVal *= i;
        }
        return tempVal;
    }

    return (num(num1) / num(num2)).toFixed(2);
}

console.log(solve(5, 2));