const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            result.value = '';
        } else if (button.textContent === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            result.value += button.textContent;
        }
    });
});