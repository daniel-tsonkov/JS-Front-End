function solve() {
    const [generateTextAreas, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
    const [generateBtn, buyBtn] = Array.from(documents.getElementsByTagName('button'));
    const tbody = document.querySelector('.table > tbody');

    generateBtn.addEventListener('click', generateHandler);

    function generateHandler() {
        const data = JSON.parse(generateTextAreas.value);
        console.log('asd');

        for (const { img, name, price, decFactor } of data) {
            const tableRow = createElement('tr', '', tbody);
            const firstColumnTd = createElement('td', '', tableRow);
            const htmlImg = createElement('img', '', firstColumnTd, '', '', { src: img });
            const secondColumnTd = createElement('td', '', tableRow);
        }
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
}