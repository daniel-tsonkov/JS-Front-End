function solve(number) {
    const pattern = 'ATCGTTAGGG';
    let indexOfPattern = 0;
    let rowIndex = 0;

    for (let index = 0; index < number; index++) {
        if (indexOfPattern == 10) {
            indexOfPattern = 0;
        }
        
        drawMolecul(pattern.charAt(indexOfPattern), pattern.charAt(indexOfPattern + 1), rowIndex);
        function drawMolecul(charA, charB, number) {
            switch (number) {
                case 0:
                    console.log(`**${charA}${charB}**`);
                    rowIndex++
                    break;
                case 1:
                    console.log(`*${charA}--${charB}*`);
                    rowIndex++
                    break;
                case 2:
                    console.log(`${charA}----${charB}`);
                    rowIndex++
                    break;
                case 3:
                    console.log(`*${charA}--${charB}*`);
                    rowIndex = 0;
                    break;
            }
        }
        indexOfPattern += 2;
    }
}

solve(10);