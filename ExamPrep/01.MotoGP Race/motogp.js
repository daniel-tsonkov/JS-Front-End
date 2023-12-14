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