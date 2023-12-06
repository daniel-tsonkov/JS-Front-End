function solve() {
    const [generateTextAreas, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
    const [generateBtn, buyBtn] = Array.from(documents.getElementsByTagName('button'));

    generateBtn.addEventListener('click', generateHandler);

    function generateHandler() {
        const data = JSON.parse(generateTextAreas.value);
    }
}

function createElement(type, content, id, classes, parentNode, attributes) {
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