function solve(inputText) {
    let regex = /#[A-Za-z]+/gm;

    let matches = inputText.match(regex);

    for(let word of matches) {
        console.log(word.replace("#", ""));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');