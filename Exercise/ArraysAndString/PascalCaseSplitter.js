function solve(leter) {
    let output = leter.match(/[A-Z][a-z]*/g);

    console.log(output.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')