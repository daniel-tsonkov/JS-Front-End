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

    let entries = Object.entries(wordOccurencies).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);