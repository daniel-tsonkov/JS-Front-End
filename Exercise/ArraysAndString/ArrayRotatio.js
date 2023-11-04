function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let value = arr.shift();
    
    arr.push(value);
    }
    console.log(arr.join(' '));
    }

solve([51, 47, 32, 61, 21], 2);