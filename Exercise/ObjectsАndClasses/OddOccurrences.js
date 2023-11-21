function solve(input) {
    input = input.toLowerCase();
    let arrayElements = input.split(' ');

    let map = new Map();

    arrayElements.forEach(element => {
        if (map.has(element)) {
            let oldValue = map.get(element);
            let newValue = oldValue + 1;
            map.set(element, newValue);
        } else {
            map.set(element, 1);
        }
    });

    let arrResult = [];

    map.forEach((value, key) => {
        if(value % 2 !== 0) {
            arrResult.push(key);
        }
    });
    console.log(arrResult.join(' ')); //ВАЖНО!!!
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');