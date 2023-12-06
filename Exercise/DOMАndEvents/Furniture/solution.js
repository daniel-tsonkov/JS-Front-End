function solve() {
    const [generateTextAreas, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
    const tbody = document.querySelector('.table > tbody');

    generateBtn.addEventListener('click', generateHandler);
    buyBtn.addEventListener('click', )

    function generateHandler() {
        const data = JSON.parse(generateTextAreas.value);

        for (const { img, name, price, decFactor } of data) {
            const tableRow = createElement('tr', '', tbody);
            const firstColumnTd = createElement('td', '', tableRow);
            createElement('img', '', firstColumnTd, '', '', { src: img });
            const secondColumnTd = createElement('td', '', tableRow);
            createElement('p', name, secondColumnTd);
            const thirdColumnTd = createElement('td', '', tableRow);
            createElement('p', price, thirdColumnTd);
            const fourthColumnTd = createElement('td', '', tableRow);
            createElement('p', decFactor, fourthColumnTd);
            const fifthColumnTd = createElement('td', '', tableRow);
            createElement('input', '', fifthColumnTd, '', '', {type: 'checkbox'})
        }
    }

    function buyHandler() {
        
    }
}

function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input') {
        htmlElement.textContent = content;
    }

    if (content && type === 'input') {
        htmlElement.value = content;
    }

    if (id) {
        htmlElement.id = id;
    }

    if (classes) {
        htmlElement.classList.add(...classes);
    }

    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    if (attributes) {
        for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
        }
    }

    return htmlElement;
}