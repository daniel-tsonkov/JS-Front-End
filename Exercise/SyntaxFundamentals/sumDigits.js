function solve(digit) {
    const digitsString = digit.toString();
    let sum = 0;

    for (let index = 0; index < digitsString.length; index++) {
        sum = sum + Number(digitsString[index]);
    }

    console.log(sum);
}

solve(245678)