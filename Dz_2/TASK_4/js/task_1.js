/*jshint esversion: 6 */
const inputs = document.querySelectorAll('input');
const buttonSquare = document.querySelector('.calculateButtonSquare');
const button = document.querySelector('button');

const lengthArea = document.querySelector('#lengthArea');
const widthArea = document.querySelector('#widthArea');
const heightArea = document.querySelector('#heightArea');

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


buttonSquare.addEventListener('click', calculatePaintCans = () =>{
    const onePaintCan = 16;
    const officeSquare = 2 * heightArea.value * lengthArea.value + 2 * heightArea.value * widthArea.value;
    const result = officeSquare / onePaintCan;
    
    switch (true) {
        case lengthArea.value > 1000 && widthArea.value > 1000 && heightArea.value > 1000:
            alert(`length, width and height have too high values. Enter the correct ones`);
            clearInputs();
            break;
        
        case lengthArea.value > 1000 && widthArea.value > 1000:
            alert(`length and width have too high values. Enter the correct ones`);
            clearInputs();
            break;

        case lengthArea.value > 1000 && heightArea.value > 1000:
            alert(`length and height have too high values. Enter the correct ones`);
            clearInputs();
            break;

        case widthArea.value > 1000 && heightArea.value > 1000:
            alert(`width and height have too high values. Enter the correct ones`);
            clearInputs();
            break;

        case lengthArea.value > 1000:
            alert(`length has too high value. Enter the correct one`);
            clearInputs();
            break;

        case widthArea.value > 1000:
            alert(`width has too high value. Enter the correct one`);
            clearInputs();
            break;

        case heightArea.value > 1000:
            alert(`height has too high value. Enter the correct one`);
            clearInputs();
            break;
        
        default:
            alert(`The number of cans of paint that you need: ${Math.ceil(result)}`);
            break;
    }
    clearInputs();
});

const clearInputs = () => {
    lengthArea.value = '';
    widthArea.value = '';
    heightArea.value = '';
    handleChange();
};

const handleChange = () => {
    for (const input of inputs) {
        if (input.value === "") {
            button.style.backgroundColor = 'red';
            button.setAttribute('disabled', '');
            return;
        }
    }
    button.style.backgroundColor = '#7AB893';
    button.removeAttribute('disabled');
};

for (const input of inputs) {
    input.onkeydown = input.onkeyup = input.change = handleChange;
}