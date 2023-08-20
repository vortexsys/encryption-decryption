function encryptText() {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("encryptionKey").value;
    const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById("inputText").value;
    const key = document.getElementById("encryptionKey").value;
    try {
        const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        document.getElementById("outputText").value = decryptedText;
    } catch (error) {
        document.getElementById("outputText").value = "Error: Invalid decryption key or ciphertext.";
    }
}
