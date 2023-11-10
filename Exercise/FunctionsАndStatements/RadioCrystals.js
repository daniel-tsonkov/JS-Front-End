function solve(target, chunk) {
    let counter = 0;
    let beginChunk = chunk;

    while (beginChunk > target) {
        if (beginChunk / 4 >= target) {
            beginChunk = beginChunk / 4;
            counter++;
            console.log(`Cut x${counter} Processing chunk ${beginChunk} microns`);
        }

        if (beginChunk * 0.8 >= target) {
            beginChunk = Math.floor(beginChunk * 0.8);
            counter++;
            console.log(`Lap x${counter} Processing chunk ${beginChunk} microns`);
        }

        if (beginChunk - 20 >= target) {
            beginChunk -= 20;
            counter++;
            console.log(`Grind x${counter} Processing chunk ${beginChunk} microns`);
        }

        if (beginChunk - 2 >= target || beginChunk - 1 === target) {
            beginChunk -= 2;
            counter++;
            console.log(`Etch x${counter} Processing chunk ${beginChunk} microns`);
        }
    }

    if (beginChunk === target - 1) {
        beginChunk += 1;
        console.log(`X-ray x1 Processing chunk ${beginChunk} microns`);
    }

    console.log(`Finished crystal ${beginChunk} microns`);
}

solve(1375, 50000);
