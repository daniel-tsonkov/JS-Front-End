function solve(input) {
    let heroes = [];
    for (const heroData of heroes) {
        let [name, level, items] = heroData.split(" - ");
        let hero = {
            name: name,
            level: Number(level),
            item: items
        }
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);