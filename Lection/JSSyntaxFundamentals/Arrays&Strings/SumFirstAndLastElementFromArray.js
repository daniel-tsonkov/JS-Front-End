function solve(input) {
    let first = input[0];
    let last = input[input.length - 1];
    //let res = Number(first) + Number(last); // Извличаме първия и последния елемент като числа и след това ги събираме
    console.log(first + last); // Това ще изведе конкатенация на две стойности, не тяхната сума
}

solve([20, 30, 40]);