function solve(number) {
    let myString = number.toString();
    let myOdd = 0;
    let myEven = 0;

    for (let i = 0; i < myString.length; i++) {
        let digit = Number(myString[i]);

        //console.log(digit % 2);
        if(digit % 2 === 0) {
            myEven += digit;
        } else {
            myOdd += digit
        }
    }

    console.log(`Odd sum = ${myOdd}, Even sum = ${myEven}`);
}

solve(1000435)