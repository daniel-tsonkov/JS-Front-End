function solve(commands) {
    let cleanPercantage = 0;

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];

        if (command === "soap") {
            cleanPercantage += 10;
        } else if (command === "water") {
            cleanPercantage += cleanPercantage * 0.2;
        } else if (command === "vacuum cleaner") {
            cleanPercantage += cleanPercantage * 0.25;
        } else if (command === "mud") {
            cleanPercantage -= cleanPercantage * 0.1;
        }

    }

    return `The car is ${cleanPercantage.toFixed(2)}% clean.`;
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));