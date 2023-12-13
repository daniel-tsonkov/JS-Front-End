function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    const [nameInput, contentInput, sendButton, refreshButton] = document.getElementsByTagName('input');
    const messagesTextArea = document.getElementById('messages');

    sendButton.addEventListener('click', async () => {
        const messageFormat = {
            author: nameInput.value,
            content: contentInput.value
        };

        if ((nameInput.value !== '') && (contentInput.value !== '')) {
            await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });
        }

        nameInput.value = '';
        contentInput.value = '';
    });

    refreshButton.addEventListener('click', async () => {
        const response = await fetch(baseURL)
        const messages = await response.json();

        console.log(messages);
    })
}

attachEvents();