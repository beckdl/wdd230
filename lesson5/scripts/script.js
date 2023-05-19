const input = "";
const button = "";
const list = "";
button.addEventListener('click', function() {
    if (input == "") {
        input = "";
    }
    else {
        const listElement = document.createElement('li');
        const listButton = document.createElement('button');

        listElement.textContent = input;
        listButton.textContent = '&#x274C';

        listElement.appendChild(listButton);

        list.appendChild(listElement);

        listButton.addEventListener('click', () => {
            list.removeChild(input);
        });

        input.focus();
    }
})