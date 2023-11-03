function solve(arr) {
    let even = 0;//четно
    let odd = 0;//нечетно

    for (let num of arr) {
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }

    }

    console.log(even - odd);
}

solve([1, 2, 3, 4, 5, 6]);