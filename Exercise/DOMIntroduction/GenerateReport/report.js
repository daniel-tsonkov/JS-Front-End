function generateReport() {
    let personObject = {};
    let allPersonsObjects = [];
    let columnSetNumbers = [];

    let columsAll = document.querySelectorAll('thead tr th input');

    for (const index of columsAll) {
        let checkBox = index.checked;
        console.log(checkBox);
    }
}