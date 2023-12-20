function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');

}