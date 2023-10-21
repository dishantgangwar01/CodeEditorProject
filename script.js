// script.js
const codeElement = document.getElementById('code');
const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');

let isLocked = false;

copyButton.addEventListener('click', () => {
    const textToCopy = codeElement.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});

saveButton.addEventListener('click', () => {
    // You can implement saving functionality here.
    // For simplicity, we'll just log the code to the console.
    console.log(codeElement.textContent);
});

lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    codeElement.contentEditable = !isLocked;
    lockButton.innerText = isLocked ? 'Unlock' : 'Lock';
});
