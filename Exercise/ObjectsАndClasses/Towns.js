function solve(input) {
    const cityes = input.map((city) => {
        const [name, lat, lon] = city.split(' | ');
        return { town: name, latitude: Number(lat), longitude: Number(lon) };
    }).forEach(element => {
        console.log(`{ town: '${element.town}', latitude: '${element.latitude.toFixed(2)}', longitude: '${element.longitude.toFixed(2)}' }`);
    });;
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);