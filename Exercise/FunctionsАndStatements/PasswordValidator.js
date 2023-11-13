function solve(password) {
    let passwordIsCorect = true;

    function checkLenght(myText) {
        return myText.length >= 6 && myText.length <= 10;
    }

    function containsOnlyAlphaNumericals(myText) {
        let regex = /^[a-zA-Z0-9]+$/gm;
        let result = regex.test(myText);
        return result;
    }

    function twoOrMoreDigit(myText) {
        let regex = /^(.*\d){2,}.*$/gm;
        let result = regex.test(myText);
        return result;
    }

    if (!checkLenght(password)) {
        console.log('Password must be between 6 and 10 characters');
        passwordIsCorect = false;
    }

    if (!containsOnlyAlphaNumericals(password)) {
        console.log('Password must consist only of letters and digits')
        passwordIsCorect = false;
    }

    if (!twoOrMoreDigit(password)) {
        console.log('Password must have at least 2 digits')
        passwordIsCorect = false;
    }

    if (passwordIsCorect) {
        console.log('Password is valid')
    }
}

solve('logIn@');