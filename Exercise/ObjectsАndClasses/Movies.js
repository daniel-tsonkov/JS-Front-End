function solve(input) {
    input.forEach(command => {
if (command.includes("addMovie")) {
    //console.log(command);
}else if (command.includes("directedBy")) {
    //console.log(command);
}else if (command.includes("onDate")) {
    console.log(command);
};
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);