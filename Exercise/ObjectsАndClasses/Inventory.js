function solve(input) {
    let heroes = [];

    for (const heroData of input) {
        let [name, level, items] = heroData.split(' / ');
        let hero = {
            name,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    //heroes.forEach(h => console.log(h));

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);