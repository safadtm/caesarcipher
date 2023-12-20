document.addEventListener('DOMContentLoaded', function () {
    const encodebtn = document.querySelector('#encodeBt');
    const decodebtn = document.querySelector('#decodeBt');
    const key = 3;

    const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let output = '';

    encodebtn.addEventListener('click', () => {
        const textarea = document.getElementById('inputText');
        const resultText = document.getElementById('outputText');


        for (let letter of textarea.value) {
            letter=letter.toLowerCase();
            if (!listLetters.includes(letter)) {
                continue;
            }

            const indexLetter = listLetters.findIndex((item) => item === letter);
            let newIndexLetter = indexLetter + key;

            if (newIndexLetter > 25) {
                newIndexLetter -= 26;
            }

            output += listLetters[newIndexLetter];
            resultText.value = output;
        }

        output = '';
    })


    decodebtn.addEventListener('click', () => {
        const textarea = document.getElementById('inputText');
        const resultText = document.getElementById('outputText');


        for (let letter of textarea.value) {
            letter=letter.toLowerCase();
            if (!listLetters.includes(letter)) {
                continue;
            }

            const indexLetter = listLetters.findIndex((item) => item === letter);
            let newIndexLetter = indexLetter - key;

            if (newIndexLetter < 0) {
                newIndexLetter += 26;
            }

            output += listLetters[newIndexLetter];
            resultText.value = output;
        }

        output = '';
    })

});


