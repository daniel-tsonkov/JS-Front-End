function solve(input) {
    let movies = [];

    input.forEach(command => {
        if (command.includes("addMovie")) {
            //console.log(command.replace('addMovie ', ''));
            const name = command.replace('addMovie ', '');
            movies.push({
                name
            })
        } else if (command.includes("onDate")) {
            //console.log(command);
            const [movieName, date] = command.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = date;
            }
        } else if (command.includes("directedBy")) {
            //console.log(command.replace(' directedBy ', ' '));
            const [movieName, directorName] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = directorName;
            }
        };
    });
    console.log(JSON.stringify(movies));
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