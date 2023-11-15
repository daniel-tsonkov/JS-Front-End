function solve(arr) {
    /*input.forEach((employees) => {
        console.log(`Name: ${employees} -- Personal Number: ${employees.length}`);
    })*/

    const employees = arr.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    Object.entries(employees).forEach(([name, number]) => {
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    });
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);