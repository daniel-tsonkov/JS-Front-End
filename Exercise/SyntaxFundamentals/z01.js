function solve(age) {
    if ((age >= 0) && (age < 3)) {
        console.log("baby");
    } else if ((age > 2) && (age < 14)) {
        console.log("child");
    } else if ((age > 13) && (age < 20)) {
        console.log("teenager");
    } else if ((age > 19) && (age < 66)) {
        console.log("adult");
    } else if (age > 65) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

solve(-1);