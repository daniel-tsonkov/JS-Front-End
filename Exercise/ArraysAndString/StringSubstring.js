function solve(word, leter) {
    let myWordsArr = leter.toLowerCase().split(' ');
    let output = `${word} not found!`;

    for (let myWord of myWordsArr) {
        if (myWord === word) {
            output = word;
        }
    }
    console.log(output);
}

solve('python',
    'JavaScript is the best programming language')