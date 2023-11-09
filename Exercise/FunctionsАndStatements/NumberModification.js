function solve(number) {
    let num = number.toString();
    let average = num
        .split('')
        .map(Number)
        .reduce((total, curr) => total + curr, 0) / num.length;

    while (average < 5) {
        num += '9';
        average = num
            .split('')
            .map(Number)
            .reduce((total, curr) => total + curr, 0) / num.length;
    }

    console.log(num);
}

solve(101);