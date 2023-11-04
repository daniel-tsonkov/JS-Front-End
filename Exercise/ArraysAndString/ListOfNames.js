function solve(arr) {
    arr.sort((a, b) => {
        return a.localeCompare(b);
    });

    /*for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }*/
    
    let index = 1;
    for (let name of arr) {
        console.log(`${index}.${name}`);
        index++;
    }
}

solve(["john", "Bob", "Cristina", "Ema"]);