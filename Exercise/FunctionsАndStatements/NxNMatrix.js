function solve(num) {
    function repearChar(num) {
        let numtoChar = num + ' ';
        console.log(numtoChar.repeat(num).trimEnd());
    }

    for (let i = 0; i < num; i++) {
        repearChar(num);
    }
}

solve(7);