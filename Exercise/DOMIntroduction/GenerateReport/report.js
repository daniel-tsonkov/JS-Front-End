function generateReport() {
    let personObject = {};
    let allPersonsObjects = [];
    let columnSetNumbers = [];

    let columsAll = document.querySelectorAll('thead tr th input');

    for (let index = 0; index < columsAll.length; index++) {
        let checkBox = columsAll[index].checked;

        if (checkBox) {
            columnSetNumbers.push(index);
        }
    }

    let columnTitles = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    let rowCount = document.querySelectorAll('tbody tr').length;

    for (let row = 0; row < rowCount; row++) {
        columnSetNumbers.forEach(e => {
            let key = columnTitles[e].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[e].textContent;
            personObject[key] = value;
        });

        allPersonsObjects.push(Object.assign(personObject));
        personObject = {};
    }
    document.getElementById('output').innerHTML = JSON.stringify(allPersonsObjects);
}