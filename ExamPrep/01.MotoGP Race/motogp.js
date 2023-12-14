function solve(input) {
    const riderCount = Number(input.shift()); //така се взима една линия запис
    const riders = {};

    for (let i = 0; i < riderCount.length; i++) {
        const riderLine = input.shift();
        //const riderDetails = riderLine.split('|');

        //const name = riderDetails[0];
        //const fuel = riderDetails[1];
        //const position = riderDetails[2];

        const [name, fuel, position] = riderLine.split('|');

        riders[name] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Finish') {
        commandLine = commandLine.split(' - ');
        const command = commandLine.shift();

        switch (command) {
            case 'StopForFuel':
                const riderName = commandLine.shift();
                const minimumFuel = Number(commandLine.shift());
                const changePosition = Number(commandLine.shift());

                riders[riderName].position = changePosition;

                if (riders[riderName].fuel < minimumFuel) {
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changePosition}.`)
                } else {
                    console.log(`${riderName} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':

                break;
            case 'EngineFail':

                break;
        }
        commandLine = input.shift();
    }
}

solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);