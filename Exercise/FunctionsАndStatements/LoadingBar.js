function solve(num) {
    let percantage = num / 10;
    let leftPercantage = Math.ceil(10 - percantage);
    if(leftPercantage !== 0) {
        console.log(`${num}% [${'%'.repeat(percantage)}${'.'.repeat(leftPercantage)}]\nStill loading...`)
    } else {
        console.log('100% Complete!')
    }
}

solve(27);