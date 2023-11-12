function solve(firstChar, secondChar) {
    let myString = '';
    let firstCharAsNumber = firstChar.charCodeAt();
    let secondCharAsNumber = secondChar.charCodeAt();
    if(firstCharAsNumber > secondCharAsNumber) {
        let temp = firstCharAsNumber;
        firstCharAsNumber = secondCharAsNumber;
        secondCharAsNumber = temp;
    }

    for(let i = firstCharAsNumber + 1; i < secondCharAsNumber; i++) {
        myString += String.fromCharCode(i) + ' ';
    }

    console.log(myString);
}

solve('#', ':');