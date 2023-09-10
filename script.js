const lineNumbersInput = document.getElementById('lineNumberInput');
const inputCode = document.getElementById('inputCode');
const btnRun = document.getElementById('btnRun');

inputCode.addEventListener('input', () => {
    autoExpand(inputCode);
    updateLineNumbers();
});

inputCode.addEventListener('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const value = this.value;
        this.value = value.substring(0, start) + "\t" + value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

btnRun.addEventListener('click', function () {
    const inputContent = inputCode.value;
    print(inputContent);
});

function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function updateLineNumbers() {
    const lines = inputCode.value.split('\n');
    const lineCount = lines.length;

    let lineNumbersHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        lineNumbersHTML += i + '<br>';
    }

    lineNumbersInput.innerHTML = lineNumbersHTML;
}

function print(inputContent) {
    console.log(inputContent);
}

autoExpand(inputCode);
updateLineNumbers();