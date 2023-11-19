function solve(input) {
    const [searchWords, ...words] = input;

    const wordOccurencies = searchWords.split(' ').reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach(element => {
        if (wordOccurencies.hasOwnProperty(element)) {
            wordOccurencies[element] += 1;
        }
    });

    console.log(wordOccurencies)
    movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);