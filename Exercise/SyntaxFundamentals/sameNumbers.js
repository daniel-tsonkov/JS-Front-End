function solve(number) {
    const digitString = number.toString();
    let isConsistent = true;
    let sum = Number(digitString[0]);

    for (let index = 1; index < digitString.length; index++) {
        sum += Number(digitString[index]);

        if (digitString[index] !== digitString[index - 1]) {
            isConsistent = false;
        }
    }
    console.log(isConsistent);
    console.log(sum);
}

solve(1234);