function solve(fruit, grams, price) {
    let totalPrice = ((price/1000) * grams);
    let kilograms = grams / 1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35);