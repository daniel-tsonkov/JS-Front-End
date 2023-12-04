function encodeAndDecodeMessages() {
    let encodeTextArea = document.getElementsByTagName('textArea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];

    let decodeTextArea = document.getElementsByTagName('textArea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encodeText);
    decodeBtn.addEventListener('click', decodeText);

    function encodeText() {
        let message = encodeTextArea.value;
        let newMessage = '';

        for (let index = 0; index < message.length; index++) {
            let myChar = String.fromCodePoint(message[index].charCodeAt(0)+1);
            newMessage += myChar;
        }

        decodeTextArea.value = newMessage;
        encodeTextArea.value = '';
        //document.getElementsByTagName('button')[0].disabled = true;
        document.getElementsByTagName('button')[1].disabled = false;
    }

    function decodeText() {
        let message = decodeTextArea.value;
        let newMessage = '';

        for (let index = 0; index < message.length; index++) {
            let myChar = String.fromCodePoint(message[index].charCodeAt(0)-1);
            newMessage += myChar;
        }

        //encodeTextArea.value = newMessage;
        decodeTextArea.value = newMessage;
        document.getElementsByTagName('button')[0].disabled = false;
        document.getElementsByTagName('button')[1].disabled = true;
    }
}