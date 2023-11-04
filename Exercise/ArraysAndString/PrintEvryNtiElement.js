function solve(arr, nti) {
    let output = [];

    for (let i = 0; i < arr.length; i += nti) {
        output.push(arr[i]);
    }
    return output;
}

solve([51, 47, 32, 61, 21], 2);