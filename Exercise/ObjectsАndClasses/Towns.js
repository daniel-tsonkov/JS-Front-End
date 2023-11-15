function solve(input) {
    const cityes = input.map((city) => {
        const [name, lat, lon] = city.split(' | ');
        return { town: name, latitude: lat, longitude: lon };
    }).forEach(element => {
        console.log(`town: , latitude: ${Element.lat}, longitude: ${Element.lon}`);
    });;

    
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);