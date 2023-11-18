function solve(input) {
    const [searchWords, ...words] = input;

    const wordOccurencies = searchWords.split(' ').reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    console.log(wordOccurencies)
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);