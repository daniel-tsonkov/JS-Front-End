function solve(arr) {
    function numberIsPalindrome(num) {
        let numAsString = num.toString();
        let reversedNumAsString = numAsString.split('').reverse().join('');

        return numAsString === reversedNumAsString;
    }

    for(let number of arr) {
        console.log(numberIsPalindrome(number));
    }
}

solve([123, 323, 421, 121]);